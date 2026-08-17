import type { Semester } from "@/types/curriculum";

/** A single subject as it appears in the calculator, decorated with its resolved grade data. */
export interface CourseGradeRow {
  code: string;
  title: string;
  credits: number;
  category: string;
  gradeLabel: string | null;
  gradePoints: number | null;
  /** The subject's position within the source semester, used to write grades back to storage. */
  sourceIndex: number;
  /** False for audit/withheld courses, or courses whose credits don't count toward CGPA. */
  counted: boolean;
  /** The semester this subject belongs to. */
  homeSemester: number;
}

/** The resolved, per-semester result used by both the course rows and the SGPA shortcut. */
export interface SemesterComputed {
  semester: Semester;
  canGrade: boolean;
  creditsRegistered: number;
  creditsCompleted: number;
  points: number;
  sgpa: number | null;
  rows: CourseGradeRow[];
}

/** Aggregate running totals across every semester, the source of the CGPA figure. */
export interface TotalsComputed {
  creditsRegistered: number;
  creditsCompleted: number;
  points: number;
  cgpa: number | null;
}

/** A resolved past semester ready for the SGPA / subject-wise entry cards. */
export interface PastSemesterView {
  computed: SemesterComputed;
  sgpaValue: string;
  mode: "sgpa" | "subject";
  /** Arrears cleared in this semester. */
  clearedArrears: ArrearRowView[];
  /** Arrears carried from earlier semesters, still pending a clearing grade. */
  pendingArrears: ArrearRowView[];
  /** Arrears manually recorded from this semester via SGPA mode, still removable. */
  addedArrears: ArrearRowView[];
  /** This semester's subjects that can still be recorded as arrears from SGPA mode. */
  arrearAddOptions: ArrearOption[];
}

/** A subject graded as an arrear, decorated with its clear status. */
export interface ArrearRowView {
  code: string;
  title: string;
  credits: number;
  /** The semester the failing grade was recorded in. */
  homeSemester: number;
  /** The failing grade (U/SA/AB), or null when entered manually from SGPA mode. */
  grade: string | null;
  /** The semester it was cleared in, or null while still pending. */
  clearedSemester: number | null;
  /** The passing grade earned when cleared, when applicable. */
  clearedGrade: string | null;
}

/** A past subject available for manual clearance from an SGPA-mode semester. */
export interface ArrearOption {
  code: string;
  title: string;
  credits: number;
  /** The semester the subject belongs to. */
  homeSemester: number;
}
