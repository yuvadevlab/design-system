import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../lib/utils";

export type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
>;

/**
 * Visual or semantic divider between elements, supporting horizontal and vertical orientations.
 *
 * @example
 * ```tsx
 * <div>
 *   <h4>Radix Primitives</h4>
 *   <p>An open-source UI component library.</p>
 *   <Separator className="my-4" />
 *   <div className="flex h-5 items-center space-x-4">
 *     <div>Blog</div>
 *     <Separator orientation="vertical" />
 *     <div>Docs</div>
 *   </div>
 * </div>
 * ```
 */
const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn("dl-separator", className)}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
