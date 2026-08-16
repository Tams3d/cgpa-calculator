import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_V1: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "EC23111", title: "Basic Electronics Engineering", category: "ES", credits: 3 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
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
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "CY23233", title: "Engineering Chemistry", category: "BS", credits: 4 },
      { code: "EE23132", title: "Basic Electrical Engineering", category: "ES", credits: 4 },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
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
    ],
  },
  {
    number: 3,
    courses: [
      { code: "ME23311", title: "Engineering Thermodynamics", category: "PC", credits: 4 },
      { code: "ME23312", title: "Manufacturing Technology I", category: "PC", credits: 3 },
      { code: "ME23313", title: "Kinematics of Machinery", category: "PC", credits: 3 },
      { code: "MA23331", title: "Transforms and Statistics", category: "BS", credits: 4 },
      { code: "ME23331", title: "Strength of Materials", category: "PC", credits: 4 },
      {
        code: "ME23321",
        title: "Manufacturing Technology Laboratory I",
        category: "PC",
        credits: 1,
      },
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
      {
        code: "ME23411",
        title: "Engineering Materials and Metallurgy",
        category: "PC",
        credits: 3,
      },
      { code: "ME23412", title: "Manufacturing Technology II", category: "PC", credits: 3 },
      { code: "ME23431", title: "Dynamics of Machines", category: "PC", credits: 4 },
      { code: "ME23432", title: "Fluid Mechanics and Machinery", category: "PC", credits: 4 },
      { code: "ME23433", title: "Thermal Engineering", category: "PC", credits: 4 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
      { code: "ME23421", title: "Machine Drawing Laboratory", category: "PC", credits: 2 },
      {
        code: "ME23422",
        title: "Manufacturing Technology Laboratory II",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "GE23511", title: "Economics for Engineers", category: "HS", credits: 3 },
      { code: "ME23511", title: "Machine Design", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "ME23531", title: "Heat and Mass Transfer", category: "PC", credits: 4 },
      { code: "ME23532", title: "Metrology and Measurements", category: "PC", credits: 4 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
      { code: "ME23521", title: "Component Modeling Laboratory", category: "PC", credits: 2 },
      { code: "ME23522", title: "Internship", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "ME23611", title: "Additive Manufacturing Technologies", category: "PC", credits: 3 },
      { code: "ME23612", title: "Design of Transmission Systems", category: "PC", credits: 3 },
      { code: "ME23613", title: "Finite Element Analysis", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "ME23631", title: "Robotics and CNC Programming", category: "PC", credits: 3 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "ME23622", title: "Simulation and Analysis Laboratory", category: "PC", credits: 2 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      {
        code: "ME23711",
        title: "Process Planning and Cost Estimation",
        category: "PC",
        credits: 3,
      },
      { code: "ME23712", title: "Total Quality Management", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "ME23731", title: "AI for Mechanical Engineers", category: "PC", credits: 3 },
      { code: "ME23732", title: "Mechatronics", category: "PC", credits: 4 },
      { code: "ME23721", title: "Project Work Phase I", category: "EEC", credits: 2 },
      { code: "ME23722", title: "Comprehension", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "ME23821", title: "Project Work Phase II", category: "EEC", credits: 8 },
    ],
  },
];

const SEM_V2: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "EC23111", title: "Basic Electronics Engineering", category: "ES", credits: 3 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
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
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "CY23233", title: "Engineering Chemistry", category: "BS", credits: 4 },
      { code: "EE23132", title: "Basic Electrical Engineering", category: "ES", credits: 4 },
      {
        code: "GE23233",
        title: "Problem Solving and Python Programming",
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
    ],
  },
  {
    number: 3,
    courses: [
      { code: "ME23311", title: "Engineering Thermodynamics", category: "PC", credits: 4 },
      { code: "ME23312", title: "Manufacturing Technology I", category: "PC", credits: 3 },
      { code: "ME23313", title: "Kinematics of Machinery", category: "PC", credits: 3 },
      { code: "MA23331", title: "Transforms and Statistics", category: "BS", credits: 4 },
      { code: "ME23331", title: "Strength of Materials", category: "PC", credits: 4 },
      {
        code: "ME23321",
        title: "Manufacturing Technology Laboratory I",
        category: "PC",
        credits: 1,
      },
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
      {
        code: "ME23411",
        title: "Engineering Materials and Metallurgy",
        category: "PC",
        credits: 3,
      },
      { code: "ME23412", title: "Manufacturing Technology II", category: "PC", credits: 3 },
      { code: "ME23431", title: "Dynamics of Machines", category: "PC", credits: 4 },
      { code: "ME23432", title: "Fluid Mechanics and Machinery", category: "PC", credits: 4 },
      { code: "ME23433", title: "Thermal Engineering", category: "PC", credits: 4 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
      { code: "ME23421", title: "Machine Drawing Laboratory", category: "PC", credits: 2 },
      {
        code: "ME23422",
        title: "Manufacturing Technology Laboratory II",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "GE23511", title: "Economics for Engineers", category: "HS", credits: 3 },
      { code: "ME23511", title: "Machine Design", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "ME23531", title: "Heat and Mass Transfer", category: "PC", credits: 4 },
      { code: "ME23532", title: "Metrology and Measurements", category: "PC", credits: 4 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
      { code: "ME23521", title: "Component Modeling Laboratory", category: "PC", credits: 2 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "ME23611", title: "Additive Manufacturing Technologies", category: "PC", credits: 3 },
      { code: "ME23612", title: "Design of Transmission Systems", category: "PC", credits: 3 },
      { code: "ME23613", title: "Finite Element Analysis", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "ME23631", title: "Robotics and CNC Programming", category: "PC", credits: 3 },
      { code: "ME23621", title: "Internship", category: "EEC", credits: 3 },
      { code: "ME23622", title: "Simulation and Analysis Laboratory", category: "PC", credits: 2 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      {
        code: "ME23711",
        title: "Process Planning and Cost Estimation",
        category: "PC",
        credits: 3,
      },
      { code: "ME23712", title: "Total Quality Management", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "ME23731", title: "AI for Mechanical Engineers", category: "PC", credits: 3 },
      { code: "ME23732", title: "Mechatronics", category: "PC", credits: 4 },
      { code: "ME23721", title: "Project Work Phase I", category: "EEC", credits: 2 },
      { code: "ME23722", title: "Comprehension", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "ME23822", title: "Project Work Phase II", category: "EEC", credits: 6 },
    ],
  },
];

const MECH_B2023: Curriculum = {
  id: "mech-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_V1,
};

const MECH_B2024: Curriculum = {
  id: "mech-b2024",
  regulation: "Regulation 2023 (Revised)",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_V2,
};

const MECH_B2025: Curriculum = {
  id: "mech-b2025",
  regulation: "Regulation 2023 (Revised, 2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_V2,
};

const MECH_B2026: Curriculum = {
  id: "mech-b2026",
  regulation: "Regulation 2023 (Revised, 2025 grading)",
  batch: "B2026",
  batchLabel: "Admitted 2026 (2026 - 2030)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_V2,
};

export const MECH: Department = {
  id: "mech",
  name: "B.E. Mechanical Engineering",
  curricula: [MECH_B2023, MECH_B2024, MECH_B2025, MECH_B2026],
};
