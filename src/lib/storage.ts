import type { PersistedState, SemesterEntry } from "@/types/storage";

const STORAGE_KEY = "cgpa:v2";

function normalizeEntries(records: unknown): Record<string, Record<number, SemesterEntry>> {
  const out: Record<string, Record<number, SemesterEntry>> = {};
  if (!records || typeof records !== "object") return out;
  for (const [curId, semMap] of Object.entries(records as Record<string, unknown>)) {
    if (!semMap || typeof semMap !== "object") continue;
    const bySem: Record<number, SemesterEntry> = {};
    for (const [semKey, value] of Object.entries(semMap as Record<string, unknown>)) {
      const n = Number(semKey);
      if (!Number.isInteger(n)) continue;
      if (Array.isArray(value)) {
        bySem[n] = { grades: value as (string | null)[] };
      } else if (value && typeof value === "object") {
        bySem[n] = value as SemesterEntry;
      }
    }
    out[curId] = bySem;
  }
  return out;
}

interface RawState {
  collegeId?: unknown;
  deptId?: unknown;
  curriculumId?: unknown;
  currentSem?: unknown;
  byCurriculum?: unknown;
}

export function loadState(): PersistedState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as RawState;
    if (typeof parsed.deptId !== "string") return null;
    return {
      ...(typeof parsed.collegeId === "string" ? { collegeId: parsed.collegeId } : {}),
      deptId: parsed.deptId,
      curriculumId: typeof parsed.curriculumId === "string" ? parsed.curriculumId : "",
      currentSem: typeof parsed.currentSem === "number" ? parsed.currentSem : 1,
      byCurriculum: normalizeEntries(parsed.byCurriculum),
    };
  } catch {
    return null;
  }
}

export function saveState(state: PersistedState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private browsing / quota exceeded - app stays usable in-memory.
  }
}

export type ThemePreference = "dark" | "light" | "system";

const THEME_KEY = "cgpa-theme";

export function loadTheme(): ThemePreference | null {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light" || stored === "system") return stored;
  } catch {
    return null;
  }
  return null;
}

export function saveTheme(theme: ThemePreference): void {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Private browsing / quota exceeded - keep in-memory theme.
  }
}
