import type { Department, Semester } from "@/types/curriculum";

const SEM: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23116", title: "Mathematical Foundations for AI", category: "BS", credits: 4 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "PH23132", title: "Physics for Information Science", category: "BS", credits: 4 },
      { code: "GE23131", title: "Programming using C", category: "PC", credits: 4 },
      {
        code: "EE23133",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 4,
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
        code: "MA23214",
        title: "Probability and Inferential Statistics",
        category: "BS",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      {
        code: "IT23231",
        title: "Digital Principles and Computer Architecture",
        category: "PC",
        credits: 4,
      },
      { code: "CS23231", title: "Data Structures", category: "PC", credits: 5 },
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
      { code: "CS23221", title: "Python Programming Lab", category: "PC", credits: 2 },
    ],
  },
  {
    number: 3,
    courses: [
      { code: "MA23313", title: "Discrete Mathematics for AI", category: "BS", credits: 4 },
      {
        code: "AI23231",
        title: "Principles of Artificial Intelligence",
        category: "ES",
        credits: 4,
      },
      { code: "CS23331", title: "Design and Analysis of Algorithms", category: "PC", credits: 4 },
      { code: "CS23332", title: "Database Management Systems", category: "PC", credits: 5 },
      {
        code: "CS23333",
        title: "Object Oriented Programming Using Java",
        category: "PC",
        credits: 4,
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
    number: 4,
    courses: [
      { code: "MA23434", title: "Optimization Techniques for AI", category: "BS", credits: 4 },
      { code: "AI23331", title: "Fundamentals of Machine Learning", category: "PC", credits: 4 },
      {
        code: "AI23431",
        title: "Web Technology and Mobile Application",
        category: "PC",
        credits: 3,
      },
      { code: "AD23431", title: "Statistical Analysis and Computing", category: "PC", credits: 3 },
      { code: "CS23431", title: "Operating Systems", category: "PC", credits: 5 },
      { code: "CS23432", title: "Software Construction", category: "PC", credits: 4 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "AD23531", title: "Big Data Architecture", category: "PC", credits: 4 },
      { code: "AD23532", title: "Principles of Data Science", category: "PC", credits: 4 },
      { code: "AI23531", title: "Deep Learning", category: "PC", credits: 4 },
      { code: "CS23532", title: "Computer Networks", category: "PC", credits: 5 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "AD23631", title: "Data Privacy and Security", category: "PC", credits: 4 },
      {
        code: "AD23632",
        title: "Framework for Data and Visual Analytics",
        category: "PC",
        credits: 4,
      },
      { code: "AD23633", title: "Generative AI", category: "PC", credits: 3 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "AD23621", title: "Internship", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "AD23731", title: "Foundations of Agentic AI", category: "PC", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "CS23633", title: "Cloud Computing", category: "PC", credits: 3 },
      { code: "AD23722", title: "Project Phase I", category: "EEC", credits: 4 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "AD23822", title: "Project Phase II", category: "EEC", credits: 4 },
    ],
  },
];

export const AIDS: Department = {
  id: "aids",
  name: "B.Tech. Artificial Intelligence and Data Science",
  curricula: [
    {
      id: "aids-b2026",
      regulation: "Regulation 2023 (2025 grading)",
      batch: "B2026",
      batchLabel: "Batches 2026 - 2030",
      gradeScaleId: "r2025",
      percentageFormula: "cgpa-x10",
      semesters: SEM,
    },
  ],
};
