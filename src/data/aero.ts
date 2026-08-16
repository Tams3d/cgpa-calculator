import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_B2023: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "PH23131", title: "Physics of Materials", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      {
        code: "MC23112",
        title: "Environmental Science and Engineering",
        category: "MC",
        credits: 0,
      },
      {
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
        category: "ES",
        credits: 1,
      },
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
        title: "Differential Equation and Complex variables",
        category: "BS",
        credits: 4,
      },
      { code: "CY23233", title: "Engineering Chemistry", category: "BS", credits: 4 },
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      {
        code: "AE23211",
        title: "Fundamentals of Aerospace Engineering",
        category: "PC",
        credits: 3,
      },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
        category: "ES",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
      {
        code: "GE23122",
        title: "Engineering Practices - Electrical and Electronics",
        category: "ES",
        credits: 1,
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
      { code: "AE23331", title: "Solid Mechanics", category: "PC", credits: 4 },
      { code: "AE23332", title: "Fluid Mechanics and Fluid Machinery", category: "PC", credits: 4 },
      { code: "AE23333", title: "Aero Engineering Thermodynamics", category: "PC", credits: 4 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "AE23321", title: "Computer Aided Modelling Laboratory", category: "PC", credits: 2 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "MA23432", title: "Statistics and Numerical Methods", category: "BS", credits: 4 },
      { code: "AE23411", title: "Aircraft Structures - I", category: "PC", credits: 3 },
      { code: "AE23412", title: "Control Engineering", category: "PC", credits: 3 },
      { code: "AE23431", title: "Incompressible Aerodynamics", category: "PC", credits: 4 },
      { code: "AE23432", title: "Aircraft Materials and Processes", category: "PC", credits: 4 },
      { code: "AE23433", title: "Aircraft Systems and Instruments", category: "PC", credits: 4 },
      { code: "GE23421", title: "Soft Skills - 1", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "AE23511", title: "Aircraft Propulsion", category: "PC", credits: 3 },
      { code: "AE23512", title: "Compressible Aerodynamics", category: "PC", credits: 3 },
      { code: "AE23513", title: "Flight Dynamics", category: "PC", credits: 4 },
      { code: "AE23531", title: "Aircraft Structures - II", category: "PC", credits: 4 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
      { code: "AE23521", title: "Computational Simulation Laboratory", category: "PC", credits: 2 },
      { code: "AE23522", title: "Internship", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "AE23611", title: "Rocket and Missile Propulsion", category: "PC", credits: 3 },
      { code: "AE23631", title: "Flight Vehicle Design", category: "PC", credits: 4 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "AE23622", title: "Jet propulsion Laboratory", category: "PC", credits: 2 },
      {
        code: "AE23623",
        title: "Airframe Repair and Aero Engine Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "AE23731", title: "Avionics", category: "PC", credits: 4 },
      { code: "AE23711", title: "Composite Materials and Structures", category: "PC", credits: 3 },
      {
        code: "GE23311",
        title: "Fundamentals of Management for Engineers",
        category: "HS",
        credits: 3,
      },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "AE23721", title: "Project Work Phase I", category: "EEC", credits: 2 },
      {
        code: "AE23722",
        title: "Artificial Intelligence and Machine Learning for Aeronautical Engineering",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "AE23821", title: "Project Work Phase II", category: "EEC", credits: 8 },
    ],
  },
];

const SEM_REVISED: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "PH23131", title: "Physics of Materials", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      {
        code: "MC23112",
        title: "Environmental Science and Engineering",
        category: "MC",
        credits: 0,
      },
      {
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
        category: "ES",
        credits: 1,
      },
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
        title: "Differential Equation and Complex variables",
        category: "BS",
        credits: 4,
      },
      { code: "CY23233", title: "Engineering Chemistry", category: "BS", credits: 4 },
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      {
        code: "AE23211",
        title: "Fundamentals of Aerospace Engineering",
        category: "PC",
        credits: 3,
      },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
        category: "ES",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
      {
        code: "GE23122",
        title: "Engineering Practices - Electrical and Electronics",
        category: "ES",
        credits: 1,
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
      { code: "AE23331", title: "Solid Mechanics", category: "PC", credits: 4 },
      { code: "AE23332", title: "Fluid Mechanics and Fluid Machinery", category: "PC", credits: 4 },
      { code: "AE23333", title: "Aero Engineering Thermodynamics", category: "PC", credits: 4 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "AE23321", title: "Computer Aided Modelling Laboratory", category: "PC", credits: 2 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "MA23432", title: "Statistics and Numerical Methods", category: "BS", credits: 4 },
      { code: "AE23411", title: "Aircraft Structures - I", category: "PC", credits: 3 },
      { code: "AE23412", title: "Control Engineering", category: "PC", credits: 3 },
      { code: "AE23431", title: "Incompressible Aerodynamics", category: "PC", credits: 4 },
      { code: "AE23432", title: "Aircraft Materials and Processes", category: "PC", credits: 4 },
      { code: "AE23433", title: "Aircraft Systems and Instruments", category: "PC", credits: 4 },
      { code: "GE23421", title: "Soft Skills - 1", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "AE23511", title: "Aircraft Propulsion", category: "PC", credits: 3 },
      { code: "AE23512", title: "Compressible Aerodynamics", category: "PC", credits: 3 },
      { code: "AE23513", title: "Flight Dynamics", category: "PC", credits: 4 },
      { code: "AE23531", title: "Aircraft Structures - II", category: "PC", credits: 4 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
      { code: "AE23521", title: "Computational Simulation Laboratory", category: "PC", credits: 2 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "AE23611", title: "Rocket and Missile Propulsion", category: "PC", credits: 3 },
      { code: "AE23631", title: "Flight Vehicle Design", category: "PC", credits: 4 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "AE23622", title: "Jet propulsion Laboratory", category: "PC", credits: 2 },
      {
        code: "AE23623",
        title: "Airframe Repair and Aero Engine Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "AE23731", title: "Avionics", category: "PC", credits: 4 },
      { code: "AE23711", title: "Composite Materials and Structures", category: "PC", credits: 3 },
      {
        code: "GE23311",
        title: "Fundamentals of Management for Engineers",
        category: "HS",
        credits: 3,
      },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "AE23721", title: "Project Work Phase I", category: "EEC", credits: 2 },
      {
        code: "AE23722",
        title: "Artificial Intelligence and Machine Learning for Aeronautical Engineering",
        category: "PC",
        credits: 2,
      },
      { code: "AE23723", title: "Internship", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "AE23822", title: "Project Work Phase II", category: "EEC", credits: 6 },
    ],
  },
];

const AERO_B2023: Curriculum = {
  id: "aero-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_B2023,
};

const AERO_B2024: Curriculum = {
  id: "aero-b2024",
  regulation: "Regulation 2023 (revised)",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_REVISED,
};

const AERO_B2025: Curriculum = {
  id: "aero-b2025",
  regulation: "Regulation 2023 (revised)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_REVISED,
};

export const AERO: Department = {
  id: "aero",
  name: "B.E. Aeronautical Engineering",
  curricula: [AERO_B2023, AERO_B2024, AERO_B2025],
};
