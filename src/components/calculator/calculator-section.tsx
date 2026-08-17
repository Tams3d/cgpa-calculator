import { memo, useCallback } from "react";
import type { College, Curriculum, Department, GradeScale } from "@/types/curriculum";
import type {
  ArrearRowView,
  PastSemesterView,
  SemesterComputed,
  TotalsComputed,
  ArrearOption,
} from "@/types/computation";
import type { SemesterMode } from "@/types/storage";
import { SemesterCard } from "@/components/calculator/semester-card";
import { CgpaSummaryCard } from "@/components/calculator/summary-card";
import { CourseDetailsCard } from "@/components/calculator/course-details-card";
import { SectionHeading } from "@/components/landing/section-heading";

interface CalculatorSectionProps {
  college: College;
  colleges: College[];
  department: Department;
  curriculum: Curriculum;
  gradeScale: GradeScale;
  activeSemester: number;
  totalProgramCredits: number;
  activeComputed: SemesterComputed | null;
  activeMode: SemesterMode;
  activeSgpaValue: string;
  totals: TotalsComputed;
  currentSemesterSgpa: number | null;
  previousCgpa: number | null;
  gradedSemesterCount: number;
  percentage: number | null;
  percentageLabel: string;
  pastSemesters: PastSemesterView[];
  activeClearedArrears: ArrearRowView[];
  activePendingArrears: ArrearRowView[];
  activeArrearCount: number;
  clearedArrearCount: number;
  onCollegeChange: (id: string) => void;
  onDepartmentChange: (id: string) => void;
  onCurriculumChange: (id: string) => void;
  onSemesterSelect: (n: number) => void;
  onModeChange: (semesterNumber: number, mode: SemesterMode) => void;
  onGradeChange: (semesterNumber: number, courseIndex: number, label: string | null) => void;
  onSgpaChange: (semesterNumber: number, value: string) => void;
  onClearArrear: (semesterNumber: number, subjectId: string, grade: string) => void;
  onRemoveClearedArrear: (semesterNumber: number, subjectId: string) => void;
  onClearedArrearGradeChange: (semesterNumber: number, subjectId: string, grade: string) => void;
  onClearSemester: (semesterNumber: number) => void;
  onReset: () => void;
  onAddArrear: (semesterNumber: number, subjectId: string) => void;
  onRemoveArrear: (semesterNumber: number, subjectId: string) => void;
  arrearAddOptions: ArrearOption[];
  addedArrears: ArrearRowView[];
}

export const CalculatorSection = memo(function CalculatorSection({
  college,
  colleges,
  department,
  curriculum,
  gradeScale,
  activeSemester,
  totalProgramCredits,
  activeComputed,
  activeMode,
  activeSgpaValue,
  totals,
  currentSemesterSgpa,
  previousCgpa,
  gradedSemesterCount,
  percentage,
  percentageLabel,
  pastSemesters,
  activeClearedArrears,
  activePendingArrears,
  activeArrearCount,
  clearedArrearCount,
  onCollegeChange,
  onDepartmentChange,
  onCurriculumChange,
  onSemesterSelect,
  onModeChange,
  onGradeChange,
  onSgpaChange,
  onClearArrear,
  onRemoveClearedArrear,
  onClearedArrearGradeChange,
  onClearSemester,
  onReset,
  onAddArrear,
  onRemoveArrear,
  arrearAddOptions,
  addedArrears,
}: CalculatorSectionProps) {
  const maxSemester = curriculum.semesters.length;
  const passingGrades = gradeScale.grades.filter((g) => !g.exempt && g.points > 0);
  const handleActiveGrade = useCallback(
    (courseIndex: number, label: string | null) =>
      onGradeChange(activeSemester, courseIndex, label),
    [onGradeChange, activeSemester],
  );

  return (
    <section id="calculator" className="scroll-mt-14 border-b-0 sm:border-b">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:py-20">
        <SectionHeading
          title="Calculator"
          description="Pick your college, department, year of admission and current semester. Enter each semester's grades as an overall SGPA or subject by subject, and record cleared arrears in the semester they were cleared."
        />

        <div className="mt-8 grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex min-w-0 flex-col gap-4">
            <CourseDetailsCard
              college={college}
              colleges={colleges}
              department={department}
              curriculum={curriculum}
              gradeScale={gradeScale}
              maxSemester={maxSemester}
              activeSemester={activeSemester}
              totalProgramCredits={totalProgramCredits}
              onCollegeChange={onCollegeChange}
              onDepartmentChange={onDepartmentChange}
              onCurriculumChange={onCurriculumChange}
              onSemesterSelect={onSemesterSelect}
            />

            {activeComputed && (
              <SemesterCard
                semester={activeComputed.semester}
                computed={activeComputed}
                isCurrent
                mode={activeMode}
                grades={gradeScale.grades}
                sgpaValue={activeSgpaValue}
                onModeChange={(mode) => onModeChange(activeSemester, mode)}
                onGradeChange={handleActiveGrade}
                onSgpaChange={(value) => onSgpaChange(activeSemester, value)}
                onClear={() => onClearSemester(activeSemester)}
                clearedArrears={activeClearedArrears}
                pendingArrears={activePendingArrears}
                passingGrades={passingGrades}
                onClearArrear={(subjectId, grade) =>
                  onClearArrear(activeSemester, subjectId, grade)
                }
                onRemoveClearedArrear={(subjectId) =>
                  onRemoveClearedArrear(activeSemester, subjectId)
                }
                onClearedArrearGradeChange={(subjectId, grade) =>
                  onClearedArrearGradeChange(activeSemester, subjectId, grade)
                }
                onAddArrear={(subjectId) => onAddArrear(activeSemester, subjectId)}
                onRemoveArrear={(subjectId) => onRemoveArrear(activeSemester, subjectId)}
                arrearAddOptions={arrearAddOptions}
                addedArrears={addedArrears}
              />
            )}

            {pastSemesters.map((view) => {
              const n = view.computed.semester.number;
              return (
                <SemesterCard
                  key={n}
                  semester={view.computed.semester}
                  computed={view.computed}
                  isCurrent={false}
                  mode={view.mode}
                  grades={gradeScale.grades}
                  sgpaValue={view.sgpaValue}
                  onModeChange={(mode) => onModeChange(n, mode)}
                  onGradeChange={(courseIndex, label) => onGradeChange(n, courseIndex, label)}
                  onSgpaChange={(value) => onSgpaChange(n, value)}
                  onClear={() => onClearSemester(n)}
                  clearedArrears={view.clearedArrears}
                  pendingArrears={view.pendingArrears}
                  passingGrades={passingGrades}
                  onClearArrear={(subjectId, grade) => onClearArrear(n, subjectId, grade)}
                  onRemoveClearedArrear={(subjectId) => onRemoveClearedArrear(n, subjectId)}
                  onClearedArrearGradeChange={(subjectId, grade) =>
                    onClearedArrearGradeChange(n, subjectId, grade)
                  }
                  onAddArrear={(subjectId) => onAddArrear(n, subjectId)}
                  onRemoveArrear={(subjectId) => onRemoveArrear(n, subjectId)}
                  arrearAddOptions={view.arrearAddOptions}
                  addedArrears={view.addedArrears}
                />
              );
            })}
          </div>

          <div className="min-w-0 lg:sticky lg:top-20">
            <CgpaSummaryCard
              totals={totals}
              currentSemesterSgpa={currentSemesterSgpa}
              previousCgpa={previousCgpa}
              activeSemester={activeSemester}
              creditsCompleted={totals.creditsCompleted}
              totalProgramCredits={totalProgramCredits}
              gradedSemesterCount={gradedSemesterCount}
              percentage={percentage}
              percentageLabel={percentageLabel}
              activeArrearCount={activeArrearCount}
              clearedArrearCount={clearedArrearCount}
              onReset={onReset}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
