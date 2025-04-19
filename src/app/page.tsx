import { DEFAULT_POSITION } from "chess.js";
import Link from "next/link";

import type { ExploredPositions } from "@/types/explored-position";

import PositionCard from "@/components/PositionCard";
import queryClient from "@/utils/query-client";
import SearchInput from "./search-input";

interface Props {
  searchParams: { q: string };
}

export default async function Home({ searchParams: { q } }: Props) {
  const exploredPositions = await queryClient<ExploredPositions>("/masters", {
    searchParams: { fen: DEFAULT_POSITION },
  });

  return (
    <article className="flex flex-col items-center w-screen h-screen p-10 pt-32 overflow-x-hidden">
      <h1 className="text-5xl font-bold">Chess Database</h1>
      <p className="mt-4 text-2xl text-center [text-wrap:balance]">
        Search openings, and go move by move to look at the most common outcomes
      </p>
      <div className="flex items-center justify-center w-full mt-6">
        <SearchInput />
      </div>
      <div className="flex w-full">
        <Link
          href="/from-pgn"
          className="bg-gray-800 font-semibold p-3 px-6 mt-4 rounded-md hover:opacity-90 duration-200"
        >
          Load PGN
        </Link>
      </div>
      <section className="w-full grid grid-cols-3 py-6 gap-6">
        {(q !== ""
          ? exploredPositions.moves.filter((move) => move.san.includes(q))
          : exploredPositions.moves
        ).map((move) => (
          <Link href={`/${move.san}`} key={move.san}>
            <PositionCard {...move} />
          </Link>
        ))}
      </section>
    </article>
  );
}
