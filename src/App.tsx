import { DEPARTMENTS } from "@/data/departments";
import { COLLEGES } from "@/data/colleges";
import { percentageFormulaLabel, formatDecimal } from "@/lib/cgpa";
import { useCgpaStore } from "@/hooks/use-cgpa-store";
import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero";
import { StatsSection } from "@/components/landing/stats-section";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { FeaturesSection } from "@/components/landing/features";
import { FaqSection } from "@/components/landing/faq";
import { SiteFooter, SiteWatermark } from "@/components/landing/site-footer";
import { CalculatorSection } from "@/components/calculator/calculator-section";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const DEPARTMENT_COUNT = DEPARTMENTS.length;
const COURSE_COUNT = DEPARTMENTS.reduce(
  (sum, d) =>
    sum +
    d.curricula.reduce((s, c) => s + c.semesters.reduce((t, sem) => t + sem.courses.length, 0), 0),
  0,
);

export default function App() {
  const {
    college,
    department,
    curriculum,
    gradeScale,
    activeSemester,
    totalProgramCredits,
    totals,
    activeComputed,
    activeMode,
    activeSgpaValue,
    currentSemesterSgpa,
    previousCgpa,
    gradedSemesterCount,
    percentage,
    pastSemesters,
    activeClearedArrears,
    activePendingArrears,
    hasAnyGrades,
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
    activeArrearAddOptions,
    activeAddedArrears,
  } = useCgpaStore();

  const percentageLabel = percentageFormulaLabel(curriculum);

  return (
    <div className="flex min-h-dvh flex-col pb-[calc(env(safe-area-inset-bottom)+4.5rem)] md:pb-0">
      <a
        href="#main"
        className="sr-only z-50 focus:fixed focus:top-3 focus:left-3 focus:m-0 focus:size-auto focus:overflow-visible focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:whitespace-normal focus:text-primary-foreground focus:[clip-path:none]"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1 scroll-mt-14">
        <HeroSection
          liveCgpa={hasAnyGrades ? totals.cgpa : null}
          livePercentage={hasAnyGrades ? percentage : null}
          liveSgpa={hasAnyGrades ? currentSemesterSgpa : null}
          collegeName={college.name}
          departmentLabel={department.name}
          regulation={curriculum.regulation}
          creditsCompleted={totals.creditsCompleted}
          totalProgramCredits={totalProgramCredits}
        />

        <StatsSection departmentCount={DEPARTMENT_COUNT} courseCount={COURSE_COUNT} />

        <LogoCloud />

        <FeaturesSection />

        <CalculatorSection
          college={college}
          colleges={COLLEGES}
          department={department}
          curriculum={curriculum}
          gradeScale={gradeScale}
          activeSemester={activeSemester}
          totalProgramCredits={totalProgramCredits}
          activeComputed={activeComputed}
          activeMode={activeMode}
          activeSgpaValue={activeSgpaValue}
          totals={totals}
          currentSemesterSgpa={currentSemesterSgpa}
          previousCgpa={previousCgpa}
          gradedSemesterCount={gradedSemesterCount}
          percentage={percentage}
          percentageLabel={percentageLabel}
          pastSemesters={pastSemesters}
          activeClearedArrears={activeClearedArrears}
          activePendingArrears={activePendingArrears}
          activeArrearCount={activeArrearCount}
          clearedArrearCount={clearedArrearCount}
          onCollegeChange={onCollegeChange}
          onDepartmentChange={onDepartmentChange}
          onCurriculumChange={onCurriculumChange}
          onSemesterSelect={onSemesterSelect}
          onModeChange={onModeChange}
          onGradeChange={onGradeChange}
          onSgpaChange={onSgpaChange}
          onClearArrear={onClearArrear}
          onRemoveClearedArrear={onRemoveClearedArrear}
          onClearedArrearGradeChange={onClearedArrearGradeChange}
          onClearSemester={onClearSemester}
          onReset={onReset}
          onAddArrear={onAddArrear}
          onRemoveArrear={onRemoveArrear}
          arrearAddOptions={activeArrearAddOptions}
          addedArrears={activeAddedArrears}
        />

        <FaqSection college={college} colleges={COLLEGES} />
      </main>

      <SiteFooter />
      <SiteWatermark />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background px-4 pt-2.5 pb-[calc(env(safe-area-inset-bottom)+0.625rem)] md:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <div className="flex min-w-0 items-baseline gap-2">
            <span className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              CGPA
            </span>
            {totals.cgpa !== null ? (
              <span className="font-mono text-2xl leading-none font-bold text-primary tabular-nums">
                {formatDecimal(totals.cgpa)}
              </span>
            ) : (
              <span className="truncate text-sm font-semibold text-muted-foreground">
                No grades yet
              </span>
            )}
            {percentage !== null && (
              <span className="shrink-0 text-sm font-semibold text-muted-foreground tabular-nums">
                {percentage.toFixed(1)}%
              </span>
            )}
          </div>
          <div className="shrink-0 text-right">
            <span className="text-xs text-muted-foreground">SGPA</span>
            {currentSemesterSgpa !== null ? (
              <span className="ml-1.5 font-mono text-lg font-bold tabular-nums">
                {formatDecimal(currentSemesterSgpa)}
              </span>
            ) : (
              <span className="ml-1.5 text-xs font-medium text-muted-foreground">Not entered</span>
            )}
          </div>
        </div>
      </div>

      <ThemeToggle />
    </div>
  );
}
