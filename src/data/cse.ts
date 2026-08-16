import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_B2023: Semester[] = [
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
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
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
        code: "GE23122",
        title: "Engineering Practices - Electrical and Electronics",
        category: "ES",
        credits: 1,
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
      { code: "CS23311", title: "Computer Architecture", category: "PC", credits: 3 },
      { code: "CS23331", title: "Design and Analysis of Algorithms", category: "PC", credits: 4 },
      { code: "CS23332", title: "Database Management Systems", category: "PC", credits: 5 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
      },
      { code: "CS23334", title: "Fundamentals of Data Science", category: "PC", credits: 4 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      {
        code: "MA23435",
        title: "Probability, Statistics and Simulation",
        category: "BS",
        credits: 4,
      },
      { code: "CS23431", title: "Operating Systems", category: "PC", credits: 5 },
      { code: "CS23432", title: "Software Construction", category: "PC", credits: 4 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
      { code: "CS23421", title: "Internship (2 weeks)", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "CS23511", title: "Theory of Computation", category: "PC", credits: 4 },
      { code: "CS23512", title: "Fundamentals of Mobile Computing", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "CS23531", title: "Web Programming", category: "PC", credits: 4 },
      { code: "CS23532", title: "Computer Networks", category: "PC", credits: 5 },
      {
        code: "CS23533",
        title: "Foundations of Artificial Intelligence",
        category: "PC",
        credits: 4,
      },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "CS23631", title: "Compiler Design", category: "PC", credits: 4 },
      { code: "CS23632", title: "Cryptography and Network Security", category: "PC", credits: 3 },
      { code: "CS23633", title: "Cloud Computing", category: "PC", credits: 3 },
      {
        code: "AD23B31",
        title: "Image Processing and Computer Vision",
        category: "PC",
        credits: 3,
      },
      { code: "AI23331", title: "Fundamentals of Machine Learning", category: "PC", credits: 4 },
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
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "CS23721", title: "Project Phase I", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE7", title: "Professional Elective - VII", category: "PE", credits: 3 },
      { code: "CS23821", title: "Project Phase II", category: "EEC", credits: 6 },
    ],
  },
];

const SEM_B2425: Semester[] = [
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
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
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
        code: "GE23122",
        title: "Engineering Practices - Electrical and Electronics",
        category: "ES",
        credits: 1,
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
      { code: "CS23311", title: "Computer Architecture", category: "PC", credits: 3 },
      { code: "CS23331", title: "Design and Analysis of Algorithms", category: "PC", credits: 4 },
      { code: "CS23332", title: "Database Management Systems", category: "PC", credits: 5 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
      },
      { code: "CS23334", title: "Fundamentals of Data Science", category: "PC", credits: 4 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      {
        code: "MA23435",
        title: "Probability, Statistics and Simulation",
        category: "BS",
        credits: 4,
      },
      { code: "CS23431", title: "Operating Systems", category: "PC", credits: 5 },
      { code: "CS23432", title: "Software Construction", category: "PC", credits: 4 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "CS23511", title: "Theory of Computation", category: "PC", credits: 4 },
      { code: "CS23512", title: "Fundamentals of Mobile Computing", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "CS23531", title: "Web Programming", category: "PC", credits: 4 },
      { code: "CS23532", title: "Computer Networks", category: "PC", credits: 5 },
      {
        code: "CS23533",
        title: "Foundations of Artificial Intelligence",
        category: "PC",
        credits: 4,
      },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "CS23631", title: "Compiler Design", category: "PC", credits: 4 },
      { code: "CS23632", title: "Cryptography and Network Security", category: "PC", credits: 3 },
      { code: "CS23633", title: "Cloud Computing", category: "PC", credits: 3 },
      {
        code: "AD23B31",
        title: "Image Processing and Computer Vision",
        category: "PC",
        credits: 3,
      },
      { code: "AI23331", title: "Fundamentals of Machine Learning", category: "PC", credits: 4 },
      {
        code: "CS23621",
        title: "Mobile Application Development Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "CS23622", title: "Internship (6 weeks)", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "CS23722", title: "Project Phase I", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE7", title: "Professional Elective - VII", category: "PE", credits: 3 },
      { code: "CS23822", title: "Project Phase II", category: "EEC", credits: 5 },
    ],
  },
];

const SEM_B2026: Semester[] = [
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
        code: "GE23123",
        title: "Engineering Practices - Electrical, Electronics and Computer Systems",
        category: "ES",
        credits: 2,
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
      { code: "CS23311", title: "Computer Architecture", category: "PC", credits: 3 },
      { code: "CS23331", title: "Design and Analysis of Algorithms", category: "PC", credits: 4 },
      { code: "CS23332", title: "Database Management Systems", category: "PC", credits: 5 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
      },
      { code: "CS23334", title: "Fundamentals of Data Science", category: "PC", credits: 4 },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      {
        code: "MA23435",
        title: "Probability, Statistics and Simulation",
        category: "BS",
        credits: 4,
      },
      { code: "CS23431", title: "Operating Systems", category: "PC", credits: 5 },
      { code: "CS23432", title: "Software Construction", category: "PC", credits: 4 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "CS23511", title: "Theory of Computation", category: "PC", credits: 4 },
      { code: "CS23512", title: "Fundamentals of Mobile Computing", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "CS23531", title: "Web Programming", category: "PC", credits: 4 },
      { code: "CS23532", title: "Computer Networks", category: "PC", credits: 5 },
      {
        code: "CS23533",
        title: "Foundations of Artificial Intelligence",
        category: "PC",
        credits: 4,
      },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "CS23631", title: "Compiler Design", category: "PC", credits: 4 },
      { code: "CS23632", title: "Cryptography and Network Security", category: "PC", credits: 3 },
      { code: "CS23633", title: "Cloud Computing", category: "PC", credits: 3 },
      {
        code: "AD23B31",
        title: "Image Processing and Computer Vision",
        category: "PC",
        credits: 3,
      },
      { code: "AI23331", title: "Fundamentals of Machine Learning", category: "PC", credits: 4 },
      {
        code: "CS23621",
        title: "Mobile Application Development Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "CS23422", title: "Internship (6 weeks)", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "CS23722", title: "Project Phase I", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE7", title: "Professional Elective - VII", category: "PE", credits: 3 },
      { code: "CS23822", title: "Project Phase II", category: "EEC", credits: 5 },
    ],
  },
];

const CSE_B2023: Curriculum = {
  id: "cse-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_B2023,
};

const CSE_B2024: Curriculum = {
  id: "cse-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_B2425,
};

const CSE_B2025: Curriculum = {
  id: "cse-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_B2425,
};

const CSE_B2026: Curriculum = {
  id: "cse-b2026",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2026",
  batchLabel: "Admitted 2026 (2026 - 2030)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_B2026,
};

export const CSE: Department = {
  id: "cse",
  name: "B.E. Computer Science and Engineering",
  curricula: [CSE_B2023, CSE_B2024, CSE_B2025, CSE_B2026],
};
