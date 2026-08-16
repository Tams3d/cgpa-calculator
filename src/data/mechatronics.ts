import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_MCT: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "EE23132", title: "Basic Electrical Engineering", category: "ES", credits: 4 },
      {
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
        category: "ES",
        credits: 1,
      },
      {
        code: "GE23122",
        title: "Engineering Practices - Electrical and Electronics",
        category: "ES",
        credits: 1,
      },
      { code: "MT23121", title: "Computer Aided Drawing Laboratory", category: "ES", credits: 1 },
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
      {
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "CY23131",
        title: "Chemistry for Electronics Engineering",
        category: "BS",
        credits: 4,
      },
      { code: "PH23131", title: "Physics of Materials", category: "BS", credits: 4 },
      { code: "GE23131", title: "Programming Using C", category: "ES", credits: 4 },
      { code: "MT23131", title: "Elements of Mechatronics", category: "ES", credits: 3 },
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
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
      {
        code: "MA23311",
        title: "Transforms and Applied Partial Differential Equations",
        category: "BS",
        credits: 4,
      },
      { code: "MT23331", title: "Analog Devices and Drives", category: "PC", credits: 3 },
      { code: "MT23332", title: "Digital System Design", category: "PC", credits: 3 },
      { code: "MT23333", title: "Manufacturing Technology", category: "PC", credits: 4 },
      { code: "MT23334", title: "Mechanics of Solids", category: "PC", credits: 4 },
      { code: "CS23336", title: "Introduction to Python Programming", category: "ES", credits: 3 },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "MT23411",
        title: "Fluid Mechanics and Thermal Sciences",
        category: "PC",
        credits: 4,
      },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "MA23432", title: "Statistics and Numerical Methods", category: "BS", credits: 4 },
      {
        code: "MT23431",
        title: "Microcontrollers and Embedded Systems",
        category: "PC",
        credits: 4,
      },
      { code: "MT23432", title: "Sensors and Instrumentation", category: "PC", credits: 4 },
      { code: "MT23433", title: "System Dynamics and Control", category: "PC", credits: 4 },
      {
        code: "MT23421",
        title: "Fluid Mechanics and Heat Transfer Laboratory",
        category: "PC",
        credits: 1,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      {
        code: "GE23311",
        title: "Fundamentals of Management for Engineers",
        category: "HS",
        credits: 3,
      },
      { code: "MT23511", title: "Semiconductor Manufacturing", category: "PC", credits: 3 },
      { code: "MT23512", title: "Industrial Electronics", category: "PC", credits: 3 },
      { code: "MT23513", title: "Basic Engineering Research Methods", category: "PC", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      { code: "MT23522", title: "Industrial Electronics Laboratory", category: "PC", credits: 1 },
      { code: "MT23523", title: "Internship", category: "EEC", credits: 1 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "MT23611", title: "Fundamentals of Machine Design", category: "PC", credits: 3 },
      {
        code: "MT23612",
        title: "Ethics in Robotics and Artificial Intelligence",
        category: "PC",
        credits: 3,
      },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "MT23631", title: "Industrial Robotics", category: "PC", credits: 4 },
      { code: "MT23632", title: "Applied Hydraulics and Pneumatics", category: "PC", credits: 4 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "MT23711", title: "Industrial Automation", category: "PC", credits: 3 },
      { code: "MT23712", title: "Machine Vision", category: "PC", credits: 4 },
      {
        code: "MT23721",
        title: "Computer Aided Engineering Laboratory",
        category: "PC",
        credits: 1,
      },
      { code: "MT23722", title: "Industrial Automation Laboratory", category: "PC", credits: 1 },
      {
        code: "MT23723",
        title: "Mechatronics Engineering Problem Solving Using AI, ML and DL",
        category: "PC",
        credits: 2,
      },
      { code: "MT23724", title: "Project Work Phase I", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "MT23821", title: "Project Work Phase II", category: "EEC", credits: 8 },
    ],
  },
];

const MCT_B2023: Curriculum = {
  id: "mct-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_MCT,
};

const MCT_B2024: Curriculum = {
  id: "mct-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_MCT,
};

const MCT_B2025: Curriculum = {
  id: "mct-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_MCT,
};

export const MCT: Department = {
  id: "mct",
  name: "B.E. Mechatronics Engineering",
  curricula: [MCT_B2023, MCT_B2024, MCT_B2025],
};
