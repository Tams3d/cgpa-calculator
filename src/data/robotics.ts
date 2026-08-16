import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_RA: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "RO23111", title: "Introduction to Mechanical Systems", category: "ES", credits: 3 },
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
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      {
        code: "CY23131",
        title: "Chemistry for Electronics Engineering",
        category: "BS",
        credits: 4,
      },
      { code: "PH23131", title: "Physics of Materials", category: "BS", credits: 4 },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
        category: "ES",
        credits: 4,
      },
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
        credits: 1,
      },
      { code: "RO23221", title: "Computer Aided Modeling Laboratory", category: "ES", credits: 2 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
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
      { code: "RO23311", title: "Analog and Digital Electronics", category: "PC", credits: 3 },
      {
        code: "RO23312",
        title: "Theory of Mechanisms and Machines - I",
        category: "PC",
        credits: 4,
      },
      { code: "RO23313", title: "Sensors in Automation", category: "PC", credits: 3 },
      { code: "RO23331", title: "Elements of Manufacturing Processes", category: "PC", credits: 4 },
      { code: "RO23332", title: "Mechanics of Materials", category: "ES", credits: 4 },
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
      { code: "RO23411", title: "Fluid Power Systems", category: "PC", credits: 3 },
      { code: "RO23412", title: "Industrial Automation and Control", category: "PC", credits: 3 },
      {
        code: "RO23413",
        title: "Microcontrollers and Real Time Embedded Systems",
        category: "PC",
        credits: 3,
      },
      { code: "RO23414", title: "Robot Kinematics", category: "PC", credits: 4 },
      { code: "MA23432", title: "Statistics and Numerical Methods", category: "BS", credits: 4 },
      { code: "RO23421", title: "Mechanisms and Robotics Laboratory", category: "PC", credits: 2 },
      {
        code: "RO23422",
        title: "Industrial Automation Laboratory - I",
        category: "PC",
        credits: 2,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "RO23511", title: "AI for Robotics", category: "PC", credits: 3 },
      {
        code: "RO23512",
        title: "Theory of Mechanisms and Machines - II",
        category: "PC",
        credits: 4,
      },
      { code: "ME23511", title: "Machine Design", category: "PC", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "RO23521", title: "Mobile Robotics Laboratory", category: "PC", credits: 2 },
      {
        code: "RO23522",
        title: "Industrial Automation Laboratory - II",
        category: "PC",
        credits: 2,
      },
      { code: "RO23523", title: "Internship", category: "EEC", credits: 1 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "ME23612", title: "Design of Transmission Systems", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "RO23631", title: "Robot Operating System", category: "PC", credits: 3 },
      { code: "RO23632", title: "Robot Vision and Intelligence", category: "PC", credits: 4 },
      { code: "RO23633", title: "Robot Dynamics and Motion Planning", category: "PC", credits: 4 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "RO23711", title: "Aerial Robotics", category: "PC", credits: 3 },
      { code: "RO23712", title: "Humanoid Robotics", category: "PC", credits: 3 },
      { code: "RO23713", title: "Resource Management Techniques", category: "HS", credits: 4 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      {
        code: "RO23721",
        title: "Robotics and Automation Problem Solving using AI, ML and DL",
        category: "PC",
        credits: 2,
      },
      { code: "RO23722", title: "Project Work - Phase I", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "RO23821", title: "Project Work - Phase II", category: "EEC", credits: 7 },
    ],
  },
];

const RA_B2023: Curriculum = {
  id: "ra-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_RA,
};

const RA_B2024: Curriculum = {
  id: "ra-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_RA,
};

const RA_B2025: Curriculum = {
  id: "ra-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_RA,
};

export const RA: Department = {
  id: "ra",
  name: "B.E. Robotics and Automation",
  curricula: [RA_B2023, RA_B2024, RA_B2025],
};
