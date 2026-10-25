/** Formats a millisecond duration as a compact "Xd Yh", "Xh Ym", "Xm", or "Xs" string. */
export function formatDuration(ms: number): string {
  // A waitlist can fill inside a single poll, so keep sub-minute times legible.
  if (ms < 60_000) return `${Math.round(ms / 1000)}s`;
  const totalMinutes = Math.round(ms / 60_000);
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}
