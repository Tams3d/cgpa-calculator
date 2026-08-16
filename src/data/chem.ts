import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_CH: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "PH23111", title: "Physics for Chemical Engineering", category: "BS", credits: 3 },
      { code: "CY23132", title: "Chemistry for Technologists", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      {
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
        category: "ES",
        credits: 1,
      },
      {
        code: "MC23112",
        title: "Environmental Science and Engineering",
        category: "MC",
        credits: 0,
      },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
    ],
  },
  {
    number: 2,
    courses: [
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
        credits: 1,
      },
      {
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      {
        code: "CH23211",
        title: "Introduction to Chemical Engineering",
        category: "PC",
        credits: 3,
      },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
        category: "ES",
        credits: 4,
      },
      { code: "PH23233", title: "Material Science", category: "BS", credits: 4 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      {
        code: "GE23122",
        title: "Engineering Practices - Electrical and Electronics",
        category: "ES",
        credits: 1,
      },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
    ],
  },
  {
    number: 3,
    courses: [
      {
        code: "MA23311",
        title: "Transforms and Applied Partial Differential Equations",
        category: "BS",
        credits: 4,
      },
      { code: "CY23334", title: "Physical and Organic Chemistry", category: "ES", credits: 4 },
      { code: "CH23311", title: "Solid Mechanics", category: "ES", credits: 3 },
      { code: "CH23312", title: "Chemical Process Calculations", category: "PC", credits: 3 },
      { code: "CH23313", title: "Chemical Process Industries", category: "PC", credits: 3 },
      {
        code: "CH23331",
        title: "Fluid Mechanics for Chemical Engineers",
        category: "PC",
        credits: 4,
      },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "MA23431",
        title: "Probability, Statistics and Reliability",
        category: "BS",
        credits: 4,
      },
      { code: "CH23411", title: "Thermodynamics", category: "PC", credits: 3 },
      { code: "CH23412", title: "Heat Transfer", category: "PC", credits: 3 },
      { code: "CH23431", title: "Particle Science and Technology", category: "PC", credits: 4 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
      { code: "CH23421", title: "Technical Analysis Lab", category: "PC", credits: 2 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "CH23511", title: "Process Plant Utilities", category: "PC", credits: 3 },
      { code: "CH23512", title: "Chemical Engineering Thermodynamics", category: "PC", credits: 3 },
      { code: "CH23513", title: "Mass Transfer I", category: "PC", credits: 3 },
      { code: "CH23514", title: "Chemical Reaction Engineering - I", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
      { code: "CH23521", title: "Heat Transfer Lab", category: "PC", credits: 2 },
      { code: "EC23527", title: "Microfluidics Laboratory", category: "PE", credits: 1 },
      { code: "CH23522", title: "Industrial Training (2 Weeks)", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "CH23611", title: "Mass Transfer II", category: "PC", credits: 3 },
      { code: "CH23612", title: "Chemical Reaction Engineering - II", category: "PC", credits: 3 },
      { code: "CH23613", title: "Process Control and Instrumentation", category: "PC", credits: 3 },
      { code: "CH23614", title: "Process Equipment Design", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "CH23621", title: "Mass Transfer Lab", category: "PC", credits: 2 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "CH23711", title: "Transport Phenomena", category: "PC", credits: 3 },
      {
        code: "CH23712",
        title: "Comprehension in Chemical Engineering",
        category: "PC",
        credits: 3,
      },
      { code: "CH23713", title: "Process Engineering Economics", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "CH23721", title: "Chemical Reaction Engineering Lab", category: "PC", credits: 2 },
      { code: "CH23722", title: "Process Control Lab", category: "PC", credits: 2 },
      {
        code: "CH23723",
        title: "Artificial Intelligence and Machine Learning for Chemical Engineers",
        category: "PC",
        credits: 2,
      },
      { code: "CH23724", title: "CHEMSKILL", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "CH23811", title: "Project Work", category: "EEC", credits: 10 },
    ],
  },
];

const CH_B2023: Curriculum = {
  id: "chem-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_CH,
};

const CH_B2024: Curriculum = {
  id: "chem-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_CH,
};

const CH_B2025: Curriculum = {
  id: "chem-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_CH,
};

export const CH: Department = {
  id: "chem",
  name: "B.Tech. Chemical Engineering",
  curricula: [CH_B2023, CH_B2024, CH_B2025],
};
