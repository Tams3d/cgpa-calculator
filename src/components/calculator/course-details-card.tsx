import { memo } from "react";
import type { College, Curriculum, Department, GradeScale } from "@/types/curriculum";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldLabel } from "@/components/calculator/field-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface CourseDetailsCardProps {
  college: College;
  colleges: College[];
  department: Department;
  curriculum: Curriculum;
  gradeScale: GradeScale;
  maxSemester: number;
  activeSemester: number;
  totalProgramCredits: number;
  onCollegeChange: (id: string) => void;
  onDepartmentChange: (id: string) => void;
  onCurriculumChange: (id: string) => void;
  onSemesterSelect: (n: number) => void;
}

export const CourseDetailsCard = memo(function CourseDetailsCard({
  college,
  colleges,
  department,
  curriculum,
  gradeScale,
  maxSemester,
  activeSemester,
  totalProgramCredits,
  onCollegeChange,
  onDepartmentChange,
  onCurriculumChange,
  onSemesterSelect,
}: CourseDetailsCardProps) {
  const collegeItems = [...colleges]
    .toSorted((a, b) => {
      if ((a.available === false) !== (b.available === false)) {
        return a.available === false ? 1 : -1;
      }
      return a.name.localeCompare(b.name);
    })
    .map((c) => ({
      label: (
        <span className="flex items-center justify-between gap-6">
          <span>{c.name}</span>
          {c.available === false && (
            <Badge variant="outline" className="px-1.5 py-0 text-xs font-medium">
              Coming soon
            </Badge>
          )}
        </span>
      ),
      value: c.id,
      disabled: c.available === false,
    }));

  const branchName = (name: string) => name.replace(/^B\.(E|Tech)\.\s*/i, "");

  const departmentItems = college.departments
    .toSorted((a, b) => branchName(a.name).localeCompare(branchName(b.name)))
    .map((d) => ({ label: d.name, value: d.id }));

  const curriculumItems = department.curricula.map((c) => ({
    label: c.batchLabel,
    value: c.id,
  }));

  const hasMultipleBatches = curriculumItems.length > 1;

  const liveCollegeNames = colleges
    .filter((c) => c.available !== false)
    .map((c) => c.shortName)
    .join(", ")
    .replace(/, ([^,]*)$/, " and $1");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold tracking-tight">Course details</CardTitle>
        <CardDescription>
          For each semester, choose the overall SGPA or subject-wise grades. Cleared arrears are
          recorded in the semester they were cleared.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-2">
          <FieldLabel as="label" id="college-select" htmlFor="college-select">
            College
          </FieldLabel>
          <Select
            items={collegeItems}
            value={college.id}
            onValueChange={(v) => v && onCollegeChange(v)}
          >
            <SelectTrigger id="college-select" aria-label="College">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {collegeItems.map((item) => (
                <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            Live now: {liveCollegeNames}. More colleges are coming soon.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className={cn("flex flex-col gap-2", !hasMultipleBatches && "sm:col-span-2")}>
            <FieldLabel as="label" id="dept-select" htmlFor="dept-select">
              Department
            </FieldLabel>
            <Select
              items={departmentItems}
              value={department.id}
              onValueChange={(v) => v && onDepartmentChange(v)}
            >
              <SelectTrigger id="dept-select" aria-label="Department">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {departmentItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {hasMultipleBatches && (
            <div className="flex flex-col gap-2">
              <FieldLabel as="label" id="batch-select" htmlFor="batch-select">
                Year of admission
              </FieldLabel>
              <Select
                items={curriculumItems}
                value={curriculum.id}
                onValueChange={(v) => v && onCurriculumChange(v)}
              >
                <SelectTrigger id="batch-select" aria-label="Year of admission">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {curriculumItems.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel>Regulation &amp; grading</FieldLabel>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-primary text-primary">
              {curriculum.regulation}
            </Badge>
            <Badge variant="outline" className="border-info text-info">
              Scale &middot; {gradeScale.name}
            </Badge>
            <Badge variant="outline" className="border-success text-success">
              {totalProgramCredits} credits
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Non-credit (NC) courses are not counted in the CGPA.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel id="current-sem-label">Current semester</FieldLabel>
          <ToggleGroup
            value={[String(activeSemester)]}
            onValueChange={(v) => v[0] && onSemesterSelect(Number(v[0]))}
            aria-labelledby="current-sem-label"
            spacing={2}
            className="grid w-full grid-cols-4 gap-1.5 rounded-xl bg-secondary/50 p-1.5 sm:grid-cols-8"
          >
            {Array.from({ length: maxSemester }, (_, i) => i + 1).map((n) => (
              <ToggleGroupItem
                key={n}
                value={String(n)}
                aria-label={`Semester ${n}`}
                className="flex h-11 items-center justify-center rounded-lg border border-transparent font-display text-lg font-bold tabular-nums transition-colors hover:border-primary/30 hover:bg-primary/10 data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground data-pressed:shadow-sm"
              >
                {n}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <p className="text-xs text-muted-foreground">
            Grades you pick carry into the overall CGPA.
          </p>
        </div>
      </CardContent>
    </Card>
  );
});
