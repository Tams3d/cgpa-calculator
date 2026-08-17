import { useCallback, useEffect, useMemo, useState } from "react";
import { COLLEGES } from "@/data/colleges";
import { GRADE_SCALES } from "@/data/gradeScales";
import type { Curriculum, Department } from "@/types/curriculum";
import type { SemesterEntry, SemesterMode } from "@/types/storage";
import type { ArrearOption, ArrearRowView, PastSemesterView } from "@/types/computation";
import { loadState, saveState } from "@/lib/storage";
import {
  addedArrearsFor,
  arrearGradeLabel,
  arrearOptionsFor,
  buildResults,
  computeSemester,
  effectiveSemesterMode,
  programCredits,
  suggestedSemester,
} from "@/lib/cgpa";

const DEFAULT_COLLEGE = COLLEGES[0]!;
const DEFAULT_DEPARTMENT_ID = "cse";
const PREFERRED_BATCH = "B2025";

function preferredCurriculum(department: Department) {
  return (
    department.curricula.find((c) => c.batch.startsWith(PREFERRED_BATCH)) ??
    department.curricula[department.curricula.length - 1]!
  );
}

function makeSelections(
  persistedCollegeId: string | undefined,
  persistedDeptId: string | undefined,
  persistedCurId: string | undefined,
) {
  const college = COLLEGES.find((c) => c.id === persistedCollegeId) ?? DEFAULT_COLLEGE;
  const department =
    college.departments.find((d) => d.id === persistedDeptId) ??
    college.departments.find((d) => d.id === DEFAULT_DEPARTMENT_ID) ??
    college.departments[0]!;
  const curriculumId =
    persistedCurId !== undefined && department.curricula.some((c) => c.id === persistedCurId)
      ? persistedCurId
      : preferredCurriculum(department).id;
  return { collegeId: college.id, departmentId: department.id, curriculumId };
}

type EntriesMap = Record<string, Record<number, SemesterEntry>>;

export function useCgpaStore() {
  const [persisted] = useState(() => loadState());
  const initialSelections = useMemo(
    () => makeSelections(persisted?.collegeId, persisted?.deptId, persisted?.curriculumId),
    [persisted],
  );
  const [collegeId, setCollegeId] = useState(initialSelections.collegeId);
  const [departmentId, setDepartmentId] = useState(initialSelections.departmentId);
  const [curriculumId, setCurriculumId] = useState(initialSelections.curriculumId);
  const initialSemester = useMemo(() => {
    if (persisted?.currentSem) return persisted.currentSem;
    const department = DEFAULT_COLLEGE.departments.find(
      (d) => d.id === initialSelections.departmentId,
    )!;
    const curriculum = department.curricula.find((c) => c.id === initialSelections.curriculumId)!;
    return suggestedSemester(curriculum);
  }, [persisted, initialSelections.departmentId, initialSelections.curriculumId]);
  const [currentSemester, setCurrentSemester] = useState(initialSemester);
  const [entries, setEntries] = useState<EntriesMap>(persisted?.byCurriculum ?? {});

  const college = useMemo(
    () => COLLEGES.find((c) => c.id === collegeId) ?? DEFAULT_COLLEGE,
    [collegeId],
  );
  const department = useMemo(
    () => college.departments.find((d) => d.id === departmentId) ?? college.departments[0]!,
    [college, departmentId],
  );
  const curriculum = useMemo(
    () =>
      department.curricula.find((c) => c.id === curriculumId) ??
      department.curricula[department.curricula.length - 1]!,
    [department, curriculumId],
  );
  const gradeScale = GRADE_SCALES[curriculum.gradeScaleId] ?? GRADE_SCALES.r2023!;
  const maxSemester = curriculum.semesters.length;
  const activeSemester = Math.min(Math.max(currentSemester, 1), maxSemester);
  const totalProgramCredits = useMemo(() => programCredits(curriculum), [curriculum]);
  const activeCurriculumEntries = useMemo(
    () => entries[curriculum.id] ?? {},
    [entries, curriculum.id],
  );

  useEffect(() => {
    saveState({
      collegeId,
      deptId: departmentId,
      curriculumId: curriculum.id,
      currentSem: activeSemester,
      byCurriculum: entries,
    });
  }, [collegeId, departmentId, curriculum.id, activeSemester, entries]);

  const results = useMemo(
    () => buildResults(curriculum, activeCurriculumEntries, gradeScale, activeSemester),
    [curriculum, activeCurriculumEntries, gradeScale, activeSemester],
  );

  const pastSemesters = useMemo<PastSemesterView[]>(
    () =>
      results.computedSemesters
        .filter((c) => c.semester.number < activeSemester)
        .sort((a, b) => b.semester.number - a.semester.number)
        .map((c) => {
          const n = c.semester.number;
          const entry = activeCurriculumEntries[n];
          const mode = effectiveSemesterMode(entry, n, activeSemester);
          return {
            computed: c,
            sgpaValue: entry?.sgpa ?? "",
            mode,
            clearedArrears: results.clearedArrears.filter((a) => a.clearedSemester === n),
            pendingArrears: results.activeArrears.filter((a) => a.homeSemester < n),
            addedArrears: addedArrearsFor(curriculum, activeCurriculumEntries, n),
            arrearAddOptions: arrearOptionsFor(
              curriculum,
              activeCurriculumEntries,
              activeSemester,
              n,
              gradeScale,
            ),
          };
        }),
    [results, activeSemester, activeCurriculumEntries, curriculum, gradeScale],
  );

  const activeEntry = activeCurriculumEntries[activeSemester];
  const activeMode = effectiveSemesterMode(activeEntry, activeSemester, activeSemester);
  const activeSgpaValue = activeEntry?.sgpa ?? "";

  const activeClearedArrears = useMemo<ArrearRowView[]>(
    () => results.clearedArrears.filter((a) => a.clearedSemester === activeSemester),
    [results, activeSemester],
  );
  const activePendingArrears = useMemo<ArrearRowView[]>(
    () => results.activeArrears.filter((a) => a.homeSemester < activeSemester),
    [results, activeSemester],
  );
  const activeArrearAddOptions = useMemo<ArrearOption[]>(
    () =>
      arrearOptionsFor(
        curriculum,
        activeCurriculumEntries,
        activeSemester,
        activeSemester,
        gradeScale,
      ),
    [curriculum, activeCurriculumEntries, activeSemester, gradeScale],
  );
  const activeAddedArrears = useMemo<ArrearRowView[]>(
    () => addedArrearsFor(curriculum, activeCurriculumEntries, activeSemester),
    [curriculum, activeCurriculumEntries, activeSemester],
  );

  const hasAnyGrades = results.totals.creditsCompleted > 0 || results.gradedSemesterCount > 0;

  /** Derives an SGPA string from a semester's subject grades, if the semester has any. */
  const sgpaFromGrades = useCallback(
    (semesterNumber: number, entry: SemesterEntry | undefined): string | undefined => {
      if (!entry?.grades?.some((g) => g !== null && g !== undefined)) return undefined;
      const semester = curriculum.semesters.find((s) => s.number === semesterNumber);
      if (!semester) return undefined;
      const computed = computeSemester(semester, entry.grades, gradeScale, {
        arrearPolicy: curriculum.arrearPolicy ?? "zero",
      });
      return computed.sgpa === null ? undefined : computed.sgpa.toFixed(2);
    },
    [curriculum, gradeScale],
  );

  const resetToSemester = useCallback((nextCurriculum: Curriculum) => {
    const semester = suggestedSemester(nextCurriculum);
    setCurrentSemester(semester);
  }, []);

  const handleCollegeChange = useCallback(
    (id: string) => {
      const next = COLLEGES.find((c) => c.id === id) ?? DEFAULT_COLLEGE;
      setCollegeId(next.id);
      const nextDepartment =
        next.departments.find((d) => d.id === DEFAULT_DEPARTMENT_ID) ?? next.departments[0]!;
      setDepartmentId(nextDepartment.id);
      setCurriculumId(preferredCurriculum(nextDepartment).id);
      resetToSemester(preferredCurriculum(nextDepartment));
    },
    [resetToSemester],
  );

  const handleDepartmentChange = useCallback(
    (id: string) => {
      const next = college.departments.find((d) => d.id === id) ?? college.departments[0]!;
      setDepartmentId(next.id);
      setCurriculumId(preferredCurriculum(next).id);
      resetToSemester(preferredCurriculum(next));
    },
    [college, resetToSemester],
  );

  const handleCurriculumChange = useCallback(
    (id: string) => {
      const next = department.curricula.find((c) => c.id === id);
      if (!next) return;
      setCurriculumId(next.id);
      resetToSemester(next);
    },
    [department, resetToSemester],
  );

  const handleSemesterSelect = useCallback(
    (n: number) => {
      setCurrentSemester(n);
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        let changed = false;
        for (const semester of curriculum.semesters) {
          if (semester.number >= n) continue;
          const derived = sgpaFromGrades(semester.number, bySem[semester.number]);
          if (derived !== undefined) {
            bySem[semester.number] = { ...bySem[semester.number], sgpa: derived };
            changed = true;
          }
        }
        return changed ? { ...prev, [curriculum.id]: bySem } : prev;
      });
    },
    [curriculum, sgpaFromGrades],
  );

  const patchSemesterEntry = useCallback(
    (semesterNumber: number, patch: Partial<SemesterEntry>) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        bySem[semesterNumber] = { ...(bySem[semesterNumber] ?? {}), ...patch };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id],
  );

  const handleModeChange = useCallback(
    (semesterNumber: number, mode: SemesterMode) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber] ?? {};
        const next: SemesterEntry = { ...entry, mode };
        if (mode === "sgpa") {
          const derived = sgpaFromGrades(semesterNumber, entry);
          if (derived !== undefined) next.sgpa = derived;
        }
        bySem[semesterNumber] = next;
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id, sgpaFromGrades],
  );

  const handleGradeChange = useCallback(
    (semesterNumber: number, courseIndex: number, label: string | null) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber] ?? {};
        const arr = [...(entry.grades ?? [])];
        arr[courseIndex] = label;

        const semester = curriculum.semesters.find((s) => s.number === semesterNumber);
        const course = semester?.courses[courseIndex];
        const isArrear = label !== null && label === arrearGradeLabel(gradeScale);
        const next: SemesterEntry = { ...entry, grades: arr };
        if (course && entry.arrears && !isArrear) {
          next.arrears = entry.arrears.filter((a) => a.subjectId !== course.code);
        }
        bySem[semesterNumber] = next;
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id, curriculum.semesters, gradeScale],
  );

  const handleSgpaChange = useCallback(
    (semesterNumber: number, value: string) => {
      patchSemesterEntry(semesterNumber, { sgpa: value });
    },
    [patchSemesterEntry],
  );

  const handleAddArrear = useCallback(
    (semesterNumber: number, subjectId: string) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber] ?? {};
        const arrears = [...(entry.arrears ?? [])];
        if (arrears.some((a) => a.subjectId === subjectId)) return prev;

        const semester = curriculum.semesters.find((s) => s.number === semesterNumber);
        const courseIndex = semester?.courses.findIndex((c) => c.code === subjectId);
        const grades =
          semester && courseIndex !== undefined && courseIndex >= 0
            ? [...(entry.grades ?? [])]
            : undefined;
        if (grades) {
          grades[courseIndex!] = arrearGradeLabel(gradeScale);
        }
        arrears.push({ subjectId });
        bySem[semesterNumber] = {
          ...entry,
          ...(grades ? { grades } : {}),
          arrears,
        };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id, curriculum.semesters, gradeScale],
  );

  const handleRemoveArrear = useCallback(
    (semesterNumber: number, subjectId: string) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber];
        if (!entry?.arrears?.some((a) => a.subjectId === subjectId)) return prev;

        const arrears = entry.arrears.filter((a) => a.subjectId !== subjectId);
        const semester = curriculum.semesters.find((s) => s.number === semesterNumber);
        const courseIndex = semester?.courses.findIndex((c) => c.code === subjectId);
        const grades =
          semester && courseIndex !== undefined && courseIndex >= 0
            ? [...(entry.grades ?? [])]
            : undefined;
        if (grades && grades[courseIndex!] === arrearGradeLabel(gradeScale)) {
          grades[courseIndex!] = null;
        }
        bySem[semesterNumber] = {
          ...entry,
          ...(grades ? { grades } : {}),
          arrears,
        };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id, curriculum.semesters, gradeScale],
  );

  const handleClearArrear = useCallback(
    (semesterNumber: number, subjectId: string, grade: string) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber] ?? {};
        const clearedArrears = [...(entry.clearedArrears ?? [])];
        clearedArrears.push({ subjectId, grade });
        bySem[semesterNumber] = { ...entry, clearedArrears };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id],
  );

  const handleRemoveClearedArrear = useCallback(
    (semesterNumber: number, subjectId: string) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber];
        if (!entry?.clearedArrears) return prev;
        bySem[semesterNumber] = {
          ...entry,
          clearedArrears: entry.clearedArrears.filter((a) => a.subjectId !== subjectId),
        };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id],
  );

  const handleClearedArrearGradeChange = useCallback(
    (semesterNumber: number, subjectId: string, grade: string) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber];
        if (!entry?.clearedArrears) return prev;
        bySem[semesterNumber] = {
          ...entry,
          clearedArrears: entry.clearedArrears.map((a) =>
            a.subjectId === subjectId ? { ...a, grade } : a,
          ),
        };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id],
  );

  const handleClearSemester = useCallback(
    (semesterNumber: number) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        delete bySem[semesterNumber];
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id],
  );

  const handleReset = useCallback(() => {
    setEntries((prev) => {
      const next = { ...prev };
      delete next[curriculum.id];
      return next;
    });
  }, [curriculum.id]);

  return {
    college,
    department,
    curriculum,
    gradeScale,
    maxSemester,
    activeSemester,
    totalProgramCredits,
    totals: results.totals,
    activeComputed: results.activeComputed,
    activeMode,
    activeSgpaValue,
    currentSemesterSgpa: results.currentSemesterSgpa,
    previousCgpa: results.previousCgpa,
    gradedSemesterCount: results.gradedSemesterCount,
    percentage: results.percentage,
    pastSemesters,
    activeClearedArrears,
    activePendingArrears,
    activeArrearAddOptions,
    activeAddedArrears,
    hasAnyGrades,
    activeArrearCount: results.activeArrearCount,
    clearedArrearCount: results.clearedArrearCount,
    onCollegeChange: handleCollegeChange,
    onDepartmentChange: handleDepartmentChange,
    onCurriculumChange: handleCurriculumChange,
    onSemesterSelect: handleSemesterSelect,
    onModeChange: handleModeChange,
    onGradeChange: handleGradeChange,
    onSgpaChange: handleSgpaChange,
    onAddArrear: handleAddArrear,
    onRemoveArrear: handleRemoveArrear,
    onClearArrear: handleClearArrear,
    onRemoveClearedArrear: handleRemoveClearedArrear,
    onClearedArrearGradeChange: handleClearedArrearGradeChange,
    onClearSemester: handleClearSemester,
    onReset: handleReset,
  };
}

export type CgpaStore = ReturnType<typeof useCgpaStore>;
