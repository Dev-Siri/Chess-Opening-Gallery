export const sounds = [
  "capture",
  "castle",
  "check",
  "checkmate",
  "move-opponent",
  "move-self",
  "promote",
] as const;

export type Sound = (typeof sounds)[number];
