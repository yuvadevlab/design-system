import * as React from "react";
import { cn } from "../../lib/utils";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Animated placeholder component for representing content loading states.
 *
 * @example
 * ```tsx
 * <div className="flex items-center space-x-4">
 *   <Skeleton className="h-12 w-12 rounded-full" />
 *   <div className="space-y-2">
 *     <Skeleton className="h-4 w-[250px]" />
 *     <Skeleton className="h-4 w-[200px]" />
 *   </div>
 * </div>
 * ```
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("dl-skeleton", className)} {...props} />;
}
export { Skeleton };
