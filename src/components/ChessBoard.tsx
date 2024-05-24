"use client";
import { Chess, DEFAULT_POSITION } from "chess.js";
import Image from "next/image";
import { Chessboard as ReactChessBoard } from "react-chessboard";

import { useThemeContext } from "@/context/ThemeContext";

interface Props {
  startingPositionFen?: string;
}

export default function ChessBoard({
  startingPositionFen = DEFAULT_POSITION,
}: Props) {
  const { theme } = useThemeContext();

  return (
    <ReactChessBoard
      position={new Chess(startingPositionFen).fen()}
      customPieces={{
        bB: () => (
          <Image
            src={`/pieces/${theme}/black/bishop.png`}
            alt="Black Bishop"
            height={80}
            width={80}
          />
        ),
        bR: () => (
          <Image
            src={`/pieces/${theme}/black/rook.png`}
            alt="Black Rook"
            height={80}
            width={80}
          />
        ),
        bN: () => (
          <Image
            src={`/pieces/${theme}/black/knight.png`}
            alt="Black Knight"
            height={80}
            width={80}
          />
        ),
        bK: () => (
          <Image
            src={`/pieces/${theme}/black/king.png`}
            alt="Black King"
            height={80}
            width={80}
          />
        ),
        bP: () => (
          <Image
            src={`/pieces/${theme}/black/pawn.png`}
            alt="Black Pawn"
            height={80}
            width={80}
          />
        ),
        bQ: () => (
          <Image
            src={`/pieces/${theme}/black/queen.png`}
            alt="Black Queen"
            height={80}
            width={80}
          />
        ),
        wB: () => (
          <Image
            src={`/pieces/${theme}/white/bishop.png`}
            alt="White Bishop"
            height={80}
            width={80}
          />
        ),
        wR: () => (
          <Image
            src={`/pieces/${theme}/white/rook.png`}
            alt="White Rook"
            height={80}
            width={80}
          />
        ),
        wN: () => (
          <Image
            src={`/pieces/${theme}/white/knight.png`}
            alt="White Knight"
            height={80}
            width={80}
          />
        ),
        wK: () => (
          <Image
            src={`/pieces/${theme}/white/king.png`}
            alt="White King"
            height={80}
            width={80}
          />
        ),
        wP: () => (
          <Image
            src={`/pieces/${theme}/white/pawn.png`}
            alt="White Pawn"
            height={80}
            width={80}
          />
        ),
        wQ: () => (
          <Image
            src={`/pieces/${theme}/white/queen.png`}
            alt="White Queen"
            height={80}
            width={80}
          />
        ),
      }}
    />
  );
}
