"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

export type CollapsibleProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Root
>;

/**
 * An interactive component which expands and collapses a panel.
 *
 * @example
 * ```tsx
 * <Collapsible open={isOpen} onOpenChange={setIsOpen}>
 *   <CollapsibleTrigger asChild>
 *     <Button variant="ghost">Toggle Details</Button>
 *   </CollapsibleTrigger>
 *   <CollapsibleContent>
 *     <div>Hidden details revealed here.</div>
 *   </CollapsibleContent>
 * </Collapsible>
 * ```
 */
const Collapsible = CollapsiblePrimitive.Root;

export type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;

/**
 * The trigger button that toggles the collapsible panel.
 */
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

export type CollapsibleContentProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

/**
 * The component that contains the collapsible content.
 */
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
