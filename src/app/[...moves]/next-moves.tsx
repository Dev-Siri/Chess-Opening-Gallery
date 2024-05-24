import PositionCard from "@/components/PositionCard";
import { ExploredPositions } from "@/types/explored-position";
import queryClient from "@/utils/query-client";

interface Props {
  fen: string;
  moves: string[];
}

export default async function NextMoves({ fen, moves }: Props) {
  const exploredPositions = await queryClient<ExploredPositions>("/masters", {
    searchParams: { fen },
  });

  return (
    <section className="w-full grid grid-cols-3 py-6 gap-6">
      {exploredPositions.moves.map((move) => (
        <PositionCard
          currentUrlPathname={`/${moves.join("/")}`}
          key={move.san}
          currentFen={fen}
          {...move}
        />
      ))}
    </section>
  );
}
