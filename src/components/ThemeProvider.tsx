
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  isDarkMode: true,
  toggleDarkMode: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme === "dark");

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      setIsDarkMode(systemTheme === "dark");
      return;
    }

    root.classList.add(theme);
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const value = {
    theme,
    setTheme,
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
