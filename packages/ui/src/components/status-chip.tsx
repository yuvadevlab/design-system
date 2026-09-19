import * as React from "react";
import { cn } from "../lib/utils";

const statusTone: Record<string, string> = {
  active: "border-primary/30 bg-primary/10 text-primary",
  running: "border-primary/30 bg-primary/10 text-primary",
  completed: "border-border bg-secondary text-muted-foreground",
  done: "border-border bg-secondary text-muted-foreground",
  indexed: "border-primary/30 bg-primary/10 text-primary",
  enabled: "border-primary/30 bg-primary/10 text-primary",
  available: "border-primary/30 bg-primary/10 text-primary",
  published: "border-primary/30 bg-primary/10 text-primary",
  ok: "border-primary/30 bg-primary/10 text-primary",
  waiting: "border-warning/35 bg-warning/10 text-warning",
  paused: "border-warning/35 bg-warning/10 text-warning",
  processing: "border-warning/35 bg-warning/10 text-warning",
  degraded: "border-warning/35 bg-warning/10 text-warning",
  warn: "border-warning/35 bg-warning/10 text-warning",
  "requires-approval": "border-warning/35 bg-warning/10 text-warning",
  draft: "border-warning/35 bg-warning/10 text-warning",
  failed: "border-destructive/35 bg-destructive/10 text-destructive",
  error: "border-destructive/35 bg-destructive/10 text-destructive",
  offline: "border-destructive/35 bg-destructive/10 text-destructive",
};

export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: string;
}

export const StatusChip = React.forwardRef<HTMLSpanElement, StatusChipProps>(
  ({ status, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px]",
          statusTone[status] ??
            "border-border bg-secondary text-muted-foreground",
          className,
        )}
        {...props}
      >
        <span className="size-1.5 rounded-full bg-current" />
        {status}
      </span>
    );
  },
);
StatusChip.displayName = "StatusChip";
