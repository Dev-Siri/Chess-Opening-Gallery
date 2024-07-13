import { Chess } from "chess.js";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

import ChessBoard from "@/components/ChessBoard";
import FenCopy from "./fen-copy";
import MoveInfo from "./move-info";
import MoveList from "./move-list";
import NextMoves from "./next-moves";

const SoundEffectPlayer = dynamic(() => import("./sound-effect-player"));

interface Props {
  params: {
    moves: string[];
  };
}

export default async function Move({ params: { moves } }: Props) {
  const game = new Chess();

  try {
    // Play all the moves in the url one by one, until the end and then fetch the next set of moves with the created fen.
    for (const move of moves) {
      game.move(move);
    }
  } catch (error) {
    const erroredMove = (error as Error).message.split(" ").at(-1);

    return (
      <div className="flex h-full w-full gap-10">
        <div className="h-2/5 w-2/5 select-none pointer-events-none">
          <ChessBoard />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl">Invalid Move</h2>
          <p>The move `{erroredMove}` cannot be played in this position</p>
        </div>
      </div>
    );
  }

  const currentStateFen = game.fen();
  const movePlayed = moves.at(-1) ?? "";

  return (
    <div className="h-full w-full">
      <SoundEffectPlayer move={movePlayed} moveIndex={moves.length} />
      <section className="flex gap-10">
        <ChessBoard fen={currentStateFen} height={500} width={500} />
        <div className="flex flex-col gap-4 w-1/2">
          <Suspense fallback={<Skeleton height={350} />}>
            <MoveInfo fen={currentStateFen} movePlayed={movePlayed} />
          </Suspense>
          <FenCopy fen={currentStateFen} />
          <MoveList moves={moves} />
        </div>
      </section>
      <h4 className="mt-6 text-4xl font-semibold">Follow-up moves</h4>
      <p className="text-gray-400 mt-2">Common responses to `{movePlayed}`</p>
      <Suspense
        fallback={
          <div className="w-full grid grid-cols-3 py-6 gap-6">
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
            <Skeleton height={350} />
          </div>
        }
      >
        <NextMoves fen={currentStateFen} moves={moves} />
      </Suspense>
    </div>
  );
}
