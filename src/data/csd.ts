import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23113", title: "Mathematics for Design", category: "BS", credits: 4 },
      { code: "CD23111", title: "Design Drawing and Sketching", category: "PC", credits: 3 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "GE23131", title: "Programming using C", category: "ES", credits: 4 },
      { code: "PH23132", title: "Physics for Information Science", category: "BS", credits: 4 },
      {
        code: "GE23123",
        title: "Engineering Practices - Electrical, Electronics and Computer Systems",
        category: "ES",
        credits: 2,
      },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
    ],
  },
  {
    number: 2,
    courses: [
      {
        code: "MA23214",
        title: "Probability and Inferential Statistics",
        category: "BS",
        credits: 4,
      },
      { code: "CD23211", title: "Foundation in Digital Storytelling", category: "PC", credits: 3 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "CD23231", title: "Visual Communication Foundations", category: "PC", credits: 4 },
      {
        code: "IT23231",
        title: "Digital Principles and Computer Architecture",
        category: "PC",
        credits: 4,
      },
      { code: "CS23231", title: "Data Structures", category: "PC", credits: 5 },
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
        credits: 1,
      },
      {
        code: "MC23112",
        title: "Environmental Science and Engineering",
        category: "MC",
        credits: 0,
      },
    ],
  },
  {
    number: 3,
    courses: [
      { code: "MA23313", title: "Discrete Mathematics for AI", category: "BS", credits: 4 },
      { code: "CD23331", title: "Design Processes and Perspectives", category: "PC", credits: 4 },
      { code: "CS23331", title: "Design and Analysis of Algorithms", category: "PC", credits: 4 },
      { code: "CD23332", title: "UI and UX Design", category: "PC", credits: 4 },
      { code: "CS23332", title: "Database Management Systems", category: "PC", credits: 5 },
      { code: "CD23321", title: "Python Programming for Design", category: "PC", credits: 3 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      {
        code: "MA23433",
        title: "Mathematical Modelling and Simulation",
        category: "BS",
        credits: 4,
      },
      {
        code: "AI23231",
        title: "Principles of Artificial Intelligence",
        category: "PC",
        credits: 4,
      },
      { code: "CS23432", title: "Software Construction", category: "PC", credits: 4 },
      { code: "CS23532", title: "Computer Networks", category: "PC", credits: 4 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
      { code: "CD23421", title: "Industry Internship (2/4 weeks)", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "CD23531", title: "3D Modelling and Texturing", category: "PC", credits: 3 },
      { code: "CS23431", title: "Operating Systems", category: "PC", credits: 5 },
      { code: "CS23531", title: "Web Programming", category: "PC", credits: 4 },
      { code: "GE23627", title: "Design Thinking for Innovation", category: "EEC", credits: 2 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 4 },
      { code: "CD23631", title: "Game Design and Development", category: "PC", credits: 4 },
      { code: "AI23331", title: "Fundamentals of Machine Learning", category: "PC", credits: 4 },
      { code: "CD23632", title: "3D Rigging and Animation", category: "PC", credits: 4 },
      {
        code: "CD23621",
        title: "Mobile Application Design and Development Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23622", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 4 },
      { code: "CD23731", title: "Film Making and Radio Podcasting", category: "PC", credits: 3 },
      { code: "CD23721", title: "Visual Effects", category: "PC", credits: 3 },
      { code: "CD23722", title: "Capstone Project Phase 1", category: "EEC", credits: 4 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "CD23821", title: "Capstone Project Phase 2", category: "EEC", credits: 6 },
    ],
  },
];

const CSD_B2023: Curriculum = {
  id: "csd-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM,
};

const CSD_B2024: Curriculum = {
  id: "csd-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM,
};

const CSD_B2025: Curriculum = {
  id: "csd-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM,
};

const CSD_B2026: Curriculum = {
  id: "csd-b2026",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2026",
  batchLabel: "Admitted 2026 (2026 - 2030)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM,
};

export const CSD: Department = {
  id: "csd",
  name: "B.E. Computer Science and Design",
  curricula: [CSD_B2023, CSD_B2024, CSD_B2025, CSD_B2026],
};
