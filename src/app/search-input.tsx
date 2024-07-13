"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";

export default function SearchInput() {
  const [moveQuery, setMoveQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const searchDebounced = setTimeout(
      () => router.push(`/?q=${moveQuery}`),
      500
    );

    return () => clearTimeout(searchDebounced);
  }, [router, moveQuery]);

  return (
    <div className="flex items-center bg-black w-full p-4 rounded-full border-2 border-gray-800">
      <IoSearchOutline height={100} width={100} />
      <input
        placeholder="Search Opening Moves"
        className="bg-transparent outline-none w-full ml-2"
        value={moveQuery}
        onChange={(e) => setMoveQuery(e.target.value)}
      />
    </div>
  );
}
