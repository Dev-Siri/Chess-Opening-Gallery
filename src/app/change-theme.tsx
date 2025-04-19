"use client";
import Image from "next/image";

import { THEMES, THEME_KEY } from "@/constants/theme";
import { useThemeContext } from "@/context/ThemeContext";

export default function ChangeTheme() {
  const { theme, setTheme } = useThemeContext();

  function changeTheme() {
    const currentThemeIndex = THEMES.indexOf(theme);
    const nextTheme =
      THEMES[
        currentThemeIndex === THEMES.length - 1 ? 0 : currentThemeIndex + 1
      ];
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  }

  return (
    <button type="button" onClick={changeTheme} title="Change Piece Theme">
      <Image
        src={`/pieces/${theme}/white/king.png`}
        alt="Change Piece Theme"
        height={50}
        width={50}
      />
    </button>
  );
}
