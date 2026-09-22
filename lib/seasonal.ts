// One campaign window, in Kelowna time. Midnight November 1 is still PDT.
// Keeping an explicit end date prevents decorations returning next year.
export const halloweenSeason = {
  startsAt: Date.parse("2026-09-21T00:00:00-07:00"),
  endsAt: Date.parse("2026-11-01T00:00:00-07:00"),
} as const;

export function isHalloweenSeasonActive(now: number) {
  return now >= halloweenSeason.startsAt && now < halloweenSeason.endsAt;
}
