"use client";
import { useEffect } from "react";

import playSoundEffect from "@/utils/sound-effects";

interface Props {
  move: string;
  moveIndex: number;
}

export default function SoundEffectPlayer({ move, moveIndex }: Props) {
  useEffect(() => {
    setTimeout(() => playSoundEffect(move, moveIndex), 500);
  }, [move, moveIndex]);

  return null;
}
