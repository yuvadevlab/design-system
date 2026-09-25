"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Root container for accessible modal dialog windows. Built upon Radix UI Dialog.
 *
 * @example
 * ```tsx
 * <Dialog open={isOpen} onOpenChange={setIsOpen}>
 *   <DialogTrigger asChild>
 *     <Button variant="outline">Open Settings</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Account Settings</DialogTitle>
 *       <DialogDescription>Manage your workspace credentials.</DialogDescription>
 *     </DialogHeader>
 *     <div className="py-4">Dialog body content here...</div>
 *     <DialogFooter>
 *       <Button onClick={() => setIsOpen(false)}>Save changes</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const Dialog = DialogPrimitive.Root;

/** Button or trigger element that opens the dialog modal. */
const DialogTrigger = DialogPrimitive.Trigger;

/** Portals dialog content to the end of document.body for clean stacking context. */
const DialogPortal = DialogPrimitive.Portal;

/** Button that closes the open dialog. */
const DialogClose = DialogPrimitive.Close;

export type DialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

/** Semi-transparent backdrop overlay rendered beneath the dialog modal. */
const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("dl-dialog-overlay", className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

/**
 * Modal content container. Renders overlay, content card, and accessible close button.
 */
const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn("dl-dialog-content", className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="dl-dialog-close">
        <X style={{ width: "1rem", height: "1rem" }} />
        <span
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
          }}
        >
          Close
        </span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/** Top container of the dialog for title and description. */
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("dl-dialog__header", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

/** Bottom container of the dialog for action buttons. */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("dl-dialog__footer", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

/** Accessible title heading for the dialog modal. */
const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("dl-dialog__title", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/** Accessible explanatory text for the dialog content. */
const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("dl-dialog__desc", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
