import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

export type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * Toast notification viewport container configured with `@yuva-devlab/ui` design tokens.
 *
 * @example
 * ```tsx
 * // In your root layout:
 * <Toaster />
 *
 * // In any component:
 * toast.success("Configuration saved successfully!");
 * toast.error("Failed to execute agent workflow.");
 * ```
 */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="dl-toaster"
      toastOptions={{
        classNames: {
          toast: "dl-toast",
          description: "dl-toast__desc",
          actionButton: "dl-toast__action",
          cancelButton: "dl-toast__cancel",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
