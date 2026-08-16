import { memo } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const SectionHeading = memo(function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && <p className="mt-2 text-base text-muted-foreground">{description}</p>}
    </div>
  );
});
