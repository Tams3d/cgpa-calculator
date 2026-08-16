import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_EEE: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23111", title: "Linear Algebra and Calculus", category: "BS", credits: 4 },
      {
        code: "CY23131",
        title: "Chemistry for Electronics Engineering",
        category: "BS",
        credits: 4,
      },
      { code: "GE23131", title: "Programming using C", category: "ES", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
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
      { code: "PH23232", title: "Physics for Electronics Engineering", category: "BS", credits: 4 },
      { code: "CS23231", title: "Data Structures", category: "ES", credits: 5 },
      { code: "EE23212", title: "Electric Circuits", category: "PC", credits: 3 },
      { code: "EE23221", title: "Electric Circuits Laboratory", category: "PC", credits: 1 },
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
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
    ],
  },
  {
    number: 3,
    courses: [
      { code: "MA23312", title: "Fourier Series and Number Theory", category: "BS", credits: 4 },
      { code: "EE23311", title: "Electromagnetic Theory", category: "ES", credits: 3 },
      { code: "EE23312", title: "Electrical Machines - I", category: "PC", credits: 3 },
      { code: "EE23313", title: "Measurements and Instrumentation", category: "PC", credits: 3 },
      { code: "EE23314", title: "Electronic Devices and Circuits", category: "PC", credits: 3 },
      { code: "EE23315", title: "Power Plant Engineering", category: "ES", credits: 3 },
      {
        code: "EE23321",
        title: "Electronic Devices and Circuits Laboratory",
        category: "PC",
        credits: 1,
      },
      { code: "CS23336", title: "Introduction to Python Programming", category: "ES", credits: 3 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "EE23411", title: "Electrical Machines - II", category: "PC", credits: 3 },
      { code: "EE23412", title: "Transmission and Distribution", category: "PC", credits: 3 },
      { code: "EE23431", title: "Digital Logic Circuits", category: "PC", credits: 4 },
      {
        code: "EE23432",
        title: "Linear Integrated Circuits and Applications",
        category: "PC",
        credits: 4,
      },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "EE23421", title: "Electrical Machines Laboratory", category: "PC", credits: 2 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "EE23511", title: "Power System Analysis", category: "PC", credits: 3 },
      { code: "EE23512", title: "Power Electronics", category: "PC", credits: 3 },
      { code: "EE23513", title: "Control Systems", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      {
        code: "EE23531",
        title: "Microprocessors, Microcontrollers and Applications",
        category: "PC",
        credits: 4,
      },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      {
        code: "EE23521",
        title: "Control and Instrumentation Laboratory",
        category: "PC",
        credits: 1,
      },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "EE23611", title: "Protection and Switchgear", category: "PC", credits: 3 },
      { code: "EE23612", title: "Solid State Drives", category: "PC", credits: 3 },
      {
        code: "EE23613",
        title: "Electric Energy Utilization and Conservation",
        category: "PC",
        credits: 3,
      },
      {
        code: "EE23631",
        title: "Applications of IoT in Electrical Engineering",
        category: "PC",
        credits: 3,
      },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      {
        code: "EE23621",
        title: "Power Electronics and Drives Laboratory",
        category: "PC",
        credits: 1,
      },
      {
        code: "EE23622",
        title: "Applications of AI and ML in Electrical Engineering",
        category: "EEC",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "EE23711", title: "Smart Grid", category: "PC", credits: 3 },
      { code: "EE23712", title: "Power System Operation and Control", category: "PC", credits: 3 },
      { code: "EE23731", title: "Renewable Energy Systems", category: "PC", credits: 4 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "EE23721", title: "Power System Simulation Laboratory", category: "PC", credits: 2 },
      { code: "EE23722", title: "Project Work Phase I", category: "EEC", credits: 4 },
      { code: "EE23723", title: "Internship", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "EE23821", title: "Project Work Phase II", category: "EEC", credits: 6 },
    ],
  },
];

const EEE_B2023: Curriculum = {
  id: "eee-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_EEE,
};

const EEE_B2024: Curriculum = {
  id: "eee-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_EEE,
};

const EEE_B2025: Curriculum = {
  id: "eee-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_EEE,
};

export const EEE: Department = {
  id: "eee",
  name: "B.E. Electrical and Electronics Engineering",
  curricula: [EEE_B2023, EEE_B2024, EEE_B2025],
};
