import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_BT: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23112", title: "Algebra and Calculus", category: "BS", credits: 4 },
      { code: "CY23132", title: "Chemistry for Technologists", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      {
        code: "GE23121",
        title: "Engineering Practices - Civil and Mechanical",
        category: "ES",
        credits: 1,
      },
      { code: "BT23131", title: "Microbiology", category: "PC", credits: 4 },
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
      { code: "PH23231", title: "Physics for Bioscience", category: "BS", credits: 4 },
      { code: "GE23231", title: "Programming using Python", category: "ES", credits: 3 },
      {
        code: "GE23212",
        title: "Basic Civil and Mechanical Engineering",
        category: "ES",
        credits: 3,
      },
      { code: "BT23211", title: "Biochemistry", category: "PC", credits: 3 },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      { code: "BT23221", title: "Biochemistry Laboratory", category: "PC", credits: 2 },
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
      {
        code: "BT23311",
        title: "Enzyme Technology and Biotransformations",
        category: "PC",
        credits: 3,
      },
      { code: "BT23312", title: "Stoichiometry and Fluid Mechanics", category: "ES", credits: 3 },
      { code: "BT23313", title: "Molecular Genetics", category: "PC", credits: 3 },
      { code: "BT23314", title: "Cell Biology", category: "PC", credits: 3 },
      {
        code: "BT23321",
        title: "Basic Food and Enzyme Technology Laboratory",
        category: "ES",
        credits: 1,
      },
      {
        code: "BT23331",
        title: "Analytical Techniques in Biotechnology",
        category: "ES",
        credits: 3,
      },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "MA23431",
        title: "Probability, Statistics and Reliability",
        category: "BS",
        credits: 4,
      },
      { code: "BT23411", title: "Food Biotechnology", category: "ES", credits: 3 },
      { code: "BT23412", title: "Genetic Engineering", category: "PC", credits: 3 },
      { code: "BT23413", title: "Thermodynamics and Heat Transfer", category: "ES", credits: 3 },
      { code: "BT23414", title: "Basic Industrial Biotechnology", category: "PC", credits: 3 },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      {
        code: "BT23421",
        title: "Chemical Engineering Laboratory for Biotechnologists",
        category: "ES",
        credits: 2,
      },
      {
        code: "BT23422",
        title: "Molecular Biology and Genetic Engineering Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "BT23511", title: "Bioprocess Principles", category: "PC", credits: 3 },
      { code: "BT23512", title: "Bioinformatics", category: "PC", credits: 3 },
      { code: "BT23513", title: "Separation Process Principles", category: "ES", credits: 3 },
      { code: "BT23514", title: "Immunology", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "BT23521", title: "Bioprocess Laboratory - I", category: "PC", credits: 2 },
      { code: "BT23522", title: "Bioinformatics Laboratory", category: "PC", credits: 2 },
      { code: "BT23523", title: "Immunology Laboratory", category: "PC", credits: 2 },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "BT23611", title: "Bioprocess Technology", category: "PC", credits: 3 },
      { code: "BT23612", title: "Chemical Reaction Engineering", category: "ES", credits: 3 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "BT23621", title: "Bioprocess Laboratory - II", category: "PC", credits: 2 },
      {
        code: "BT23622",
        title: "Numerical Programming for Biotechnologists",
        category: "PC",
        credits: 1,
      },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "BT23711", title: "Downstream Processing", category: "PC", credits: 3 },
      { code: "BT23712", title: "Protein Engineering", category: "PC", credits: 3 },
      { code: "BT23713", title: "Comprehension in Biotechnology", category: "PC", credits: 2 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "BT23721", title: "Downstream Processing Laboratory", category: "PC", credits: 2 },
      {
        code: "BT23722",
        title: "Artificial Intelligence and Machine Learning for Biotechnologists",
        category: "PC",
        credits: 2,
      },
      { code: "BT23724", title: "Professional Internship", category: "EEC", credits: 3 },
      { code: "EC23527", title: "Microfluidics Laboratory", category: "ES", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [{ code: "BT23822", title: "Capstone Project", category: "EEC", credits: 10 }],
  },
];

const BT_B2023: Curriculum = {
  id: "biotech-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_BT,
};

const BT_B2024: Curriculum = {
  id: "biotech-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_BT,
};

const BT_B2025: Curriculum = {
  id: "biotech-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_BT,
};

export const BT: Department = {
  id: "biotech",
  name: "B.Tech. Biotechnology",
  curricula: [BT_B2023, BT_B2024, BT_B2025],
};
