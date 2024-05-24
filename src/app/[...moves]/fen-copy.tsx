"use client";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { IoIosCopy } from "@react-icons/all-files/io/IoIosCopy";
import { useState } from "react";

interface Props {
  fen: string;
}

export default function FenCopy({ fen }: Props) {
  const [copyIcon, setCopyIcon] = useState(<IoIosCopy />);

  function handleCopy() {
    navigator.clipboard.writeText(fen);

    setTimeout(() => setCopyIcon(<IoIosCopy />), 2000);
    setCopyIcon(<FaCheck color="green" />);
  }

  return (
    <div className="flex bg-[#1c1c1c] w-full rounded-md">
      <p className="text-gray-300 p-3">FEN</p>
      <input
        type="text"
        readOnly
        className="bg-[#131313] w-5/6 outline-none px-4 border-b border-b-gray-600"
        value={fen}
      />
      <button
        type="button"
        className="flex w-1/6 items-center justify-center text-gray-300"
        title="Copy FEN"
        onClick={handleCopy}
      >
        {copyIcon}
      </button>
    </div>
  );
}
