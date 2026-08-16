import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_CSBS: Semester[] = [
  {
    number: 1,
    courses: [
      {
        code: "HS23112",
        title: "Business Communication and Value Science - I",
        category: "HS",
        credits: 2,
      },
      { code: "MA23115", title: "Discrete Mathematics", category: "BS", credits: 4 },
      { code: "MA23114", title: "Probability and Calculus", category: "BS", credits: 4 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "CB23131", title: "Fundamentals of Computer Science", category: "PC", credits: 4 },
      {
        code: "EE23131",
        title: "Principles of Electrical Engineering",
        category: "ES",
        credits: 3,
      },
      { code: "PH23133", title: "Physics for Computing Science", category: "BS", credits: 4 },
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
      { code: "MA23211", title: "Linear Algebra", category: "BS", credits: 4 },
      { code: "BA23217", title: "Fundamentals of Economics", category: "MS", credits: 2 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "MA23231", title: "Statistical Modeling", category: "BS", credits: 4 },
      { code: "CB23231", title: "Data Structures and Algorithms", category: "PC", credits: 5 },
      { code: "EC23242", title: "Principles of Electronics", category: "ES", credits: 3 },
      { code: "CS23221", title: "Python Programming Lab", category: "PC", credits: 2 },
      {
        code: "HS23223",
        title: "Business Communication and Value Science - II",
        category: "HS",
        credits: 2,
      },
    ],
  },
  {
    number: 3,
    courses: [
      { code: "CB23311", title: "Formal Language and Automata Theory", category: "PC", credits: 3 },
      {
        code: "CB23312",
        title: "Computer Organization and Architecture",
        category: "PC",
        credits: 3,
      },
      { code: "CB23331", title: "Computational Statistics", category: "PC", credits: 4 },
      { code: "CB23332", title: "Software Engineering", category: "PC", credits: 4 },
      { code: "CB23333", title: "Database Technology", category: "PC", credits: 4 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
      },
      { code: "MC23313", title: "Environmental Sciences", category: "MC", credits: 0 },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "CB23411",
        title: "Introduction to Innovation, IP Management and Entrepreneurship",
        category: "EEC",
        credits: 3,
      },
      { code: "BA23412", title: "Fundamentals of Management", category: "MS", credits: 2 },
      { code: "CB23431", title: "Operating System Concepts", category: "PC", credits: 4 },
      { code: "CB23432", title: "Software Design with UML", category: "PC", credits: 3 },
      { code: "CB23433", title: "Analysis of Algorithms and Design", category: "PC", credits: 4 },
      { code: "MA23437", title: "Optimization Techniques", category: "BS", credits: 4 },
      {
        code: "HS23421",
        title: "Business Communication and Value Science - III",
        category: "HS",
        credits: 2,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "BA23511", title: "Principles of Financial Management", category: "MS", credits: 2 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "CB23531", title: "Computer Network Technology", category: "PC", credits: 4 },
      { code: "CB23532", title: "Artificial Intelligence", category: "PC", credits: 4 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 4 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "PC", credits: 2 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "BA23611", title: "Financial and Cost Accounting", category: "MS", credits: 2 },
      { code: "BA23612", title: "Business Strategy", category: "MS", credits: 2 },
      { code: "CB23631", title: "Machine Learning", category: "PC", credits: 4 },
      {
        code: "CB23632",
        title: "Cloud, Microservices and Application",
        category: "PC",
        credits: 4,
      },
      {
        code: "CB23633",
        title: "Usability Design of Software Applications",
        category: "PC",
        credits: 3,
      },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      {
        code: "HS23621",
        title: "Business Communication and Value Science - IV",
        category: "HS",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "CB23622", title: "Internship", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "CB23731", title: "Data Visualization Techniques", category: "PC", credits: 3 },
      { code: "CB23732", title: "IT Project Management", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 4 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "CB23721", title: "Project Evaluation I", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 4 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "CB23822", title: "Project Evaluation II", category: "EEC", credits: 6 },
    ],
  },
];

const CSBS_B2023: Curriculum = {
  id: "csbs-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_CSBS,
};

const CSBS_B2024: Curriculum = {
  id: "csbs-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_CSBS,
};

const CSBS_B2025: Curriculum = {
  id: "csbs-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_CSBS,
};

export const CSBS: Department = {
  id: "csbs",
  name: "B.Tech. Computer Science and Business Systems",
  curricula: [CSBS_B2023, CSBS_B2024, CSBS_B2025],
};
