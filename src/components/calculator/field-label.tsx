import { memo, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FieldLabelProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
}

export const FieldLabel = memo(function FieldLabel({
  children,
  as,
  className,
  id,
}: FieldLabelProps) {
  const Component = as ?? "span";
  return (
    <Component
      id={id}
      className={cn(
        "text-xs font-semibold tracking-wider text-muted-foreground uppercase",
        className,
      )}
    >
      {children}
    </Component>
  );
});
