"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@yuva-devlab/ui";

const navigationItems = [
  {
    category: "Getting Started",
    links: [
      { name: "Overview", href: "/" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Design Tokens", href: "/docs/tokens" },
    ],
  },
  {
    category: "Form Elements",
    links: [
      { name: "Button", href: "/components/button" },
      { name: "Input", href: "/components/input" },
      { name: "Select", href: "/components/select" },
      { name: "Switch", href: "/components/switch" },
      { name: "Checkbox", href: "/components/checkbox" },
    ],
  },
  {
    category: "Overlays & Feedback",
    links: [
      { name: "Dialog", href: "/components/dialog" },
      { name: "Alert", href: "/components/alert" },
      { name: "Progress", href: "/components/progress" },
      { name: "Skeleton", href: "/components/skeleton" },
      { name: "Toaster", href: "/components/toaster" },
    ],
  },
  {
    category: "Data Display & Layout",
    links: [
      { name: "Badge", href: "/components/badge" },
      { name: "Status Badge", href: "/components/status-badge" },
      { name: "Card", href: "/components/card" },
      { name: "Table", href: "/components/table" },
      { name: "Tabs", href: "/components/tabs" },
      { name: "Avatar", href: "/components/avatar" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const activeRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest" });
  }, [pathname]);

  return (
    <aside className="border-border bg-card/40 hidden h-full w-64 shrink-0 flex-col overflow-y-auto border-r p-4 md:flex">
      <div className="space-y-6">
        {navigationItems.map((group) => (
          <div key={group.category} className="space-y-1.5">
            <h4 className="text-muted-foreground px-2.5 text-xs font-semibold tracking-wider uppercase">
              {group.category}
            </h4>
            <div className="flex flex-col gap-1.5">
              {group.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    scroll={false}
                    ref={isActive ? activeRef : undefined}
                    className={cn(
                      "flex items-center rounded-md px-3 py-1.5 text-xs font-medium transition",
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
