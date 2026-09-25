import React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="text-foreground font-display text-3xl font-extrabold tracking-tight sm:text-4xl mt-2 mb-4"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-foreground font-display text-xl font-bold tracking-tight border-b border-border/60 pb-2 mt-8 mb-4"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-foreground font-display text-lg font-semibold tracking-tight mt-6 mb-3"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="text-muted-foreground text-sm leading-relaxed mb-4"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4 pl-2"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal list-inside space-y-1 text-sm text-muted-foreground mb-4 pl-2"
        {...props}
      >
        {children}
      </ol>
    ),
    code: ({ children, ...props }) => (
      <code
        className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-primary font-medium"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="border border-border bg-muted/30 rounded-lg p-4 font-mono text-xs overflow-x-auto text-foreground my-4 leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6 border border-border rounded-lg">
        <table className="w-full text-left text-xs border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border-b border-border bg-muted/40 p-3 font-semibold text-foreground"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-b border-border/50 p-3 text-muted-foreground"
        {...props}
      >
        {children}
      </td>
    ),
    ...components,
  };
}
