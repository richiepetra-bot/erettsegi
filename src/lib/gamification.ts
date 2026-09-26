const XP_PER_LEVEL = 100;

export function levelForXp(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export function xpProgressInLevel(xp: number): { current: number; needed: number } {
  return { current: xp % XP_PER_LEVEL, needed: XP_PER_LEVEL };
}

export function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const target = Date.parse(`${dateStr}T00:00:00Z`);
  return Math.round((target - todayUtc) / 86_400_000);
}

export function formatCountdown(days: number | null): string {
  if (days === null) return "nincs dátum";
  if (days < 0) return "lezajlott";
  if (days === 0) return "ma van!";
  if (days === 1) return "holnap";
  return `${days} nap múlva`;
}

export const EXAM_TYPE_LABELS: Record<string, string> = {
  erettsegi: "Érettségi",
  elorehozott_erettsegi: "Előrehozott érettségi",
  sat: "SAT",
  act: "ACT",
};

export const LEVEL_LABELS: Record<string, string> = {
  kozep: "közép",
  emelt: "emelt",
};
