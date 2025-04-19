import Image from "next/image";

export const THEMES = ["neo", "classic", "wood"] as const;
export const THEME_KEY = "piece-theme";

export type Theme = (typeof THEMES)[number];

export function getPiecesByTheme(theme: Theme) {
  return {
    bB: () => (
      <Image
        src={`/pieces/${theme}/black/bishop.png`}
        alt="Black Bishop"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    bR: () => (
      <Image
        src={`/pieces/${theme}/black/rook.png`}
        alt="Black Rook"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    bN: () => (
      <Image
        src={`/pieces/${theme}/black/knight.png`}
        alt="Black Knight"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    bK: () => (
      <Image
        src={`/pieces/${theme}/black/king.png`}
        alt="Black King"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    bP: () => (
      <Image
        src={`/pieces/${theme}/black/pawn.png`}
        alt="Black Pawn"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    bQ: () => (
      <Image
        src={`/pieces/${theme}/black/queen.png`}
        alt="Black Queen"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    wB: () => (
      <Image
        src={`/pieces/${theme}/white/bishop.png`}
        alt="White Bishop"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    wR: () => (
      <Image
        src={`/pieces/${theme}/white/rook.png`}
        alt="White Rook"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    wN: () => (
      <Image
        src={`/pieces/${theme}/white/knight.png`}
        alt="White Knight"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    wK: () => (
      <Image
        src={`/pieces/${theme}/white/king.png`}
        alt="White King"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    wP: () => (
      <Image
        src={`/pieces/${theme}/white/pawn.png`}
        alt="White Pawn"
        height={80}
        width={80}
        draggable={false}
      />
    ),
    wQ: () => (
      <Image
        src={`/pieces/${theme}/white/queen.png`}
        alt="White Queen"
        height={80}
        width={80}
        draggable={false}
      />
    ),
  };
}
