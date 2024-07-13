/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";

import type { ExploredPositions, Move } from "@/types/explored-position";

import ChessBoard from "@/components/ChessBoard";
import PGNLoader from "./pgn-loader";

import PositionCard from "@/components/PositionCard";
import queryClient from "@/utils/query-client";
import playSoundEffect from "@/utils/sound-effects";

export default function FromPGNPage() {
  const [position, setPosition] = useState(new Chess());
  const [nextMoves, setNextMoves] = useState<Move[]>([]);
  const [openingName, setOpeningName] = useState("Starting Position");

  const currentStateFen = position.fen();

  async function loadNextMoves() {
    const exploredPositions = await queryClient<ExploredPositions>("/masters", {
      searchParams: { fen: currentStateFen },
    });

    setNextMoves(exploredPositions.moves);
    if (exploredPositions?.opening?.name)
      setOpeningName(exploredPositions?.opening?.name);
  }

  useEffect(() => {
    loadNextMoves();
  }, [currentStateFen, loadNextMoves]);

  function playMove(move: string) {
    const gameCopy = new Chess(position.fen());

    gameCopy.move(move);

    setPosition(gameCopy);
    if (typeof window !== "undefined")
      playSoundEffect(move, gameCopy.moveNumber());
    loadNextMoves();
  }

  return (
    <div className="flex pt-28 p-10 pb-6">
      <div className="flex h-fit w-fit pr-10 gap-10 border-r border-gray-700">
        <div>
          <p className="mb-3">{openingName}</p>
          <ChessBoard game={position} height={500} width={500} />
        </div>
      </div>
      <div className="my-2 mx-4">
        <PGNLoader setPosition={setPosition} />
      </div>
      <div className="grid grid-cols-2 w-full gap-4 overflow-hidden">
        {nextMoves.map((move) => (
          <button
            type="button"
            key={move.san}
            onClick={() => playMove(move.san)}
            className="w-full"
          >
            <PositionCard currentFen={currentStateFen} {...move} />
          </button>
        ))}
      </div>
    </div>
  );
}
