import { memo } from "react";
import type { Grade, Semester } from "@/types/curriculum";
import type { PastSemesterView, SemesterComputed } from "@/types/computation";
import { formatDecimal } from "@/lib/cgpa";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CourseGradeRow } from "@/components/calculator/course-grade-row";
import { SgpaInput } from "@/components/calculator/sgpa-input";

interface PastSemesterSgpaInputProps {
  semester: PastSemesterView;
  onChange: (semesterNumber: number, value: string) => void;
}

function isInvalidSgpa(value: string): boolean {
  if (value === "") return false;
  if (value.includes(".")) {
    const decimals = value.split(".")[1];
    if (decimals !== undefined && decimals.length > 2) return true;
  }
  const num = Number(value);
  if (Number.isNaN(num)) return true;
  return num < 0 || num > 10;
}

export const PastSemesterSgpaInput = memo(function PastSemesterSgpaInput({
  semester,
  onChange,
}: PastSemesterSgpaInputProps) {
  const invalid = isInvalidSgpa(semester.value);

  return (
    <section
      aria-label={`Semester ${semester.number} overall SGPA`}
      className="rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-primary/40"
    >
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="font-display text-base font-semibold text-foreground">
            Semester {semester.number}
          </span>
          <span className="text-sm text-muted-foreground tabular-nums">
            {semester.credits} credits &middot; SGPA from 0 to 10
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-3">
          <span className="text-sm font-semibold text-foreground sm:hidden">Overall SGPA</span>
          <SgpaInput
            value={semester.value}
            onChange={(v) => onChange(semester.number, v)}
            ariaLabel={`Semester ${semester.number} overall SGPA`}
            invalid={invalid}
            className="sm:h-9 sm:w-24 sm:rounded-md sm:px-2.5 sm:text-sm"
          />
        </div>
      </div>
    </section>
  );
});

interface SemesterGradesCardProps {
  semester: Semester;
  computed: SemesterComputed;
  grades: Grade[];
  open: boolean;
  onToggle: () => void;
  onGradeChange: (courseIndex: number, label: string | null) => void;
}

export const SemesterGradesCard = memo(function SemesterGradesCard({
  semester,
  computed,
  grades,
  open,
  onToggle,
  onGradeChange,
}: SemesterGradesCardProps) {
  return (
    <Accordion
      value={open ? [String(semester.number)] : []}
      onValueChange={onToggle}
      className="rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-primary/40"
    >
      <AccordionItem value={String(semester.number)} className="border-b-0">
        <AccordionTrigger className="rounded-none px-5 py-3.5 text-left hover:no-underline">
          <span className="flex w-full min-w-0 items-center justify-between gap-3">
            <span className="flex min-w-0 flex-col gap-1">
              <span className="font-display text-base font-semibold text-foreground">
                Semester {semester.number}
                <Badge variant="accent" className="ml-2 align-middle font-medium">
                  current
                </Badge>
              </span>
              <span className="text-sm text-muted-foreground tabular-nums">
                {computed.creditsCompleted}/{computed.creditsRegistered} credits completed
              </span>
            </span>
            {computed.sgpa !== null ? (
              <Badge variant="success" className="shrink-0 font-display text-sm tabular-nums">
                SGPA {formatDecimal(computed.sgpa)}
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="shrink-0 border-destructive text-sm text-destructive"
              >
                No grades yet
              </Badge>
            )}
          </span>
        </AccordionTrigger>
        <AccordionContent className="border-t px-5 pt-4">
          <div className="flex flex-col gap-3">
            {computed.rows.map((row) => (
              <CourseGradeRow
                key={`${row.code}-${row.title}`}
                code={row.code}
                title={row.title}
                credits={row.credits}
                grades={grades}
                value={row.gradeLabel}
                index={row.sourceIndex}
                onChange={onGradeChange}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});
