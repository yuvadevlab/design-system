import * as React from "react";
import { cn } from "../lib/utils";

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  meta?: React.ReactNode;
}

export const Panel = React.forwardRef<HTMLElement, PanelProps>(
  ({ title, meta, children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("rounded-lg border border-border bg-card p-4", className)}
        {...props}
      >
        {title ? (
          <div className="mb-3 flex items-center gap-2">
            <h2 className="font-display text-sm font-semibold">{title}</h2>
            {meta ? (
              <div className="ml-auto font-mono text-[10px] text-muted-foreground">
                {meta}
              </div>
            ) : null}
          </div>
        ) : null}
        {children}
      </section>
    );
  },
);
Panel.displayName = "Panel";
