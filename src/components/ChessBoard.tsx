"use client";
import { Chess, DEFAULT_POSITION } from "chess.js";
import Image from "next/image";
import { useState } from "react";
import { Chessboard as ReactChessBoard } from "react-chessboard";

import { useThemeContext } from "@/context/ThemeContext";

import { getPiecesByTheme } from "@/constants/theme";
import type { BoardOrientation } from "react-chessboard/dist/chessboard/types";

type Props = {
  height?: number;
  width?: number;
  presentationOnly?: boolean;
} & (
  | {
      game: Chess;
    }
  | {
      fen?: string;
    }
);

export default function ChessBoard({
  height,
  width,
  presentationOnly,
  ...props
}: Props) {
  const [orientation, setOrientation] = useState<BoardOrientation>("white");
  const { theme } = useThemeContext();

  return (
    <div className="flex flex-col gap-2">
      <div
        className="select-none rounded-md overflow-hidden"
        style={{ height, width }}
      >
        <ReactChessBoard
          position={
            "game" in props ? props.game.fen() : props.fen ?? DEFAULT_POSITION
          }
          boardOrientation={orientation}
          isDraggablePiece={() => false}
          customPieces={getPiecesByTheme(theme)}
        />
      </div>
      {!presentationOnly && (
        <button
          type="button"
          className="flex items-center justify-center bg-gray-800 w-fit p-2 px-5 gap-1 hover:opacity-90 duration-200 rounded-md"
          onClick={() =>
            setOrientation(orientation === "white" ? "black" : "white")
          }
          aria-label={`Flip orientation to ${
            orientation === "white" ? "Black" : "White"
          }'s perspective`}
        >
          <span className="font-semibold">Flip</span>
          <Image
            src={`/pieces/${theme}/${orientation}/king.png`}
            alt={`${orientation.charAt(0).toUpperCase()}${orientation.slice(
              1
            )} King`}
            height={30}
            width={30}
          />
        </button>
      )}
    </div>
  );
}
