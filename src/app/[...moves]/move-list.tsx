"use client";
import { useEffect, useRef } from "react";

import { toMoveList } from "@/utils/stats";

interface Props {
  moves: string[];
}

export default function MoveList({ moves }: Props) {
  const pairedMoves = toMoveList(moves);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current)
      listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [moves]);

  return (
    <div
      className="flex flex-col gap-4 bg-[#1c1c1c] p-4 h-[57%] rounded-md overflow-auto"
      ref={listRef}
    >
      {pairedMoves.map((move, i) => {
        const currentMove = moves.at(-1);

        if (!currentMove) return;

        const isBlacksMove = moves.length % 2 === 0;

        const [whitesMove, blacksMove] = move;

        return (
          <div className="flex" key={`${move}-${i}`}>
            <p className="text-gray-400 w-1/3">{i + 1}.</p>
            <p className="w-1/3 cursor-pointer">
              <span
                className={`px-2 py-1 ${
                  !isBlacksMove &&
                  whitesMove === currentMove &&
                  "bg-gray-700 rounded-md"
                }`}
              >
                {whitesMove}
              </span>
            </p>
            <p className="w-1/3 cursor-pointer">
              <span
                className={`
                  px-2 py-1 ${
                    isBlacksMove &&
                    blacksMove === currentMove &&
                    "bg-gray-700 rounded-md"
                  }`}
              >
                {blacksMove}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
