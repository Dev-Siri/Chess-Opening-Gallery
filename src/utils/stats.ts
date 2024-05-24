export function calculateWinrateForWhite(whiteWins: number, blackWins: number) {
  const total = whiteWins + blackWins;
  const winrateForWhite = Math.round((whiteWins / total) * 100);

  return winrateForWhite;
}

export function calculateDraws(
  whiteWins: number,
  blackWins: number,
  draws: number
) {
  const total = whiteWins + blackWins + draws;
  const drawPercentage = Math.round((draws / total) * 100);

  return drawPercentage;
}
