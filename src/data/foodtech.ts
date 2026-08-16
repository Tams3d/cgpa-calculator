import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_FT: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
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
        title: "Differential Equation and Complex Variables",
        category: "BS",
        credits: 4,
      },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      { code: "PH23231", title: "Physics for Bioscience", category: "BS", credits: 4 },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
        category: "ES",
        credits: 4,
      },
      { code: "FT23201", title: "Food Chemistry", category: "PC", credits: 3 },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "FT23211", title: "Food Chemistry Laboratory", category: "PC", credits: 2 },
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
      { code: "FT23301", title: "Food Microbiology", category: "PC", credits: 3 },
      { code: "FT23302", title: "Biochemistry and Nutrition", category: "PC", credits: 3 },
      {
        code: "FT23303",
        title: "Thermodynamics for Food Technologists",
        category: "ES",
        credits: 3,
      },
      { code: "FT23304", title: "Food Process Calculations", category: "ES", credits: 3 },
      { code: "FT23305", title: "Food Additives", category: "PC", credits: 3 },
      { code: "FT23311", title: "Food Microbiology Laboratory", category: "PC", credits: 2 },
      {
        code: "FT23312",
        title: "Biochemistry and Nutrition Laboratory",
        category: "PC",
        credits: 2,
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
      { code: "FT23401", title: "Unit Operations in Food Industries", category: "PC", credits: 3 },
      {
        code: "FT23402",
        title: "Food Processing and Preservation Technology",
        category: "PC",
        credits: 3,
      },
      { code: "FT23403", title: "Fluid Mechanics in Food Processes", category: "ES", credits: 3 },
      {
        code: "FT23404",
        title: "Refrigeration and Cold Chain Management",
        category: "PC",
        credits: 3,
      },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      {
        code: "FT23411",
        title: "Unit Operations in Food Industries Laboratory",
        category: "PC",
        credits: 2,
      },
      {
        code: "FT23412",
        title: "Food Processing and Preservation Laboratory - I",
        category: "PC",
        credits: 2,
      },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "FT23501", title: "Food Analysis", category: "PC", credits: 3 },
      { code: "FT23502", title: "Food Process Engineering", category: "PC", credits: 3 },
      {
        code: "FT23503",
        title: "Heat and Mass Transfer in Food Processing",
        category: "PC",
        credits: 3,
      },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      {
        code: "GE23311",
        title: "Fundamentals of Management for Engineers",
        category: "HS",
        credits: 3,
      },
      { code: "FT23511", title: "Food Analysis Laboratory", category: "PC", credits: 2 },
      {
        code: "FT23512",
        title: "Food Processing and Preservation Laboratory - II",
        category: "PC",
        credits: 2,
      },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "FT23601", title: "Food Product Technology", category: "PC", credits: 3 },
      { code: "FT23602", title: "Food Packaging Technology", category: "PC", credits: 3 },
      {
        code: "FT23603",
        title: "Start-up Ecosystems for Food Technologists",
        category: "PC",
        credits: 3,
      },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      {
        code: "FT23611",
        title: "Food Packaging Technology Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "FT23612", title: "Food Product Technology Laboratory", category: "PC", credits: 2 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      {
        code: "FT23613",
        title: "Microfluidics Laboratory for Food Technology",
        category: "PC",
        credits: 1,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      {
        code: "FT23701",
        title: "Food Quality, Safety Standards and Certification",
        category: "PC",
        credits: 3,
      },
      { code: "FT23702", title: "Comprehension in Food Technologists", category: "PC", credits: 3 },
      { code: "FT23703", title: "Functional Foods and Nutraceuticals", category: "PC", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      {
        code: "FT23711",
        title: "Problem Solving using AIML for Food Technologists",
        category: "EEC",
        credits: 2,
      },
      { code: "FT23712", title: "Internship", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [{ code: "FT23811", title: "Project Work", category: "EEC", credits: 10 }],
  },
];

const FT_B2023: Curriculum = {
  id: "ft-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_FT,
};

const FT_B2024: Curriculum = {
  id: "ft-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_FT,
};

const FT_B2025: Curriculum = {
  id: "ft-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_FT,
};

export const FT: Department = {
  id: "ft",
  name: "B.Tech. Food Technology",
  curricula: [FT_B2023, FT_B2024, FT_B2025],
};
