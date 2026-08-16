import { useCallback, useEffect, useMemo, useState } from "react";
import { COLLEGES } from "@/data/colleges";
import { GRADE_SCALES } from "@/data/gradeScales";
import type { Curriculum, Department } from "@/types/curriculum";
import type { SemesterEntry } from "@/types/storage";
import type { PastSemesterView } from "@/types/computation";
import { loadState, saveState } from "@/lib/storage";
import { buildResults, programCredits, suggestedSemester } from "@/lib/cgpa";

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
  const [openSemesterNumber, setOpenSemesterNumber] = useState(initialSemester);

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
        .map((c) => ({
          number: c.semester.number,
          credits: c.creditsRegistered,
          value: activeCurriculumEntries[c.semester.number]?.sgpa ?? "",
        })),
    [results.computedSemesters, activeSemester, activeCurriculumEntries],
  );

  const hasAnyGrades = results.totals.creditsCompleted > 0 || results.gradedSemesterCount > 0;

  const resetToSemester = useCallback((nextCurriculum: Curriculum) => {
    const semester = suggestedSemester(nextCurriculum);
    setCurrentSemester(semester);
    setOpenSemesterNumber(semester);
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

  const handleSemesterSelect = useCallback((n: number) => {
    setCurrentSemester(n);
    setOpenSemesterNumber(n);
  }, []);

  const handleSemesterToggle = useCallback((n: number) => {
    setOpenSemesterNumber((prev) => (prev === n ? 0 : n));
  }, []);

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

  const handleGradeChange = useCallback(
    (semesterNumber: number, courseIndex: number, label: string | null) => {
      setEntries((prev) => {
        const bySem = { ...(prev[curriculum.id] ?? {}) };
        const entry = bySem[semesterNumber] ?? {};
        const arr = [...(entry.grades ?? [])];
        arr[courseIndex] = label;
        bySem[semesterNumber] = { ...entry, grades: arr };
        return { ...prev, [curriculum.id]: bySem };
      });
    },
    [curriculum.id],
  );

  const handleSgpaChange = useCallback(
    (semesterNumber: number, value: string) => {
      patchSemesterEntry(semesterNumber, { sgpa: value });
    },
    [patchSemesterEntry],
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
    currentSemesterSgpa: results.currentSemesterSgpa,
    previousCgpa: results.previousCgpa,
    gradedSemesterCount: results.gradedSemesterCount,
    percentage: results.percentage,
    pastSemesters,
    hasAnyGrades,
    openSemesterNumber,
    onCollegeChange: handleCollegeChange,
    onDepartmentChange: handleDepartmentChange,
    onCurriculumChange: handleCurriculumChange,
    onSemesterSelect: handleSemesterSelect,
    onToggleSemester: handleSemesterToggle,
    onGradeChange: handleGradeChange,
    onSgpaChange: handleSgpaChange,
    onReset: handleReset,
  };
}

export type CgpaStore = ReturnType<typeof useCgpaStore>;
