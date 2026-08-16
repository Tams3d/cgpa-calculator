import type { Department, Semester } from "@/types/curriculum";

const SEM_V1: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "MA23111", title: "Linear Algebra and Calculus", category: "BS", credits: 4 },
      { code: "EC23131", title: "Electron Devices", category: "PC", credits: 4 },
      {
        code: "CY23131",
        title: "Chemistry for Electronics Engineering",
        category: "BS",
        credits: 4,
      },
      { code: "GE23131", title: "Programming using C", category: "ES", credits: 4 },
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
    number: 2,
    courses: [
      {
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "EE23132", title: "Basic Electrical Engineering", category: "ES", credits: 4 },
      { code: "PH23232", title: "Physics for Electronics Engineering", category: "BS", credits: 4 },
      { code: "CS23231", title: "Data Structures", category: "ES", credits: 5 },
      {
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
        category: "ES",
        credits: 1,
      },
      {
        code: "HS23221",
        title: "Technical Communication II / English for Professional Competence",
        category: "HS",
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
    number: 3,
    courses: [
      { code: "MA23312", title: "Fourier Series and Number Theory", category: "BS", credits: 4 },
      { code: "EC23311", title: "Analog Circuits - I", category: "PC", credits: 3 },
      { code: "EC23312", title: "Electromagnetic Fields", category: "PC", credits: 3 },
      {
        code: "EC23313",
        title: "Digital Principles and System Design",
        category: "PC",
        credits: 3,
      },
      {
        code: "EC23332",
        title: "Principles of Microprocessor and Microcontrollers",
        category: "PC",
        credits: 4,
      },
      { code: "CS23336", title: "Introduction to Python Programming", category: "ES", credits: 3 },
      {
        code: "EC23321",
        title: "Analog and Digital Circuits Laboratory",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "EC23411", title: "Signals and Systems", category: "PC", credits: 3 },
      { code: "EC23412", title: "Transmission Lines and Waveguides", category: "PC", credits: 3 },
      { code: "EC23413", title: "Communication Theory", category: "PC", credits: 3 },
      { code: "EC23431", title: "Analog Circuits - II", category: "PC", credits: 4 },
      { code: "MA23436", title: "Probability and Random Processes", category: "BS", credits: 4 },
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
      { code: "EC23511", title: "Control System Engineering", category: "PC", credits: 3 },
      { code: "EC23512", title: "Modern Digital Communication", category: "PC", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "EC23531", title: "Digital Signal Processing", category: "PC", credits: 4 },
      { code: "EC23521", title: "Communication Systems Laboratory", category: "PC", credits: 2 },
      { code: "EC23522", title: "Internship", category: "EEC", credits: 3 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "EC23611", title: "Antenna Theory and Wave Propagation", category: "PC", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "EC23631", title: "VLSI and Chip Design", category: "PC", credits: 4 },
      { code: "EC23632", title: "Communication Networks", category: "PC", credits: 4 },
      { code: "EC23633", title: "Wireless Communication", category: "PC", credits: 3 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "EC23731", title: "Optical Communication and Networks", category: "PC", credits: 3 },
      { code: "EC23732", title: "RF and Microwave Engineering", category: "PC", credits: 3 },
      { code: "EC23733", title: "Embedded and Real Time Systems", category: "PC", credits: 4 },
      {
        code: "EC23721",
        title: "Artificial Intelligence and Machine Learning for Electronic Engineering",
        category: "EEC",
        credits: 2,
      },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "EC23821", title: "Project Work", category: "EEC", credits: 8 },
    ],
  },
];

const SEM_V2: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "MA23111", title: "Linear Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "EC23131", title: "Electron Devices", category: "PC", credits: 4 },
      {
        code: "CY23131",
        title: "Chemistry for Electronics Engineering",
        category: "BS",
        credits: 4,
      },
      { code: "GE23131", title: "Programming using C", category: "ES", credits: 4 },
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
      {
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "EE23132", title: "Basic Electrical Engineering", category: "ES", credits: 4 },
      { code: "PH23232", title: "Physics for Electronics Engineering", category: "BS", credits: 4 },
      { code: "CS23231", title: "Data Structures", category: "ES", credits: 5 },
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
      { code: "EC23311", title: "Analog Circuits - I", category: "PC", credits: 3 },
      { code: "EC23312", title: "Electromagnetic Fields", category: "PC", credits: 3 },
      {
        code: "EC23313",
        title: "Digital Principles and System Design",
        category: "PC",
        credits: 3,
      },
      {
        code: "EC23332",
        title: "Principles of Microprocessor and Microcontrollers",
        category: "PC",
        credits: 4,
      },
      { code: "CS23336", title: "Introduction to Python Programming", category: "ES", credits: 3 },
      {
        code: "EC23321",
        title: "Analog and Digital Circuits Laboratory",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "EC23411", title: "Signals and Systems", category: "PC", credits: 3 },
      { code: "EC23412", title: "Transmission Lines and Waveguides", category: "PC", credits: 3 },
      { code: "EC23413", title: "Communication Theory", category: "PC", credits: 3 },
      { code: "EC23431", title: "Analog Circuits - II", category: "PC", credits: 4 },
      { code: "MA23436", title: "Probability and Random Processes", category: "BS", credits: 4 },
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
      { code: "EC23511", title: "Control System Engineering", category: "PC", credits: 3 },
      { code: "EC23512", title: "Modern Digital Communication", category: "PC", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "EC23531", title: "Digital Signal Processing", category: "PC", credits: 4 },
      { code: "EC23521", title: "Communication Systems Laboratory", category: "PC", credits: 2 },
      { code: "EC23522", title: "Internship", category: "EEC", credits: 3 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "EC23611", title: "Antenna Theory and Wave Propagation", category: "PC", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "EC23631", title: "VLSI and Chip Design", category: "PC", credits: 4 },
      { code: "EC23632", title: "Communication Networks", category: "PC", credits: 4 },
      { code: "EC23633", title: "Wireless Communication", category: "PC", credits: 3 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "EC23731", title: "Optical Communication and Networks", category: "PC", credits: 3 },
      { code: "EC23732", title: "RF and Microwave Engineering", category: "PC", credits: 3 },
      { code: "EC23733", title: "Embedded and Real Time Systems", category: "PC", credits: 4 },
      {
        code: "EC23721",
        title: "Artificial Intelligence and Machine Learning for Electronic Engineering",
        category: "EEC",
        credits: 2,
      },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "EC23821", title: "Project Work", category: "EEC", credits: 8 },
    ],
  },
];

export const ECE: Department = {
  id: "ece",
  name: "B.E. Electronics and Communication Engineering",
  curricula: [
    {
      id: "ece-b2023",
      regulation: "Regulation 2023",
      batch: "B2023",
      batchLabel: "Admitted 2023 (2023 - 2027)",
      gradeScaleId: "r2023",
      semesters: SEM_V1,
    },
    {
      id: "ece-b2024",
      regulation: "Regulation 2023",
      batch: "B2024",
      batchLabel: "Admitted 2024 (2024 - 2028)",
      gradeScaleId: "r2023",
      semesters: SEM_V1,
    },
    {
      id: "ece-b2025",
      regulation: "Regulation 2023 (2025 grading)",
      batch: "B2025",
      batchLabel: "Admitted 2025 (2025 - 2029)",
      gradeScaleId: "r2025",
      percentageFormula: "cgpa-x10",
      semesters: SEM_V1,
    },
    {
      id: "ece-b2026",
      regulation: "Regulation 2023 (2025 grading)",
      batch: "B2026",
      batchLabel: "Admitted 2026 (2026 - 2030)",
      gradeScaleId: "r2025",
      percentageFormula: "cgpa-x10",
      semesters: SEM_V2,
    },
  ],
};
