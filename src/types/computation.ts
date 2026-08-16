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

/** A resolved past semester ready for the SGPA shortcut input. */
export interface PastSemesterView {
  number: number;
  credits: number;
  value: string;
}
