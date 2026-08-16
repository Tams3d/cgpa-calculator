import type { Curriculum, Department, Semester } from "@/types/curriculum";

const SEM_BME: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "HS23111", title: "Technical Communication I", category: "HS", credits: 2 },
      { code: "MA23111", title: "Linear Algebra and Calculus", category: "BS", credits: 4 },
      { code: "GE23111", title: "Engineering Graphics", category: "ES", credits: 4 },
      { code: "GE23117", title: "Heritage of Tamils", category: "HS", credits: 1 },
      {
        code: "MC23112",
        title: "Environmental Science and Engineering",
        category: "MC",
        credits: 0,
      },
      {
        code: "CY23131",
        title: "Chemistry For Electronics Engineering",
        category: "BS",
        credits: 4,
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
        code: "MA23212",
        title: "Differential Equations and Complex Variables",
        category: "BS",
        credits: 4,
      },
      {
        code: "ME23211",
        title: "Engineering Mechanics for Biomedical Engineers",
        category: "ES",
        credits: 4,
      },
      { code: "GE23217", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "CS23232",
        title: "Fundamentals of Data Structures using C",
        category: "ES",
        credits: 5,
      },
      { code: "PH23231", title: "Physics for Bioscience", category: "BS", credits: 4 },
      { code: "BM23231", title: "Electric Circuits and Machines", category: "ES", credits: 4 },
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
    ],
  },
  {
    number: 3,
    courses: [
      { code: "MA23312", title: "Fourier Series and Number Theory", category: "BS", credits: 4 },
      { code: "BM23311", title: "Human Anatomy and Physiology", category: "PC", credits: 3 },
      { code: "BM23312", title: "Biomedical Instrumentation", category: "PC", credits: 3 },
      { code: "BM23313", title: "Biochemical Science", category: "PC", credits: 3 },
      { code: "BM23331", title: "Electronic Devices and Circuits", category: "PC", credits: 4 },
      { code: "BM23332", title: "Sensors and Measurements", category: "PC", credits: 3 },
      {
        code: "BM23321",
        title: "Biochemistry and Physiology Laboratory",
        category: "PC",
        credits: 2,
      },
      {
        code: "BM23322",
        title: "Biomedical Instrumentation Laboratory",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "BM23411",
        title: "Analog and Digital Integrated Circuits",
        category: "PC",
        credits: 3,
      },
      { code: "BM23412", title: "Communication Systems and Standards", category: "PC", credits: 3 },
      {
        code: "MC23111",
        title: "Indian Constitution and Freedom Movement",
        category: "MC",
        credits: 0,
      },
      { code: "OE1", title: "Open Elective - I", category: "OE", credits: 3 },
      { code: "MA23436", title: "Probability and Random Processes", category: "BS", credits: 4 },
      { code: "BM23431", title: "Pathology and Microbiology", category: "PC", credits: 3 },
      { code: "CS23336", title: "Introduction to Python Programming", category: "ES", credits: 3 },
      {
        code: "BM23421",
        title: "Analog and Digital Integrated Circuits Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "BM23422", title: "PCB Design Laboratory", category: "ES", credits: 1 },
      { code: "GE23421", title: "Soft Skills - I", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "BM23511", title: "Biocontrol Systems", category: "PC", credits: 3 },
      {
        code: "BM23512",
        title: "Diagnostic and Therapeutic Equipment",
        category: "PC",
        credits: 3,
      },
      { code: "OE2", title: "Open Elective - II", category: "OE", credits: 3 },
      { code: "PE1", title: "Professional Elective - I", category: "PE", credits: 3 },
      { code: "BM23531", title: "Signals and Systems Analysis", category: "PC", credits: 3 },
      {
        code: "BM23532",
        title: "Microcontroller and Embedded System Design",
        category: "PC",
        credits: 4,
      },
      {
        code: "CS23422",
        title: "Python Programming for Machine Learning",
        category: "ES",
        credits: 2,
      },
      {
        code: "BM23521",
        title: "Diagnostic and Therapeutic Equipment Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "GE23521", title: "Soft Skills - II", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "BM23611", title: "Radiological Equipment", category: "PC", credits: 3 },
      { code: "BM23612", title: "Biomechanics", category: "PC", credits: 4 },
      { code: "PE2", title: "Professional Elective - II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective - III", category: "PE", credits: 3 },
      { code: "BM23631", title: "Biomedical Signal Processing", category: "PC", credits: 3 },
      { code: "BM23623", title: "Medical Industrial Training", category: "EEC", credits: 2 },
      { code: "GE23621", title: "Problem Solving Techniques", category: "EEC", credits: 1 },
      { code: "GE23627", title: "Design Thinking and Innovation", category: "EEC", credits: 2 },
      { code: "BM23622", title: "Physiological Modeling Laboratory", category: "PC", credits: 2 },
    ],
  },
  {
    number: 7,
    courses: [
      {
        code: "BM23711",
        title: "Comprehension In Biomedical Engineering",
        category: "EEC",
        credits: 1,
      },
      { code: "PE4", title: "Professional Elective - IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective - V", category: "PE", credits: 3 },
      { code: "PE6", title: "Professional Elective - VI", category: "PE", credits: 3 },
      { code: "BM23731", title: "Medical Image Processing", category: "PC", credits: 4 },
      {
        code: "BM23721",
        title: "Artificial Intelligence and Machine Learning for Biomedical Engineering",
        category: "EEC",
        credits: 2,
      },
      { code: "BM23722", title: "Project Phase - I", category: "EEC", credits: 3 },
      { code: "BM23723", title: "Hospital Training", category: "EEC", credits: 1 },
    ],
  },
  {
    number: 8,
    courses: [{ code: "BM23822", title: "Project Phase - II", category: "EEC", credits: 7 }],
  },
];

const BME_B2023: Curriculum = {
  id: "biomed-b2023",
  regulation: "Regulation 2023",
  batch: "B2023",
  batchLabel: "Admitted 2023 (2023 - 2027)",
  gradeScaleId: "r2023",
  semesters: SEM_BME,
};

const BME_B2024: Curriculum = {
  id: "biomed-b2024",
  regulation: "Regulation 2023",
  batch: "B2024",
  batchLabel: "Admitted 2024 (2024 - 2028)",
  gradeScaleId: "r2023",
  semesters: SEM_BME,
};

const BME_B2025: Curriculum = {
  id: "biomed-b2025",
  regulation: "Regulation 2023 (2025 grading)",
  batch: "B2025",
  batchLabel: "Admitted 2025 (2025 - 2029)",
  gradeScaleId: "r2025",
  percentageFormula: "cgpa-x10",
  semesters: SEM_BME,
};

export const BME: Department = {
  id: "biomed",
  name: "B.E. Biomedical Engineering",
  curricula: [BME_B2023, BME_B2024, BME_B2025],
};
