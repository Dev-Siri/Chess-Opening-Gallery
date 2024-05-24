export interface Game {
  id: string;
  winner: "white" | "black" | "draw";
  white: Player;
  black: Player;
  year: number;
  month: string;
}

export interface Player {
  name: string;
  rating: number;
}

export interface Move {
  uci: string;
  san: string;
  averageRating: number;
  white: number;
  draws: number;
  black: number;
  game?: Game | null;
}

export interface HistoryEntry {
  month: string;
  black: number;
  draws: number;
  white: number;
}

export interface Opening {
  eco: string;
  name: string;
}

export interface ExploredPositions {
  opening: Opening;
  white: number;
  draws: number;
  black: number;
  moves: Move[];
  topGames: Game[];
  recentGames: Game[];
  history: HistoryEntry[];
}
