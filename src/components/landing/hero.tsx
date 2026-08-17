import { memo } from "react";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import { formatDecimal } from "@/lib/cgpa";
import { buttonVariants } from "@/components/ui/button-variants";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  liveCgpa: number | null;
  livePercentage: number | null;
  liveSgpa: number | null;
  collegeName: string;
  departmentLabel: string;
  regulation: string;
  creditsCompleted: number;
  totalProgramCredits: number;
}

const DEMO_CGPA = 8.75;
const DEMO_PERCENTAGE = 88.15;
const DEMO_SGPA = 8.9;

export const HeroSection = memo(function HeroSection({
  liveCgpa,
  livePercentage,
  liveSgpa,
  collegeName,
  departmentLabel,
  regulation,
  creditsCompleted,
  totalProgramCredits,
}: HeroSectionProps) {
  const cgpa = liveCgpa ?? DEMO_CGPA;
  const percentage = livePercentage ?? DEMO_PERCENTAGE;
  const sgpa = liveSgpa ?? DEMO_SGPA;

  return (
    <section id="top" className="relative overflow-hidden border-b">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-primary/[0.03]" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-10 pb-12 sm:px-6 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#calculator"
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 shadow-sm backdrop-blur transition-colors duration-300 hover:border-primary/40"
          >
            <span className="text-sm font-semibold">New:</span>
            <span className="text-sm font-semibold text-muted-foreground">{collegeName}</span>
          </a>

          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground md:text-6xl">
            Know your CGPA, down to the <span className="text-primary">decimal</span>.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-balance text-muted-foreground md:text-lg">
            Pick your college, department and year. Enter grades once. SGPA, CGPA and percentage
            update instantly.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
            <a
              href="#calculator"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "w-full sm:h-9 sm:w-auto",
              )}
            >
              Start calculating
              <ArrowRightIcon data-icon="inline-end" className="size-4" />
            </a>
            <a
              href="#faq"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full sm:h-9 sm:w-auto",
              )}
            >
              How CGPA is calculated
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-3xl rounded-xl border bg-background p-2 shadow-sm sm:mt-10">
          <div className="relative rounded-xl bg-card p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">{departmentLabel}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-sm bg-success" aria-hidden />
                Live CGPA
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-6xl leading-none font-bold tracking-tight text-foreground tabular-nums sm:text-7xl">
                  {formatDecimal(cgpa)}
                </p>
                <p className="mt-1.5 text-base text-muted-foreground">
                  &asymp;{" "}
                  <span className="font-semibold text-foreground tabular-nums">
                    {percentage.toFixed(2)}%
                  </span>{" "}
                  overall
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Credits completed</span>
                <span className="font-mono text-sm font-semibold text-foreground tabular-nums">
                  {creditsCompleted}/{totalProgramCredits}
                </span>
              </div>
              <Progress
                value={creditsCompleted}
                max={totalProgramCredits}
                ariaLabel="Credits completed"
                indicatorClassName="bg-success"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border bg-secondary px-3 py-2">
                <p className="text-xs text-muted-foreground">This semester &middot; SGPA</p>
                <p
                  className={cn(
                    "font-mono text-2xl font-bold tabular-nums",
                    liveSgpa !== null ? "text-success" : "text-foreground",
                  )}
                >
                  {formatDecimal(sgpa)}
                </p>
              </div>
              <div className="rounded-lg border bg-secondary px-3 py-2">
                <p className="text-xs text-muted-foreground">Regulation</p>
                <p className="font-mono text-2xl font-bold text-foreground tabular-nums">
                  {regulation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
