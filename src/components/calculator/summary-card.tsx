import { memo } from "react";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import type { TotalsComputed } from "@/types/computation";
import { formatDecimal } from "@/lib/cgpa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CgpaSummaryCardProps {
  totals: TotalsComputed;
  currentSemesterSgpa: number | null;
  previousCgpa: number | null;
  activeSemester: number;
  creditsCompleted: number;
  totalProgramCredits: number;
  gradedSemesterCount: number;
  percentage: number | null;
  percentageLabel: string;
  onReset: () => void;
}

export const CgpaSummaryCard = memo(function CgpaSummaryCard({
  totals,
  currentSemesterSgpa,
  previousCgpa,
  activeSemester,
  creditsCompleted,
  totalProgramCredits,
  gradedSemesterCount,
  percentage,
  percentageLabel,
  onReset,
}: CgpaSummaryCardProps) {
  const noGradesYet = totals.cgpa === null;
  const hasPreviousCgpa = previousCgpa !== null;

  return (
    <Card className="shadow-sm">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2 text-sm">
          Your score
          {gradedSemesterCount > 0 && (
            <Badge variant="outline" className="px-1.5 py-0 text-xs font-normal">
              {gradedSemesterCount} semester{gradedSemesterCount === 1 ? "" : "s"} graded
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-xs">Updates as you pick grades</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-4 pt-0">
        <div aria-live="polite" className="rounded-xl border bg-secondary/60 p-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs font-medium text-muted-foreground">CGPA</p>
            {percentage !== null && (
              <p className="text-xs text-muted-foreground tabular-nums">
                <span className="font-semibold text-foreground">{percentage.toFixed(2)}%</span>
                <span className="ml-1.5 text-muted-foreground">({percentageLabel})</span>
              </p>
            )}
          </div>
          {noGradesYet ? (
            <p className="mt-1 text-sm font-medium text-muted-foreground">No grades yet</p>
          ) : (
            <p className="mt-1.5 font-mono text-3xl leading-none font-bold tracking-tight text-success tabular-nums sm:text-5xl">
              {formatDecimal(totals.cgpa)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col gap-1 rounded-xl border bg-secondary/60 p-3.5">
            <p className="text-xs font-medium text-muted-foreground">Previous CGPA</p>
            {hasPreviousCgpa ? (
              <p className="font-display text-xl leading-none font-bold text-info tabular-nums sm:text-2xl">
                {formatDecimal(previousCgpa)}
              </p>
            ) : (
              <p className="text-sm font-medium text-muted-foreground">Not entered</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {activeSemester > 1 ? `Semesters 1 to ${activeSemester - 1}` : "No semesters yet"}
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border bg-secondary/60 p-3.5">
            <p className="text-xs font-medium text-muted-foreground">This semester</p>
            {currentSemesterSgpa !== null ? (
              <p className="font-display text-xl leading-none font-bold text-success tabular-nums sm:text-2xl">
                {formatDecimal(currentSemesterSgpa)}
              </p>
            ) : (
              <p className="text-sm font-medium text-muted-foreground">Not entered</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">SGPA</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Credits completed</span>
            <span className="tabular-nums">
              {creditsCompleted}/{totalProgramCredits}
            </span>
          </div>
          <Progress
            value={creditsCompleted}
            max={totalProgramCredits}
            ariaLabel="Credits completed"
            indicatorClassName="bg-success"
          />

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onReset}
            className="w-full text-destructive hover:bg-destructive/10"
          >
            <ArrowPathIcon data-icon="inline-start" className="size-4" />
            Clear entered grades
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});
