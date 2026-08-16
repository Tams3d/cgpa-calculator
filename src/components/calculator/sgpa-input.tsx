import { memo, useCallback } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

const MIN_SGPA = 0;
const MAX_SGPA = 10;

interface SgpaInputProps {
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
  invalid: boolean;
  className?: string;
}

function isValidSgpa(raw: string): boolean {
  if (raw === "") return false;
  if (!/^\d*\.?\d{0,2}$/.test(raw)) return false;
  const num = Number(raw);
  if (Number.isNaN(num)) return false;
  return num >= MIN_SGPA && num <= MAX_SGPA;
}

export const SgpaInput = memo(function SgpaInput({
  value,
  onChange,
  ariaLabel,
  invalid,
  className,
}: SgpaInputProps) {
  const id = useId();
  const hintId = `${id}-hint`;

  const stepSgpa = useCallback(
    (dir: 1 | -1) => {
      const parsed = Number(value);
      const base = Number.isFinite(parsed) ? parsed : 0;
      const next = Math.min(MAX_SGPA, Math.max(MIN_SGPA, Math.round((base + dir * 0.1) * 10) / 10));
      onChange(String(next));
    },
    [value, onChange],
  );

  return (
    <div className="flex flex-col gap-1">
      <input
        id={id}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        aria-label={ariaLabel}
        aria-invalid={invalid}
        aria-describedby={invalid ? hintId : undefined}
        value={value}
        onChange={(e) => {
          const sanitized = e.target.value.replace(",", ".");
          if (isValidSgpa(sanitized) || sanitized === "") {
            onChange(sanitized);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            stepSgpa(1);
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            stepSgpa(-1);
          } else if (e.key === "Enter") {
            e.currentTarget.blur();
          }
        }}
        placeholder="8.50"
        className={cn(
          "h-11 w-28 rounded-lg border border-input bg-card px-3 text-right font-display text-base font-semibold tabular-nums shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
          invalid && "border-destructive",
          !invalid && value !== "" && "text-success",
          className,
        )}
      />
      {invalid && (
        <p id={hintId} className="text-xs leading-snug text-destructive">
          Enter a value between {MIN_SGPA} and {MAX_SGPA}.
        </p>
      )}
    </div>
  );
});
