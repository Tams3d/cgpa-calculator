import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_AUTO: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "AT23111", title: "Production Technology - I", category: "PC", credits: 3 },
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
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      { code: "GE23211", title: "Engineering Mechanics", category: "ES", credits: 3 },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "CY23233", title: "Engineering Chemistry", category: "BS", credits: 4 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
      },
      { code: "GE23231", title: "Programming Using Python", category: "ES", credits: 3 },
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
      { code: "MA23331", title: "Transforms and Statistics", category: "BS", credits: 4 },
      { code: "AT23331", title: "Automotive Engines", category: "PC", credits: 4 },
      { code: "AT23332", title: "Applied Thermodynamics", category: "PC", credits: 4 },
      {
        code: "AT23333",
        title: "Strength of Materials for Automobile Engineers",
        category: "PC",
        credits: 4,
      },
      { code: "AT23334", title: "Production Technology - II", category: "PC", credits: 4 },
      {
        code: "AT23321",
        title: "Computer Aided Machine Drawing Laboratory",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "AT23411", title: "Electric and Hybrid Vehicles - I", category: "PC", credits: 3 },
      { code: "AT23412", title: "Material Science and Metallurgy", category: "ES", credits: 3 },
      { code: "AT23431", title: "Automotive Drive Line and Chassis", category: "PC", credits: 4 },
      {
        code: "AT23432",
        title: "Fluid Mechanics and Machinery for Automobile Engineers",
        category: "PC",
        credits: 4,
      },
      { code: "AT23433", title: "Theory of Machines", category: "PC", credits: 4 },
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
      { code: "AT23511", title: "Design of Machine Elements", category: "PC", credits: 3 },
      {
        code: "GE23311",
        title: "Fundamentals of Management for Engineers",
        category: "HS",
        credits: 3,
      },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      {
        code: "AT23531",
        title: "Automotive Electrical and Electronics",
        category: "PC",
        credits: 4,
      },
      { code: "AT23532", title: "Electric and Hybrid Vehicles - II", category: "PC", credits: 4 },
      { code: "AT23521", title: "Two and Three wheelers Laboratory", category: "PC", credits: 1 },
      {
        code: "AT23522",
        title: "Computer Aided Vehicle Design Data Characteristics Laboratory",
        category: "PC",
        credits: 1,
      },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "AT23631", title: "Automotive System Design", category: "PC", credits: 4 },
      { code: "AT23632", title: "Vehicle Dynamics", category: "PC", credits: 4 },
      { code: "AT23633", title: "Automotive Fuels and Lubricants", category: "PC", credits: 4 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "AT23621", title: "Industrial Training", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "AT23711", title: "Automotive Pollution and Control", category: "PC", credits: 3 },
      { code: "AT23712", title: "Intelligent Vehicle System", category: "PC", credits: 3 },
      { code: "AT23713", title: "Automotive Safety", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "AT23721", title: "AI and ML for Automobile Engineers", category: "PC", credits: 2 },
      { code: "AT23722", title: "Vehicle Maintenance Laboratory", category: "PC", credits: 1 },
      { code: "AT23723", title: "Computer Aided Analysis laboratory", category: "PC", credits: 1 },
      { code: "AT23724", title: "Internship", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "AT23821", title: "Project Work", category: "EEC", credits: 8 },
    ],
  },
];

const AUTO_B2023: Curriculum = {
  id: "auto-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_AUTO,
};

const AUTO_B2024: Curriculum = {
  id: "auto-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_AUTO,
};

const AUTO_B2025: Curriculum = {
  id: "auto-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_AUTO,
};

export const AUTO: Department = {
  id: "auto",
  name: "B.E. Automobile Engineering",
  curricula: [AUTO_B2023, AUTO_B2024, AUTO_B2025],
};
