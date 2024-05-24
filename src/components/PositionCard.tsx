import { Chess, DEFAULT_POSITION } from "chess.js";
import Link from "next/link";

import type { Move } from "@/types/explored-position";

import { calculateDraws, calculateWinrateForWhite } from "@/utils/stats";

import ChessBoard from "./ChessBoard";

interface Props extends Move {
  currentUrlPathname: string;
  currentFen?: string;
}

export default function PositionCard({
  san,
  white,
  black,
  averageRating,
  draws,
  currentUrlPathname,
  currentFen = DEFAULT_POSITION,
}: Props) {
  const winrateForWhite = calculateWinrateForWhite(white, black);
  const winrateForBlack = 100 - winrateForWhite;
  const drawPercentage = calculateDraws(white, black, draws);
  const game = new Chess(currentFen);

  game.move(san);

  return (
    <Link
      href={`${currentUrlPathname === "/" ? "" : currentUrlPathname}/${san}`}
      className="relative border-[#3a3a3a] bg-[#3a3a3a] border-4 rounded-md overflow-hidden hover:scale-105 duration-200 cursor-pointer select-none"
    >
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
      <div className="flex h-full w-full rounded-sm">
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
          <ChessBoard startingPositionFen={game.fen()} />
        </div>
      </div>
    </Link>
  );
}
