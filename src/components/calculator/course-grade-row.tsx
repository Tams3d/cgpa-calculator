import { memo } from "react";
import type { Grade } from "@/types/curriculum";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseGradeRowProps {
  code: string;
  title: string;
  credits: number;
  grades: Grade[];
  value: string | null;
  onChange: (label: string | null) => void;
}

export const CourseGradeRow = memo(function CourseGradeRow({
  code,
  title,
  credits,
  grades,
  value,
  onChange,
}: CourseGradeRowProps) {
  const selected = value ? grades.find((g) => g.label === value) : undefined;
  const isArrearGrade = Boolean(value && selected && !selected.exempt && selected.points === 0);
  const items = [
    { label: "No grade", value: "no-grade" },
    ...grades.map((g) => ({
      label: g.exempt ? `${g.label} (withheld)` : g.label,
      value: g.label,
    })),
  ];

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-md border p-2 transition-colors hover:border-primary/40 hover:bg-secondary/70 sm:flex-row sm:items-center sm:justify-between sm:gap-6",
        isArrearGrade ? "border-destructive/40" : "border-transparent",
      )}
    >
      <div className="flex min-w-0 flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className={cn(
            "w-14 shrink-0 justify-center border-foreground/20 font-mono text-[11px] tracking-wide uppercase",
            isArrearGrade && "border-destructive/40 text-destructive",
          )}
        >
          {code}
        </Badge>
        <span className="min-w-0 truncate text-sm text-foreground" title={title}>
          {title}
        </span>
      </div>

      <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto sm:justify-end">
        <Badge variant="secondary" className="shrink-0 tabular-nums">
          {credits} credit{credits === 1 ? "" : "s"}
        </Badge>
        <Select
          items={items}
          value={value}
          onValueChange={(v) => onChange(v === "no-grade" ? null : v)}
        >
          <SelectTrigger
            aria-label={`${code} ${title} grade`}
            className={cn(
              "h-9 max-w-full min-w-0 flex-1 sm:w-44",
              isArrearGrade && "text-destructive",
            )}
          >
            <SelectValue placeholder="Choose grade" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
