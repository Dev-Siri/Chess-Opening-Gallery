"use client";
import { FaFileUpload } from "@react-icons/all-files/fa/FaFileUpload";
import { MdError } from "@react-icons/all-files/md/MdError";
import { type Dispatch, type SetStateAction, useState } from "react";

import { Chess } from "chess.js";

interface Props {
  setPosition: Dispatch<SetStateAction<Chess>>;
}

export default function PGNLoader({ setPosition }: Props) {
  const [pgnString, setPgnString] = useState("");
  const [pgnFieldVisible, setPgnFieldVisible] = useState(false);
  const [isPgnInvalid, setIsPgnInvalid] = useState(false);

  function loadPgn() {
    try {
      const position = new Chess();

      position.loadPgn(pgnString);

      setPgnFieldVisible(false);
      setPosition(position);
    } catch {
      setIsPgnInvalid(true);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-gray-800 rounded-full p-2 hover:opacity-95 duration-200"
        onClick={() =>
          setPgnFieldVisible((prevPgnFieldVisible) => !prevPgnFieldVisible)
        }
      >
        <FaFileUpload height={10} className="text-gray-400" />
      </button>
      {pgnFieldVisible && (
        <div className="absolute mt-2">
          {isPgnInvalid && (
            <div className="flex absolute items-center gap-1 bottom-0 right-0 p-4 text-red-500">
              <MdError height={30} />
              <p className="text-sm">Invalid PGN</p>
            </div>
          )}
          <button
            type="button"
            className="flex absolute items-center gap-1 bottom-0 m-2 mb-3 rounded-md p-3 duration-200 hover:opacity-95 bg-gray-800"
            onClick={loadPgn}
          >
            Load
          </button>
          <textarea
            placeholder="Game PGN"
            className="bg-[#131313] p-4 resize-none rounded-md border-gray-600 border font-mono outline-none"
            rows={10}
            cols={40}
            value={pgnString}
            onChange={(e) => setPgnString(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
