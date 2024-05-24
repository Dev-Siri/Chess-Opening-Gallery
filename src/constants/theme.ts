export const THEMES = ["neo", "classic", "wood"] as const;
export const THEME_KEY = "piece-theme";

export type Theme = (typeof THEMES)[number];
