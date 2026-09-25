import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Menu item wrapper component within a `Menubar`.
 */
function MenubarMenu(
  props: React.ComponentProps<typeof MenubarPrimitive.Menu>,
) {
  return <MenubarPrimitive.Menu {...props} />;
}

/**
 * Group wrapper within a `Menubar`.
 */
function MenubarGroup(
  props: React.ComponentProps<typeof MenubarPrimitive.Group>,
) {
  return <MenubarPrimitive.Group {...props} />;
}

/**
 * Portal wrapper rendering menubar popups to document body.
 */
function MenubarPortal(
  props: React.ComponentProps<typeof MenubarPrimitive.Portal>,
) {
  return <MenubarPrimitive.Portal {...props} />;
}

/**
 * Radio group wrapper within a `Menubar`.
 */
function MenubarRadioGroup(
  props: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>,
) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

/**
 * Submenu container within a `Menubar`.
 */
function MenubarSub(props: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

export type MenubarProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Root
>;

/**
 * A persistent horizontal menu bar commonly used in desktop-style web applications.
 *
 * @example
 * ```tsx
 * <Menubar>
 *   <MenubarMenu>
 *     <MenubarTrigger>File</MenubarTrigger>
 *     <MenubarContent>
 *       <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
 *       <MenubarItem>New Window</MenubarItem>
 *       <MenubarSeparator />
 *       <MenubarItem>Exit</MenubarItem>
 *     </MenubarContent>
 *   </MenubarMenu>
 * </Menubar>
 * ```
 */
const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  MenubarProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("dl-menubar", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

export type MenubarTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
>;

/**
 * The top-level menu button in the horizontal menubar row.
 */
const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn("dl-menubar-trigger", className)}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export type MenubarSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  inset?: boolean;
};

/**
 * Trigger item for opening a nested submenu inside a Menubar.
 */
const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

export type MenubarSubContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
>;

/**
 * Popover content rendered when a `MenubarSubTrigger` is expanded.
 */
const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn("dl-menu-content", className)}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

export type MenubarContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
>;

/**
 * Floating panel displaying items under a top-level `MenubarTrigger`.
 */
const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("dl-menu-content", className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

export type MenubarItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> & {
  inset?: boolean;
};

/**
 * Selectable item within a Menubar menu.
 */
const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  MenubarItemProps
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn("dl-menu-item", inset && "pl-8", className)}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

export type MenubarCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
>;

/**
 * Checkbox item within a Menubar menu.
 */
const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn("dl-menu-item dl-menu-checkbox-item", className)}
    checked={checked}
    {...props}
  >
    <span className="dl-menu-checkbox-item__indicator">
      <MenubarPrimitive.ItemIndicator>
        <Check className="size-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

export type MenubarRadioItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
>;

/**
 * Radio item within a Menubar menu.
 */
const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemProps
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn("dl-menu-item dl-menu-radio-item", className)}
    {...props}
  >
    <span className="dl-menu-radio-item__indicator">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="fill-current size-2" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

export type MenubarLabelProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & {
  inset?: boolean;
};

/**
 * Header label within a Menubar menu.
 */
const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  MenubarLabelProps
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("dl-menu-label", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

export type MenubarSeparatorProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
>;

/**
 * Divider separating items within a Menubar menu.
 */
const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("dl-menu-separator", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

export type MenubarShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * Visual shortcut indicator displayed at the trailing end of a Menubar item.
 */
const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => {
  return <span className={cn("dl-menu-shortcut", className)} {...props} />;
};
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
