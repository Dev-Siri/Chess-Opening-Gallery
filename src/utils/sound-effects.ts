"use client";
import { type Sound, sounds } from "@/constants/sounds";

function loadSoundEffects(): Record<Sound, HTMLAudioElement> {
  const mappedSounds = {} as Record<Sound, HTMLAudioElement>;

  for (const sound of sounds) {
    mappedSounds[sound] = new Audio(`/sfx/${sound}.mp3`);
  }

  return mappedSounds;
}

export default async function playSoundEffect(move: string, moveIndex: number) {
  const soundEffects = loadSoundEffects();

  setTimeout(async () => {
    if (move.includes("#")) {
      if (move.includes("x")) await soundEffects.capture.play(); // Capture sound if it's a capture checkmate
      return soundEffects.checkmate.play();
    }

    if (move.includes("+")) return soundEffects.check.play();

    if (move.includes("x")) return soundEffects.capture.play();

    if (move === "O-O" || move === "O-O-O") {
      if (move.includes("+")) return soundEffects.check.play();
      return soundEffects.castle.play();
    }

    if (moveIndex % 2 === 0) {
      return soundEffects["move-opponent"].play();
    } else {
      return soundEffects["move-self"].play();
    }
  }, 500);
}
