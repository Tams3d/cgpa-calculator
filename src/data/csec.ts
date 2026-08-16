import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_CSEC: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23111", title: "Linear Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "GE23131", title: "Programming using C", category: "ES", credits: 4 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      { code: "PH23132", title: "Physics for Information Science", category: "BS", credits: 4 },
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
      { code: "MA23213", title: "Discrete Mathematical Structures", category: "BS", credits: 4 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "EC23232", title: "Digital Logic and Microprocessor", category: "ES", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "CS23231", title: "Data Structures", category: "PC", credits: 5 },
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
        credits: 1,
      },
      {
        code: "GE23123",
        title: "Engineering Practices - Electrical, Electronics and Computer Systems",
        category: "ES",
        credits: 2,
      },
      { code: "CS23221", title: "Python Programming Lab", category: "PC", credits: 2 },
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
      { code: "MA23312", title: "Fourier Series and Number Theory", category: "BS", credits: 4 },
      { code: "CS23332", title: "Database Management Systems", category: "PC", credits: 5 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
      },
      { code: "CS23532", title: "Computer Networks", category: "PC", credits: 5 },
      { code: "CR23331", title: "Cryptography", category: "PC", credits: 4 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      {
        code: "MA23435",
        title: "Probability, Statistics and Simulation",
        category: "BS",
        credits: 4,
      },
      { code: "CS23431", title: "Operating Systems", category: "PC", credits: 5 },
      { code: "CR23431", title: "Network Security", category: "PC", credits: 4 },
      { code: "CS23331", title: "Design and Analysis of Algorithms", category: "PC", credits: 4 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "CS23531", title: "Web Programming", category: "PC", credits: 4 },
      {
        code: "CS23533",
        title: "Foundations of Artificial Intelligence",
        category: "PC",
        credits: 4,
      },
      { code: "CR23531", title: "Ethical Hacking", category: "PC", credits: 4 },
      { code: "CR23532", title: "Cyber and Digital Forensics", category: "PC", credits: 4 },
      { code: "CS23432", title: "Software Construction", category: "PC", credits: 4 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
      { code: "CR23421", title: "Internship", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "CR23611", title: "Cyber Laws and Security Policies", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "CR23631", title: "Malware Analysis", category: "PC", credits: 4 },
      { code: "CR23632", title: "Blockchain Technologies", category: "PC", credits: 4 },
      { code: "AI23331", title: "Fundamentals of Machine Learning", category: "PC", credits: 4 },
      { code: "GE23627", title: "Design Thinking for Innovation", category: "EEC", credits: 2 },
      {
        code: "CS23621",
        title: "Mobile Application Development Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      {
        code: "CR23731",
        title: "Blockchain Development in Hyperledger Fabric",
        category: "PC",
        credits: 3,
      },
      { code: "CR23721", title: "Project Phase I", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "CR23821", title: "Project Phase II", category: "EEC", credits: 4 },
    ],
  },
];

const CSEC_B2023: Curriculum = {
  id: "csec-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_CSEC,
};

const CSEC_B2024: Curriculum = {
  id: "csec-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_CSEC,
};

const CSEC_B2025: Curriculum = {
  id: "csec-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_CSEC,
};

export const CSEC: Department = {
  id: "csec",
  name: "B.E. Computer Science and Engineering (Cyber Security)",
  curricula: [CSEC_B2023, CSEC_B2024, CSEC_B2025],
};
