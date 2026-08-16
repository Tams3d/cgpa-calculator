import { memo } from "react";
import type { ComponentType, SVGProps } from "react";
import BookOpenIcon from "@heroicons/react/24/outline/BookOpenIcon";
import CalculatorIcon from "@heroicons/react/24/outline/CalculatorIcon";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import ShieldCheckIcon from "@heroicons/react/24/outline/ShieldCheckIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import { SectionHeading } from "@/components/landing/section-heading";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Feature {
  icon: IconComponent;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Subject by subject",
    body: "Pick a grade for each course.",
  },
  {
    icon: BoltIcon,
    title: "Instant updates",
    body: "SGPA, CGPA and percentage update as you type.",
  },
  {
    icon: BookOpenIcon,
    title: "Regulation aware",
    body: "Credits and grade points follow your department and batch.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Private by default",
    body: "Everything stays in your browser. No account, no server.",
  },
  {
    icon: AcademicCapIcon,
    title: "All 19 departments",
    body: "From CSE to Robotics, every department and batch is covered.",
  },
  {
    icon: CalculatorIcon,
    title: "Exact to the credit",
    body: "Non-credit courses and withheld grades do not affect your average.",
  },
];

function FeatureIcon({ icon: Icon }: Feature) {
  return (
    <div aria-hidden className="mx-auto flex items-center justify-center">
      <Icon className="size-8 text-primary" strokeWidth={1.5} />
    </div>
  );
}

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-14 border-b-0 py-16 sm:border-b md:py-20">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <div className="@container">
          <SectionHeading
            title="Why it adds up"
            description="No spreadsheets, no grade points to memorise. Your exact CGPA, instantly."
          />
          <dl className="mt-8 grid grid-cols-2 gap-6 @2xl:grid-cols-3 @2xl:gap-10 *:space-y-2 *:text-balance *:text-center *:text-sm">
            {FEATURES.map((feature) => (
              <div key={feature.title}>
                <FeatureIcon {...feature} />
                <dt className="mt-4 font-semibold text-foreground">{feature.title}</dt>
                <dd className="text-muted-foreground">{feature.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
});
