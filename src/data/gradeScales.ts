import type { GradeScale } from "@/types/curriculum";

export const GRADE_SCALES: Record<string, GradeScale> = {
  r2023: {
    id: "r2023",
    regulation: "Regulation 2023",
    name: "O \u00B7 A+ \u00B7 A \u00B7 B+ \u00B7 B \u00B7 C \u00B7 U \u00B7 AB",
    grades: [
      { label: "O", points: 10, description: "Outstanding" },
      { label: "A+", points: 9, description: "Excellent" },
      { label: "A", points: 8, description: "Very Good" },
      { label: "B+", points: 7, description: "Good" },
      { label: "B", points: 6, description: "Average" },
      { label: "C", points: 5, description: "Satisfactory" },
      { label: "U", points: 0, description: "Re-appearance (arrear)" },
      { label: "SA", points: 0, description: "Shortage of Attendance" },
      { label: "AB", points: 0, description: "Absent" },
      { label: "WD", points: 0, description: "Withdrawal", exempt: true },
    ],
  },
  r2025: {
    id: "r2025",
    regulation: "Regulation 2025",
    name: "S \u00B7 A+ \u00B7 A \u00B7 B+ \u00B7 B \u00B7 C+ \u00B7 C \u00B7 U \u00B7 AB",
    grades: [
      { label: "S", points: 10, description: "Outstanding" },
      { label: "A+", points: 9, description: "Excellent" },
      { label: "A", points: 8, description: "Very Good" },
      { label: "B+", points: 7, description: "Good" },
      { label: "B", points: 6.5, description: "Above Average" },
      { label: "C+", points: 6, description: "Average" },
      { label: "C", points: 5, description: "Satisfactory" },
      { label: "U", points: 0, description: "Re-appearance (arrear)" },
      { label: "SA", points: 0, description: "Shortage of Attendance" },
      { label: "AB", points: 0, description: "Absent" },
      { label: "WC", points: 0, description: "Withdrawal of Course", exempt: true },
    ],
  },
};
