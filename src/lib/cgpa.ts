import type { Curriculum, Grade, GradeScale, Semester } from "@/types/curriculum";
import type {
  ArrearOption,
  ArrearRowView,
  CourseGradeRow,
  SemesterComputed,
  TotalsComputed,
} from "@/types/computation";
import type { SemesterEntry, SemesterMode } from "@/types/storage";

const gradeIndex = (scale: GradeScale): Record<string, Grade> =>
  Object.fromEntries(scale.grades.map((g) => [g.label, g]));

/** A passing grade that earns credit points. */
const isCountedGrade = (label: string | null, byLabel: Record<string, Grade>): boolean => {
  if (!label) return false;
  const grade = byLabel[label];
  return Boolean(grade && !grade.exempt && grade.points > 0);
};

/** A failing 0-point grade (e.g. U, SA, AB) that must be cleared in a later semester. */
const isArrearGrade = (label: string | null, byLabel: Record<string, Grade>): boolean => {
  if (!label) return false;
  const grade = byLabel[label];
  return Boolean(grade && !grade.exempt && grade.points === 0);
};

/** The canonical failing grade label (e.g. `U`) for a grade scale. */
export function arrearGradeLabel(scale: GradeScale): string {
  return scale.grades.find((g) => !g.exempt && g.points === 0)?.label ?? "U";
}

/** Orders a semester's courses alphabetically by title, with non-credit courses always last. */
function sortCourses<T extends { title: string; credits: number; excludeFromCgpa?: boolean }>(
  items: { course: T; index: number }[],
): { course: T; index: number }[] {
  return items
    .map((item) => ({
      ...item,
      nonCredit: item.course.credits <= 0 || Boolean(item.course.excludeFromCgpa),
    }))
    .sort((a, b) => {
      if (a.nonCredit !== b.nonCredit) return a.nonCredit ? 1 : -1;
      const byTitle = a.course.title.localeCompare(b.course.title);
      return byTitle !== 0 ? byTitle : a.index - b.index;
    });
}

/** The resolved entry mode for a semester: subject-wise for the current one, SGPA for past ones. */
export function effectiveSemesterMode(
  entry: SemesterEntry | undefined,
  semesterNumber: number,
  activeSemester: number,
): SemesterMode {
  if (semesterNumber === 1 && activeSemester === 1) return "subject";
  return entry?.mode ?? (semesterNumber === activeSemester ? "subject" : "sgpa");
}

export interface SemesterComputationContext {
  /** How backlog grades contribute to the CGPA math. Defaults to `zero`. */
  arrearPolicy: "zero" | "exclude";
}

/** Per-subject semester math. Failed grades count as 0 points under `zero`, and are dropped under `exclude`. */
export function computeSemester(
  semester: Semester,
  grades: (string | null)[] | undefined,
  scale: GradeScale,
  context: SemesterComputationContext = { arrearPolicy: "zero" },
): SemesterComputed {
  const byLabel = gradeIndex(scale);
  let creditsRegistered = 0;
  let creditsCompleted = 0;
  let points = 0;

  const ordered = sortCourses(semester.courses.map((course, index) => ({ course, index })));
  const rows: CourseGradeRow[] = [];
  for (const { course, index } of ordered) {
    const canGrade = course.credits > 0 && !course.excludeFromCgpa;
    if (!canGrade) continue;

    const label = grades?.[index] ?? null;
    const arrear = isArrearGrade(label, byLabel);
    if (arrear && context.arrearPolicy === "exclude") {
      rows.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        category: course.category,
        gradeLabel: label,
        gradePoints: null,
        sourceIndex: index,
        counted: false,
        homeSemester: semester.number,
      });
      continue;
    }

    creditsRegistered += course.credits;
    if (arrear) {
      creditsCompleted += course.credits;
      rows.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        category: course.category,
        gradeLabel: label,
        gradePoints: 0,
        sourceIndex: index,
        counted: true,
        homeSemester: semester.number,
      });
      continue;
    }

    const grade = label ? byLabel[label] : undefined;
    if (isCountedGrade(label, byLabel)) {
      const gradePoints = grade?.points ?? 0;
      creditsCompleted += course.credits;
      points += gradePoints * course.credits;
      rows.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        category: course.category,
        gradeLabel: label,
        gradePoints,
        sourceIndex: index,
        counted: true,
        homeSemester: semester.number,
      });
    } else {
      rows.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        category: course.category,
        gradeLabel: label,
        gradePoints: null,
        sourceIndex: index,
        counted: false,
        homeSemester: semester.number,
      });
    }
  }

  return {
    semester,
    canGrade: creditsRegistered > 0,
    creditsRegistered,
    creditsCompleted,
    points,
    sgpa: creditsCompleted > 0 ? points / creditsCompleted : null,
    rows,
  };
}

export function computeTotals(results: SemesterComputed[]): TotalsComputed {
  let creditsRegistered = 0;
  let creditsCompleted = 0;
  let points = 0;
  for (const r of results) {
    creditsRegistered += r.creditsRegistered;
    creditsCompleted += r.creditsCompleted;
    points += r.points;
  }
  return {
    creditsRegistered,
    creditsCompleted,
    points,
    cgpa: creditsCompleted > 0 ? points / creditsCompleted : null,
  };
}

/** Looks up a subject anywhere in a curriculum, returning its details and home semester. */
function findCourse(
  curriculum: Curriculum,
  subjectId: string,
): { code: string; title: string; credits: number; homeSemester: number } | null {
  for (const semester of curriculum.semesters) {
    for (const course of semester.courses) {
      if (course.code === subjectId) {
        return {
          code: course.code,
          title: course.title,
          credits: course.credits,
          homeSemester: semester.number,
        };
      }
    }
  }
  return null;
}

/**
 * Retroactive grade points earned by clearing earlier arrears, keyed by the
 * subject's home semester. Under the `zero` policy a cleared arrear adds its
 * grade points back to the semester where the failure was counted as 0.
 */
function buildHomeClearedPoints(
  curriculum: Curriculum,
  entries: Record<number, SemesterEntry>,
  activeSemester: number,
  byLabel: Record<string, Grade>,
): Map<number, Map<string, number>> {
  const homeClearedPoints = new Map<number, Map<string, number>>();
  for (const semester of curriculum.semesters) {
    if (semester.number > activeSemester) continue;
    for (const arrear of entries[semester.number]?.clearedArrears ?? []) {
      const course = findCourse(curriculum, arrear.subjectId);
      if (!course) continue;
      const grade = byLabel[arrear.grade];
      if (!grade || grade.exempt || grade.points <= 0) continue;
      let perSemester = homeClearedPoints.get(course.homeSemester);
      if (!perSemester) {
        perSemester = new Map<string, number>();
        homeClearedPoints.set(course.homeSemester, perSemester);
      }
      perSemester.set(course.code, grade.points);
    }
  }
  return homeClearedPoints;
}

/** Adds retroactive cleared-arr ear points to a semester result. */
function applyClearedPoints(
  computed: SemesterComputed,
  clearedPoints: Map<string, number>,
  byLabel: Record<string, Grade>,
  verifyArrear: boolean,
): SemesterComputed {
  let points = computed.points;
  let changed = false;
  for (const course of computed.semester.courses) {
    const pts = clearedPoints.get(course.code);
    if (pts === undefined) continue;
    if (verifyArrear) {
      const row = computed.rows.find((r) => r.code === course.code);
      if (!row || !isArrearGrade(row.gradeLabel, byLabel)) continue;
    }
    points += pts * course.credits;
    changed = true;
  }
  if (!changed) return computed;
  return {
    ...computed,
    points,
    sgpa: computed.creditsCompleted > 0 ? points / computed.creditsCompleted : computed.sgpa,
  };
}

/**
 * Resolves a semester to a computed result. Subject-wise grades are used when
 * the semester is in `subject` mode (or when SGPA mode has grades but no SGPA).
 * Otherwise the typed overall SGPA is weighted by the semester's credits. The
 * home semester's retroactive cleared-arr ear points are then applied.
 */
function resolveSemester(
  semester: Semester,
  entry: SemesterEntry | undefined,
  scale: GradeScale,
  activeSemester: number,
  homeClearedPoints: Map<number, Map<string, number>>,
  policy: "zero" | "exclude",
): SemesterComputed {
  const byLabel = gradeIndex(scale);
  const grades = entry?.grades;
  const raw = entry?.sgpa;
  const hasSgpa =
    raw !== null && raw !== undefined && raw.trim() !== "" && !Number.isNaN(Number(raw));
  const mode = effectiveSemesterMode(entry, semester.number, activeSemester);
  const useShortcut = mode === "sgpa" && hasSgpa;

  const base = computeSemester(semester, grades, scale, { arrearPolicy: policy });
  let result = base;
  if (useShortcut) {
    const sgpa = clampSgpa(Number(raw));
    const credits = semesterCredits(semester);
    if (credits > 0) {
      result = {
        ...base,
        canGrade: true,
        creditsRegistered: credits,
        creditsCompleted: credits,
        points: sgpa * credits,
        sgpa,
      };
    }
  }
  const cleared = homeClearedPoints.get(semester.number);
  if (cleared && cleared.size > 0) {
    result = applyClearedPoints(result, cleared, byLabel, !useShortcut);
  }
  return result;
}

/** Every arrear subject up to the active semester, with its clear status. */
export function collectArrears(
  curriculum: Curriculum,
  entries: Record<number, SemesterEntry>,
  activeSemester: number,
  byLabel: Record<string, Grade>,
): ArrearRowView[] {
  const views: ArrearRowView[] = [];
  const represented = new Set<string>();
  const resolveClear = (homeSemester: number, code: string) => {
    for (const later of curriculum.semesters) {
      if (later.number <= homeSemester || later.number > activeSemester) continue;
      const clear = (entries[later.number]?.clearedArrears ?? []).find((a) => a.subjectId === code);
      if (clear) {
        return { clearedSemester: later.number, clearedGrade: clear.grade };
      }
    }
    return { clearedSemester: null, clearedGrade: null };
  };

  for (const semester of curriculum.semesters) {
    if (semester.number > activeSemester) continue;
    const grades = entries[semester.number]?.grades ?? [];
    for (const [index, course] of semester.courses.entries()) {
      const label = grades[index] ?? null;
      if (!isArrearGrade(label, byLabel)) continue;
      represented.add(course.code);
      const { clearedSemester, clearedGrade } = resolveClear(semester.number, course.code);
      views.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        homeSemester: semester.number,
        grade: label!,
        clearedSemester,
        clearedGrade,
      });
    }
    for (const arrear of entries[semester.number]?.arrears ?? []) {
      if (represented.has(arrear.subjectId)) continue;
      const course = findCourse(curriculum, arrear.subjectId);
      if (!course) continue;
      represented.add(course.code);
      const { clearedSemester, clearedGrade } = resolveClear(semester.number, course.code);
      views.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        homeSemester: semester.number,
        grade: null,
        clearedSemester,
        clearedGrade,
      });
    }
  }

  for (const semester of curriculum.semesters) {
    if (semester.number > activeSemester) continue;
    for (const arrear of entries[semester.number]?.clearedArrears ?? []) {
      if (represented.has(arrear.subjectId)) continue;
      const course = findCourse(curriculum, arrear.subjectId);
      if (!course) continue;
      represented.add(course.code);
      views.push({
        code: course.code,
        title: course.title,
        credits: course.credits,
        homeSemester: course.homeSemester,
        grade: null,
        clearedSemester: semester.number,
        clearedGrade: arrear.grade,
      });
    }
  }
  return views;
}

/** Subjects manually recorded as arrears from a specific semester (SGPA mode). */
export function addedArrearsFor(
  curriculum: Curriculum,
  entries: Record<number, SemesterEntry>,
  semesterNumber: number,
): ArrearRowView[] {
  const arrears = entries[semesterNumber]?.arrears ?? [];
  if (arrears.length === 0) return [];
  const semester = curriculum.semesters.find((s) => s.number === semesterNumber);
  if (!semester) return [];
  return arrears.flatMap(({ subjectId }) => {
    const course = semester.courses.find((c) => c.code === subjectId);
    if (!course) return [];
    return [
      {
        code: course.code,
        title: course.title,
        credits: course.credits,
        homeSemester: semester.number,
        grade: null,
        clearedSemester: null,
        clearedGrade: null,
      },
    ];
  });
}

/** Subjects that can still be recorded as arrears from an SGPA-mode semester. */
export function arrearOptionsFor(
  curriculum: Curriculum,
  entries: Record<number, SemesterEntry>,
  activeSemester: number,
  semesterNumber: number,
  gradeScale: GradeScale,
): ArrearOption[] {
  const byLabel = gradeIndex(gradeScale);
  const used = new Set<string>();
  for (const semester of curriculum.semesters) {
    if (semester.number > activeSemester) continue;
    const grades = entries[semester.number]?.grades ?? [];
    for (const [index, course] of semester.courses.entries()) {
      if (isArrearGrade(grades[index] ?? null, byLabel)) used.add(course.code);
    }
    for (const arrear of entries[semester.number]?.arrears ?? []) {
      used.add(arrear.subjectId);
    }
    for (const arrear of entries[semester.number]?.clearedArrears ?? []) {
      used.add(arrear.subjectId);
    }
  }
  const options: ArrearOption[] = [];
  const semester = curriculum.semesters.find((s) => s.number === semesterNumber);
  if (!semester) return options;
  for (const course of semester.courses) {
    if (course.credits <= 0 || course.excludeFromCgpa) continue;
    if (used.has(course.code)) continue;
    options.push({
      code: course.code,
      title: course.title,
      credits: course.credits,
      homeSemester: semester.number,
    });
  }
  return options;
}

export interface CgpaResults {
  computedSemesters: SemesterComputed[];
  totals: TotalsComputed;
  previousTotals: TotalsComputed;
  activeComputed: SemesterComputed | null;
  previousCgpa: number | null;
  currentSemesterSgpa: number | null;
  gradedSemesterCount: number;
  creditsCompleted: number;
  percentage: number | null;
  arrears: ArrearRowView[];
  activeArrears: ArrearRowView[];
  clearedArrears: ArrearRowView[];
  activeArrearCount: number;
  clearedArrearCount: number;
}

export function buildResults(
  curriculum: Curriculum,
  entries: Record<number, SemesterEntry>,
  gradeScale: GradeScale,
  activeSemester: number,
): CgpaResults {
  const byLabel = gradeIndex(gradeScale);
  const policy = curriculum.arrearPolicy ?? "zero";
  const homeClearedPoints = buildHomeClearedPoints(curriculum, entries, activeSemester, byLabel);

  const computedSemesters = curriculum.semesters
    .filter((s) => s.number <= activeSemester)
    .map((semester) =>
      resolveSemester(
        semester,
        entries[semester.number],
        gradeScale,
        activeSemester,
        homeClearedPoints,
        policy,
      ),
    );
  const totals = computeTotals(computedSemesters);
  const previousTotals = computeTotals(
    computedSemesters.filter((c) => c.semester.number < activeSemester),
  );
  const activeComputed =
    computedSemesters.find((c) => c.semester.number === activeSemester) ?? null;
  const gradedSemesterCount = computedSemesters.filter((c) => c.sgpa !== null).length;
  const arrears = collectArrears(curriculum, entries, activeSemester, byLabel);
  const activeArrears = arrears.filter((a) => a.clearedSemester === null);
  const clearedArrears = arrears.filter((a) => a.clearedSemester !== null);
  return {
    computedSemesters,
    totals,
    previousTotals,
    activeComputed,
    previousCgpa: previousTotals.cgpa,
    currentSemesterSgpa: activeComputed?.sgpa ?? null,
    gradedSemesterCount,
    creditsCompleted: totals.creditsCompleted,
    percentage: percentageFor(curriculum, totals.cgpa),
    arrears,
    activeArrears,
    clearedArrears,
    activeArrearCount: activeArrears.length,
    clearedArrearCount: clearedArrears.length,
  };
}

export function percentageFor(curriculum: Curriculum, cgpa: number | null): number | null {
  if (cgpa === null) return null;
  const value = curriculum.percentageFormula === "cgpa-x10" ? cgpa * 10 : (cgpa - 0.75) * 10;
  return Math.max(0, value);
}

export function programCredits(curriculum: Curriculum): number {
  let total = 0;
  for (const sem of curriculum.semesters) {
    for (const course of sem.courses) {
      if (course.credits > 0 && !course.excludeFromCgpa) total += course.credits;
    }
  }
  return total;
}

export function semesterCredits(semester: Semester): number {
  return semester.courses.reduce(
    (sum, c) => (c.credits > 0 && !c.excludeFromCgpa ? sum + c.credits : sum),
    0,
  );
}

/** The academic year a curriculum's students were admitted, parsed from `batch` (e.g. `B2025`). */
export function admissionYearOf(curriculum: Curriculum): number {
  const match = /(\d{4})/.exec(curriculum.batch);
  return match ? Number(match[1]) : new Date().getFullYear();
}

/**
 * Estimates the semester a student is currently in from the admission year and
 * the given date, using the July-to-June academic calendar: odd semesters run
 * July-December, even semesters run January-June. The result is clamped to the
 * curriculum's semester range.
 */
export function suggestedSemester(curriculum: Curriculum, date = new Date()): number {
  const startMonth = 7;
  const months =
    (date.getFullYear() - admissionYearOf(curriculum)) * 12 + (date.getMonth() + 1 - startMonth);
  const sem = Math.floor(months / 6) + 1;
  return Math.min(Math.max(sem, 1), curriculum.semesters.length);
}

export function clampSgpa(value: number): number {
  return Math.min(Math.max(value, 0), 10);
}

export function formatDecimal(value: number | null): string {
  return value === null ? "-" : value.toFixed(2);
}

/** Human-readable percentage formula, e.g. `CGPA \u00D7 10` or `(CGPA \u2212 0.75) \u00D7 10`. */
export function percentageFormulaLabel(curriculum: Curriculum): string {
  return curriculum.percentageFormula === "cgpa-x10"
    ? "CGPA \u00D7 10"
    : "(CGPA \u2212 0.75) \u00D7 10";
}
