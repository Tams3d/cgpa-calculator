export interface Grade {
  label: string;
  points: number;
  description: string;
  /** Marks this grade as non-credit (e.g. withheld/audit) so it never counts toward CGPA. */
  exempt?: boolean;
}

export interface GradeScale {
  id: string;
  regulation: string;
  name: string;
  grades: Grade[];
}

export interface Course {
  code: string;
  title: string;
  category: string;
  credits: number;
  /** Non-credit courses (e.g. mandatory audit subjects) are excluded from CGPA math. */
  excludeFromCgpa?: boolean;
}

export interface Semester {
  number: number;
  courses: Course[];
}

export interface Curriculum {
  id: string;
  regulation: string;
  /** Admission year tag, e.g. `B2025`. Used to estimate the current semester. */
  batch: string;
  batchLabel: string;
  gradeScaleId: string;
  /** Which published formula converts CGPA to a percentage. Defaults to the standard Anna University formula. */
  percentageFormula?: "cgpa-x10" | "cgpa-minus-0.75-x10";
  /**
   * How backlog (arrear) grades are treated in the CGPA math.
   * `zero` counts a failed course as 0 points in its own semester until cleared (official Anna University style).
   * `exclude` drops it from the totals entirely until cleared, then adds it back. Defaults to `zero`.
   */
  arrearPolicy?: "zero" | "exclude";
  semesters: Semester[];
}

export interface Department {
  id: string;
  name: string;
  curricula: Curriculum[];
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  /** Whether full curriculum data is live. Unavailable colleges show as "Coming soon" and are disabled. */
  available?: boolean;
  departments: Department[];
}
