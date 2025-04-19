import type { ExploredPositions } from "@/types/explored-position";

import queryClient from "@/utils/query-client";
import { calculateDraws } from "@/utils/stats";

interface Props {
  fen: string;
  movePlayed: string;
}

export default async function MoveInfo({ fen, movePlayed }: Props) {
  const { opening, white, black, draws } = await queryClient<ExploredPositions>(
    "/masters",
    {
      searchParams: { fen },
    }
  );
  const drawPercentage = calculateDraws(white, black, draws);

  return (
    <>
      <h2 className="text-6xl ">
        <span>{opening?.name ?? "Follow up"}</span>{" "}
        <span className="text-4xl">- {movePlayed}</span>
      </h2>
      <h4 className="text-lg text-gray-400">
        Led to draws in {drawPercentage}% of games
      </h4>
    </>
  );
}
