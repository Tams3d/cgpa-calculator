import { memo, useState } from "react";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
import type { Grade, Semester } from "@/types/curriculum";
import type { ArrearRowView, SemesterComputed, ArrearOption } from "@/types/computation";
import type { SemesterMode } from "@/types/storage";
import { cn } from "@/lib/utils";
import { formatDecimal } from "@/lib/cgpa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CourseGradeRow } from "@/components/calculator/course-grade-row";
import { SgpaInput } from "@/components/calculator/sgpa-input";
import { FieldLabel } from "@/components/calculator/field-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

interface ModeSegmentedProps {
  mode: SemesterMode;
  onChange: (mode: SemesterMode) => void;
  semesterNumber: number;
}

const MODE_OPTIONS: { id: SemesterMode; label: string }[] = [
  { id: "sgpa", label: "SGPA" },
  { id: "subject", label: "Subject-wise" },
];

function ModeSegmented({ mode, onChange, semesterNumber }: ModeSegmentedProps) {
  return (
    <div
      role="group"
      aria-label={`Semester ${semesterNumber} grade entry mode`}
      className="grid grid-cols-2 gap-1 rounded-lg bg-secondary/60 p-1"
    >
      {MODE_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={mode === option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            "flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
            mode === option.id
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function ArrearAddControl({
  options,
  added,
  onAdd,
  onRemove,
}: {
  options: ArrearOption[];
  added: ArrearRowView[];
  onAdd: (subjectId: string) => void;
  onRemove: (subjectId: string) => void;
}) {
  const [subjectId, setSubjectId] = useState<string | null>(null);

  const items = options.map((o) => ({
    label: (
      <span className="flex items-center gap-1.5">
        <span className="hidden font-mono sm:inline">{o.code}</span>
        <span className="font-normal">{o.title}</span>
      </span>
    ),
    value: o.code,
  }));

  const canAdd = items.length > 0;

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg border border-dashed border-border bg-secondary/30 p-3">
      {canAdd ? (
        <>
          <span className="text-sm font-semibold text-foreground">Add arrear subjects</span>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
            <Select items={items} value={subjectId} onValueChange={(v) => setSubjectId(v ?? null)}>
              <SelectTrigger
                aria-label="Arrear subject"
                className="w-full bg-background sm:min-w-0 sm:flex-1"
              >
                <SelectValue placeholder="Choose a subject" />
              </SelectTrigger>
              <SelectContent>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              type="button"
              size="sm"
              className="w-full sm:w-auto"
              disabled={subjectId === null}
              onClick={() => {
                if (subjectId) {
                  onAdd(subjectId);
                  setSubjectId(null);
                }
              }}
            >
              Add
            </Button>
          </div>
        </>
      ) : (
        <p className="text-xs font-medium text-muted-foreground">
          No subjects left to mark as arrear
        </p>
      )}

      {added.length > 0 && (
        <ul className="flex flex-col gap-1.5 border-t border-border pt-2">
          {added.map((arrear) => (
            <li
              key={arrear.code}
              className="flex items-center justify-between gap-3 rounded-md bg-card px-2.5 py-1.5"
            >
              <span className="min-w-0 truncate text-sm font-medium text-foreground">
                {arrear.title}
              </span>
              <button
                type="button"
                aria-label={`Remove ${arrear.code} from arrears`}
                onClick={() => onRemove(arrear.code)}
                className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors outline-none hover:bg-destructive/10 hover:text-destructive focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <MinusIcon className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface ArrearRowProps {
  code: string;
  title: string;
  credits: number;
  homeSemester: number;
  grade: string | null;
  value: string | null;
  passingGrades: Grade[];
  onGradeChange: (grade: string) => void;
  onRemove?: () => void;
}

function ArrearRow({
  code,
  title,
  credits,
  homeSemester,
  grade,
  value,
  passingGrades,
  onGradeChange,
  onRemove,
}: ArrearRowProps) {
  const cleared = value !== null;
  const items = passingGrades.map((g) => ({ label: g.label, value: g.label }));
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-md border p-2 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6",
        cleared
          ? "border-success/20 bg-success/5 hover:border-success/40"
          : "border-dashed border-foreground/20 hover:border-foreground/40",
      )}
    >
      <div className="flex min-w-0 flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className={cn(
            "w-14 shrink-0 justify-center border-foreground/20 font-mono text-[11px] tracking-wide uppercase sm:w-auto",
            cleared && "border-success/40 text-success",
          )}
        >
          {code}
        </Badge>
        <span className="min-w-0 truncate text-sm text-foreground" title={title}>
          {title}
        </span>
        <Badge variant="outline" className="shrink-0 border-foreground/15 text-muted-foreground">
          Sem {homeSemester}
        </Badge>
        {grade && !cleared && (
          <Badge variant="destructive" className="shrink-0">
            {grade}
          </Badge>
        )}
      </div>
      <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto sm:justify-end">
        <Badge variant="secondary" className="shrink-0 tabular-nums">
          {credits} credit{credits === 1 ? "" : "s"}
        </Badge>
        <Select items={items} value={value} onValueChange={(v) => v && onGradeChange(v)}>
          <SelectTrigger
            aria-label={`${code} cleared grade`}
            className="h-9 max-w-full min-w-0 flex-1 sm:w-36"
          >
            <SelectValue placeholder="Clear grade" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {onRemove && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onRemove}
            title={`Remove ${code} from cleared arrears`}
            className="size-8 shrink-0 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
          >
            <XMarkIcon data-icon="inline-start" className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

interface ClearedArrearsSectionProps {
  clearedArrears: ArrearRowView[];
  pendingArrears: ArrearRowView[];
  passingGrades: Grade[];
  onClearArrear: (subjectId: string, grade: string) => void;
  onRemove: (subjectId: string) => void;
  onGradeChange: (subjectId: string, grade: string) => void;
}

function ClearedArrearsSection({
  clearedArrears,
  pendingArrears,
  passingGrades,
  onClearArrear,
  onRemove,
  onGradeChange,
}: ClearedArrearsSectionProps) {
  const hasClearedArrears = clearedArrears.length > 0;
  const hasPendingArrears = pendingArrears.length > 0;
  const isEmpty = !hasClearedArrears && !hasPendingArrears;
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-5">
      <div className="flex items-center justify-between gap-3">
        <FieldLabel>Cleared Arrears</FieldLabel>
        {hasClearedArrears && <Badge variant="success">{clearedArrears.length}</Badge>}
      </div>
      {isEmpty && (
        <p className="text-xs text-muted-foreground">No arrears carried from earlier semesters.</p>
      )}
      {!isEmpty && (
        <div className="flex flex-col gap-3">
          {pendingArrears.map((arrear) => (
            <ArrearRow
              key={`pending-${arrear.code}`}
              code={arrear.code}
              title={arrear.title}
              credits={arrear.credits}
              homeSemester={arrear.homeSemester}
              grade={arrear.grade}
              value={null}
              passingGrades={passingGrades}
              onGradeChange={(grade) => onClearArrear(arrear.code, grade)}
            />
          ))}
          {clearedArrears.map((arrear) => (
            <ArrearRow
              key={`cleared-${arrear.code}`}
              code={arrear.code}
              title={arrear.title}
              credits={arrear.credits}
              homeSemester={arrear.homeSemester}
              grade={arrear.grade}
              value={arrear.clearedGrade}
              passingGrades={passingGrades}
              onGradeChange={(grade) => onGradeChange(arrear.code, grade)}
              onRemove={() => onRemove(arrear.code)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface SemesterCardProps {
  semester: Semester;
  computed: SemesterComputed;
  isCurrent: boolean;
  mode: SemesterMode;
  grades: Grade[];
  sgpaValue: string;
  onModeChange: (mode: SemesterMode) => void;
  onGradeChange: (courseIndex: number, label: string | null) => void;
  onSgpaChange: (value: string) => void;
  onClear: () => void;
  clearedArrears: ArrearRowView[];
  pendingArrears: ArrearRowView[];
  passingGrades: Grade[];
  onClearArrear: (subjectId: string, grade: string) => void;
  onRemoveClearedArrear: (subjectId: string) => void;
  onClearedArrearGradeChange: (subjectId: string, grade: string) => void;
  arrearAddOptions: ArrearOption[];
  addedArrears: ArrearRowView[];
  onAddArrear: (subjectId: string) => void;
  onRemoveArrear: (subjectId: string) => void;
}

export const SemesterCard = memo(function SemesterCard({
  semester,
  computed,
  isCurrent,
  mode,
  grades,
  sgpaValue,
  onModeChange,
  onGradeChange,
  onSgpaChange,
  onClear,
  clearedArrears,
  pendingArrears,
  passingGrades,
  onClearArrear,
  onRemoveClearedArrear,
  onClearedArrearGradeChange,
  arrearAddOptions,
  addedArrears,
  onAddArrear,
  onRemoveArrear,
}: SemesterCardProps) {
  const invalid = isInvalidSgpa(sgpaValue);
  const showModeToggle = isCurrent ? semester.number > 1 : true;

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold text-foreground">
            Semester {semester.number}
          </h3>
          {isCurrent && (
            <Badge variant="accent" className="font-medium">
              current
            </Badge>
          )}
          <Badge
            variant="outline"
            className="border-foreground/15 text-muted-foreground tabular-nums"
          >
            {computed.creditsRegistered} credits
          </Badge>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {computed.sgpa !== null ? (
            <Badge variant="success" className="font-display text-sm tabular-nums">
              SGPA {formatDecimal(computed.sgpa)}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              No grades yet
            </Badge>
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClear}
            title={`Clear semester ${semester.number} grades`}
            className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
          >
            <ArrowPathIcon data-icon="inline-start" className="size-3.5" />
            Clear grade
          </Button>
        </div>
      </div>

      {showModeToggle && (
        <ModeSegmented mode={mode} onChange={onModeChange} semesterNumber={semester.number} />
      )}

      {mode === "sgpa" && showModeToggle ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-foreground">Overall SGPA</span>
            <SgpaInput
              value={sgpaValue}
              onChange={onSgpaChange}
              ariaLabel={`Semester ${semester.number} overall SGPA`}
              invalid={invalid}
            />
          </div>
          <ArrearAddControl
            options={arrearAddOptions}
            added={addedArrears}
            onAdd={onAddArrear}
            onRemove={onRemoveArrear}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {computed.rows.map((row) => (
            <CourseGradeRow
              key={`${row.code}-${row.homeSemester}`}
              code={row.code}
              title={row.title}
              credits={row.credits}
              grades={grades}
              value={row.gradeLabel}
              onChange={(label) => onGradeChange(row.sourceIndex, label)}
            />
          ))}
        </div>
      )}

      {semester.number >= 2 && (
        <ClearedArrearsSection
          clearedArrears={clearedArrears}
          pendingArrears={pendingArrears}
          passingGrades={passingGrades}
          onClearArrear={onClearArrear}
          onRemove={onRemoveClearedArrear}
          onGradeChange={onClearedArrearGradeChange}
        />
      )}
    </div>
  );
});
