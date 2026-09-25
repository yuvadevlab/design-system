import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Root ContextMenu container.
 *
 * @example
 * ```tsx
 * <ContextMenu>
 *   <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
 *     Right click here
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Back</ContextMenuItem>
 *     <ContextMenuItem>Forward</ContextMenuItem>
 *     <ContextMenuItem>Reload</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 */
const ContextMenu = ContextMenuPrimitive.Root;

/**
 * The area that triggers the context menu on right click or long press.
 */
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

/**
 * Group of related context menu items.
 */
const ContextMenuGroup = ContextMenuPrimitive.Group;

/**
 * Portal rendering the context menu in the document body.
 */
const ContextMenuPortal = ContextMenuPrimitive.Portal;

/**
 * Submenu container within a context menu.
 */
const ContextMenuSub = ContextMenuPrimitive.Sub;

/**
 * Radio group container for mutually exclusive context options.
 */
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export type ContextMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

/**
 * Trigger item for opening a nested context submenu.
 */
const ContextMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "dl-menu-item dl-menu-sub-trigger",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

export type ContextMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
>;

/**
 * Content container for a nested context submenu.
 */
const ContextMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn("dl-menu-content", className)}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

export type ContextMenuContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
>;

/**
 * Floating content panel containing context menu items.
 */
const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn("dl-context-menu-content", className)}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

export type ContextMenuItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> & {
  inset?: boolean;
};

/**
 * Selectable item within a context menu.
 */
const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn("dl-menu-item", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

export type ContextMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
>;

/**
 * Checkbox menu item supporting checked/unchecked toggle state in a context menu.
 */
const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn("dl-menu-item dl-menu-checkbox-item", className)}
    {...props}
  >
    <span className="dl-menu-checkbox-item__indicator">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="size-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

export type ContextMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
>;

/**
 * Radio menu item supporting mutual exclusion in a ContextMenuRadioGroup.
 */
const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn("dl-menu-item dl-menu-radio-item", className)}
    {...props}
  >
    <span className="dl-menu-radio-item__indicator">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="fill-current size-2" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

export type ContextMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> & {
  inset?: boolean;
};

/**
 * Header label for grouping context menu items.
 */
const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("dl-menu-label", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

export type ContextMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Separator
>;

/**
 * Horizontal rule separating sections within a context menu.
 */
const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("dl-menu-separator", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

export type ContextMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * Keyboard shortcut hint displayed at the trailing end of a context menu item.
 */
const ContextMenuShortcut = ({
  className,
  ...props
}: ContextMenuShortcutProps) => {
  return <span className={cn("dl-menu-shortcut", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
