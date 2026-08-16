export interface SemesterEntry {
  /** Per-subject grade labels entered subject-by-subject. */
  grades?: (string | null)[];
  /** Overall SGPA typed in for a past semester. */
  sgpa?: string | null;
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
