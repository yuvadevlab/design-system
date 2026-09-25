import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

export type AspectRatioProps = React.ComponentPropsWithoutRef<
  typeof AspectRatioPrimitive.Root
>;

/**
 * Displays content within a desired ratio (e.g. 16/9, 4/3, 1/1).
 *
 * @example
 * ```tsx
 * <div className="w-[300px]">
 *   <AspectRatio ratio={16 / 9}>
 *     <img
 *       src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
 *       alt="Photo by Drew Beamer"
 *       className="rounded-md object-cover w-full h-full"
 *     />
 *   </AspectRatio>
 * </div>
 * ```
 */
const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
