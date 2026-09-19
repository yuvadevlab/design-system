import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system" | string;

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
}

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * Universal theme provider for Yuva DevLab applications (FinAI, OrchestrAI).
 * Handles HTML class manipulation, data-theme attributes, system preferences,
 * and localStorage persistence.
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "yd-theme",
  attribute = "data-theme",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (stored) return stored;
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove legacy classes
    root.classList.remove("light", "dark");

    let activeTheme = theme;
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      activeTheme = systemTheme;
    }

    const isDark = activeTheme.includes("dark") || activeTheme === "orchestrai";
    const resolved = isDark ? "dark" : "light";
    setResolvedTheme(resolved);

    root.classList.add(resolved);

    // Apply data-theme attribute
    if (attribute) {
      root.setAttribute(attribute, theme);
    }
  }, [theme, enableSystem, attribute]);

  const value: ThemeProviderState = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Hook to access current theme state and mutate the theme.
 */
export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
