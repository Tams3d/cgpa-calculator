import { memo } from "react";

interface StatsSectionProps {
  departmentCount: number;
  courseCount: number;
}

export const StatsSection = memo(function StatsSection({
  departmentCount,
  courseCount,
}: StatsSectionProps) {
  const stats = [
    { value: String(departmentCount), label: "Departments covered" },
    { value: String(courseCount), label: "Courses mapped" },
    { value: "480", label: "Semester structures" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mx-auto max-w-xl text-balance text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
            Every credit counts.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Matched to your college syllabus. What you see is what your college computes.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3 md:mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="space-y-3 border-t-0 pt-0 text-center sm:border-t sm:pt-6"
            >
              <div className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
                {stat.value}
              </div>
              <p className="font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
