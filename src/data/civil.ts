import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_CIVIL: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "CE23111", title: "Building Materials", category: "PC", credits: 3 },
      {
        code: "CE23112",
        title: "Engineering Drawing for Civil Engineers",
        category: "PC",
        credits: 4,
      },
      { code: "PH23131", title: "Physics of Materials", category: "BS", credits: 4 },
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
    ],
  },
  {
    number: 2,
    courses: [
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      { code: "CY23233", title: "Engineering Chemistry", category: "BS", credits: 4 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      { code: "GE23231", title: "Programming Using Python", category: "ES", credits: 3 },
      {
        code: "CE23221",
        title: "Computer Aided Building Drawing for Civil Engineers",
        category: "PC",
        credits: 2,
      },
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
        credits: 1,
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
    ],
  },
  {
    number: 3,
    courses: [
      { code: "CE23311", title: "Strength of Materials I", category: "PC", credits: 3 },
      { code: "CE23312", title: "Fluid Mechanics", category: "PC", credits: 3 },
      {
        code: "CE23313",
        title: "Construction Techniques, Equipment and Practice",
        category: "PC",
        credits: 3,
      },
      { code: "CE23331", title: "Surveying", category: "PC", credits: 4 },
      { code: "MA23331", title: "Transforms and Statistics", category: "BS", credits: 4 },
      { code: "CE23321", title: "Construction Materials Laboratory", category: "PC", credits: 2 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "CE23411", title: "Strength of Materials II", category: "PC", credits: 3 },
      {
        code: "CE23412",
        title: "Hydraulics and Irrigation Structures",
        category: "PC",
        credits: 3,
      },
      { code: "CE23413", title: "Water Supply Engineering", category: "PC", credits: 3 },
      { code: "CE23414", title: "Highway and Railway Engineering", category: "PC", credits: 3 },
      { code: "CE23431", title: "Soil Mechanics", category: "PC", credits: 4 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      {
        code: "CE23421",
        title: "Strength of Materials and Hydraulic Engineering Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      {
        code: "CE23511",
        title: "Design of Reinforced Concrete Elements",
        category: "PC",
        credits: 4,
      },
      { code: "CE23512", title: "Foundation Engineering", category: "PC", credits: 3 },
      { code: "CE23513", title: "Waste Water Engineering", category: "PC", credits: 3 },
      { code: "CE23531", title: "Structural Analysis", category: "PC", credits: 4 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      {
        code: "CE23521",
        title: "Water and Waste Water Analysis Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "CE23522", title: "Survey Camp", category: "PC", credits: 1 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "CE23611", title: "Design of Steel Structures", category: "PC", credits: 4 },
      {
        code: "CE23612",
        title: "Construction, Planning, Scheduling and Management",
        category: "PC",
        credits: 3,
      },
      {
        code: "CE23613",
        title: "Structural Dynamics and Earthquake Engineering",
        category: "PC",
        credits: 3,
      },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "CE23631", title: "Structural Design and Drawing", category: "PC", credits: 4 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      {
        code: "CE23711",
        title: "Estimation, Costing and Valuation Engineering",
        category: "PC",
        credits: 3,
      },
      { code: "CE23712", title: "Hydrology", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "CE23721", title: "Building Information Modelling", category: "PC", credits: 2 },
      { code: "CE23722", title: "Design Project", category: "EEC", credits: 2 },
      {
        code: "CE23723",
        title: "Artificial Intelligence and Machine Learning for Civil Engineers",
        category: "BS",
        credits: 2,
      },
      { code: "CE23724", title: "Internship", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "CE23821", title: "Project Work", category: "EEC", credits: 6 },
    ],
  },
];

const CIVIL_B2023: Curriculum = {
  id: "civil-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_CIVIL,
};

const CIVIL_B2024: Curriculum = {
  id: "civil-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_CIVIL,
};

const CIVIL_B2025: Curriculum = {
  id: "civil-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_CIVIL,
};

export const CIVIL: Department = {
  id: "civil",
  name: "B.E. Civil Engineering",
  curricula: [CIVIL_B2023, CIVIL_B2024, CIVIL_B2025],
};
