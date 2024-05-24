"use client";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();

  return (
    <input
      placeholder="Search Opening Moves"
      className="bg-black w-full p-4 outline-none rounded-md border-2 border-gray-800"
      onChange={(e) => router.push(`/?q=${e.target.value}`)}
    />
  );
}
