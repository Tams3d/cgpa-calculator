import type { Curriculum, Grade, GradeScale, Semester } from "@/types/curriculum";
import type { CourseGradeRow, SemesterComputed, TotalsComputed } from "@/types/computation";
import type { SemesterEntry } from "@/types/storage";

const gradeIndex = (scale: GradeScale): Record<string, Grade> =>
  Object.fromEntries(scale.grades.map((g) => [g.label, g]));

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

export function computeSemester(
  semester: Semester,
  grades: (string | null)[] | undefined,
  scale: GradeScale,
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

    creditsRegistered += course.credits;
    const label = grades?.[index] ?? null;
    const grade = label ? byLabel[label] : undefined;
    const counted = Boolean(label && grade && !grade.exempt);

    if (counted) {
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
}

export function buildResults(
  curriculum: Curriculum,
  entries: Record<number, SemesterEntry>,
  gradeScale: GradeScale,
  activeSemester: number,
): CgpaResults {
  const computedSemesters = curriculum.semesters.map((semester) =>
    semester.number < activeSemester
      ? resolveSemester(semester, entries[semester.number], gradeScale)
      : computeSemester(semester, entries[semester.number]?.grades, gradeScale),
  );
  const totals = computeTotals(computedSemesters);
  const previousTotals = computeTotals(
    computedSemesters.filter((c) => c.semester.number < activeSemester),
  );
  const activeComputed =
    computedSemesters.find((c) => c.semester.number === activeSemester) ?? null;
  const gradedSemesterCount = computedSemesters.filter(
    (c) => c.semester.number <= activeSemester && c.sgpa !== null,
  ).length;
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

/**
 * Resolves a semester to a computed result. When the student supplies an
 * overall SGPA for a past semester, that value is used (weighted by the
 * semester's credits) instead of per-subject grades. Otherwise per-subject
 * grades are used when available.
 */
export function resolveSemester(
  semester: Semester,
  entry: SemesterEntry | undefined,
  scale: GradeScale,
): SemesterComputed {
  const base = computeSemester(semester, entry?.grades, scale);
  const raw = entry?.sgpa;
  if (raw === undefined || raw === null || raw.trim() === "") return base;
  const numeric = Number(raw);
  if (Number.isNaN(numeric)) return base;
  const sgpa = clampSgpa(numeric);
  const credits = semesterCredits(semester);
  if (credits <= 0) return base;
  return {
    ...base,
    canGrade: true,
    creditsRegistered: credits,
    creditsCompleted: credits,
    points: sgpa * credits,
    sgpa,
  };
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
