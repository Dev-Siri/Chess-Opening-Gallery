"use client";
import { Chess, DEFAULT_POSITION } from "chess.js";

import type { Move } from "@/types/explored-position";

import { calculateDraws, calculateWinrateForWhite } from "@/utils/stats";

import { useEffect, useState } from "react";
import ChessBoard from "./ChessBoard";

interface Props extends Move {
  currentFen?: string;
}

export default function PositionCard({
  san,
  white,
  black,
  averageRating,
  draws,
  currentFen = DEFAULT_POSITION,
}: Props) {
  const [game, setGame] = useState(new Chess());

  const winrateForWhite = calculateWinrateForWhite(white, black);
  const winrateForBlack = 100 - winrateForWhite;
  const drawPercentage = calculateDraws(white, black, draws);

  useEffect(() => {
    const gameCopy = new Chess(currentFen);

    // inner peace
    try {
      gameCopy.move(san);
    } catch {}

    setGame(gameCopy);
    return () => setGame(new Chess());
  }, [game, setGame, currentFen, san]);

  return (
    <div className="h-full w-full relative border-[#3a3a3a] bg-[#3a3a3a] border-4 rounded-md overflow-hidden hover:scale-105 duration-200 cursor-pointer select-none">
      <div className="flex justify-between items-center absolute z-10 py-3 w-[90%] bg-[#3a3a3a] bg-opacity-70 ml-[10%]">
        <div>
          <p className="text-xs pl-2">
            Played at an average of {averageRating} Elo
          </p>
          <p className="text-xs pl-2">
            Led to draws in {drawPercentage}% of games
          </p>
        </div>
        <p className="text-2xl pr-2">{san}</p>
      </div>
      <div className="flex h-full w-full rounded-md overflow-hidden">
        <div className="h-full w-[10%]">
          <div
            className="h-full w-full flex pt-2 justify-center bg-slate-800"
            style={{ height: `${winrateForBlack}%` }}
          >
            {winrateForBlack > winrateForWhite && (
              <p className="text-xs">{winrateForBlack}%</p>
            )}
          </div>
          <div
            className="h-full w-full flex justify-center items-end pb-2 text-black bg-white"
            style={{ height: `${winrateForWhite}%` }}
          >
            {(winrateForWhite > winrateForBlack || winrateForWhite === 50) && (
              <p className="text-xs">{winrateForWhite}%</p>
            )}
          </div>
        </div>
        <div className="h-full w-[90%] pointer-events-none">
          <ChessBoard fen={game.fen()} presentationOnly />
        </div>
      </div>
    </div>
  );
}
