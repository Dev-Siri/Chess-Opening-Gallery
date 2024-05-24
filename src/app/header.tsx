"use client";
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import ChangeTheme from "./change-theme";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="fixed flex items-center gap-2 w-screen z-50 bg-[#1f1f1f] p-3">
      <ChangeTheme />
      {pathname !== "/" ? (
        <div className="flex gap-2">
          <button
            type="button"
            className="flex gap-2"
            onClick={() => router.back()}
          >
            <IoMdArrowBack size={26} />
          </button>
          <p className="text-xl font-semibold">{pathname.split("/").at(-1)}</p>
        </div>
      ) : (
        <Link href="/" className="text-xl font-semibold">
          ChessDB
        </Link>
      )}
    </header>
  );
}
