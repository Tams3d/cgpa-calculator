/** How a semester's grades are entered: an overall SGPA, or subject by subject. */
export type SemesterMode = "sgpa" | "subject";

/** An arrear cleared in a specific semester, with the passing grade earned. */
export interface ClearedArrear {
  subjectId: string;
  grade: string;
}

/** An arrear subject recorded from an SGPA-mode semester, pending a clearing grade. */
export interface ArrearSubject {
  subjectId: string;
}

export interface SemesterEntry {
  /** Per-subject grade labels entered subject-by-subject. */
  grades?: (string | null)[];
  /** Overall SGPA typed in for a semester. */
  sgpa?: string | null;
  /** Entry mode chosen for this semester; defaults based on current/past. */
  mode?: SemesterMode;
  /** Arrears recorded from this semester (SGPA mode), pending a clearing grade. */
  arrears?: ArrearSubject[];
  /** Arrears cleared in this semester, with the passing grade earned. */
  clearedArrears?: ClearedArrear[];
}

/** The full serialized app state stored in localStorage. */
export interface PersistedState {
  collegeId?: string;
  deptId: string;
  curriculumId: string;
  currentSem: number;
  /** Map of curriculum id -> semester number -> entry. */
  byCurriculum: Record<string, Record<number, SemesterEntry>>;
}
