import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple Tailwind class names and conditionally applied class definitions.
 * Combines clsx dynamic toggling with tailwind-merge collision deduplication.
 *
 * @param inputs - List of class names, conditional records, or arrays.
 * @returns Deduplicated, normalized CSS class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
