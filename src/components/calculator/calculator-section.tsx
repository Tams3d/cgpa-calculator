import { memo, useCallback } from "react";
import type { College, Curriculum, Department, GradeScale } from "@/types/curriculum";
import type { PastSemesterView, SemesterComputed, TotalsComputed } from "@/types/computation";
import { PastSemesterSgpaInput, SemesterGradesCard } from "@/components/calculator/semester-card";
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
  totals: TotalsComputed;
  currentSemesterSgpa: number | null;
  previousCgpa: number | null;
  gradedSemesterCount: number;
  percentage: number | null;
  percentageLabel: string;
  pastSemesters: PastSemesterView[];
  openSemesterNumber: number;
  onCollegeChange: (id: string) => void;
  onDepartmentChange: (id: string) => void;
  onCurriculumChange: (id: string) => void;
  onSemesterSelect: (n: number) => void;
  onToggleSemester: (n: number) => void;
  onGradeChange: (semesterNumber: number, courseIndex: number, label: string | null) => void;
  onSgpaChange: (semesterNumber: number, value: string) => void;
  onReset: () => void;
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
  totals,
  currentSemesterSgpa,
  previousCgpa,
  gradedSemesterCount,
  percentage,
  percentageLabel,
  pastSemesters,
  openSemesterNumber,
  onCollegeChange,
  onDepartmentChange,
  onCurriculumChange,
  onSemesterSelect,
  onToggleSemester,
  onGradeChange,
  onSgpaChange,
  onReset,
}: CalculatorSectionProps) {
  const maxSemester = curriculum.semesters.length;
  const handleCurrentToggle = useCallback(
    () => onToggleSemester(activeSemester),
    [onToggleSemester, activeSemester],
  );
  const handleCurrentGrade = useCallback(
    (courseIndex: number, label: string | null) =>
      onGradeChange(activeSemester, courseIndex, label),
    [onGradeChange, activeSemester],
  );

  return (
    <section id="calculator" className="scroll-mt-14 border-b-0 sm:border-b">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:py-20">
        <SectionHeading
          title="Calculator"
          description="Pick your college, department, year of admission and current semester."
        />

        <div className="mt-8 grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col gap-4">
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
              <SemesterGradesCard
                semester={activeComputed.semester}
                computed={activeComputed}
                grades={gradeScale.grades}
                open={openSemesterNumber === activeSemester}
                onToggle={handleCurrentToggle}
                onGradeChange={handleCurrentGrade}
              />
            )}

            {pastSemesters.map((semester) => (
              <PastSemesterSgpaInput
                key={semester.number}
                semester={semester}
                onChange={onSgpaChange}
              />
            ))}
          </div>

          <div className="md:sticky md:top-20">
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
              onReset={onReset}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
