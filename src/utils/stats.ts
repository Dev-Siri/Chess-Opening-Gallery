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

export function toMoveList<T>(arr: T[]): T[][] {
  let result: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      result.push([arr[i], arr[i + 1]]);
    } else {
      result.push([arr[i]]);
    }
  }
  return result;
}
