"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

import { THEMES, THEME_KEY, type Theme } from "@/constants/theme";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({
  theme: "classic",
  setTheme: () => {},
});

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("classic");

  useEffect(() => {
    const theme = localStorage.getItem(THEME_KEY);

    const validTheme = THEMES.includes(theme as Theme);

    if (validTheme) setTheme((theme ?? "classic") as Theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
