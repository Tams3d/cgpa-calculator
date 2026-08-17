import type { Department, Semester } from "@/types/curriculum";

const SSN_CSE_R2021_SEM: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "UEN2176", title: "Technical English", category: "HS", credits: 3 },
      { code: "UMA2176", title: "Matrices and Calculus", category: "BS", credits: 4 },
      { code: "UPH2176", title: "Engineering Physics", category: "BS", credits: 3 },
      { code: "UCY2176", title: "Engineering Chemistry", category: "BS", credits: 3 },
      {
        code: "UGE2176",
        title: "Problem Solving and Programming in Python",
        category: "ES",
        credits: 3,
      },
      { code: "UGE2177", title: "Engineering Graphics", category: "ES", credits: 3 },
      { code: "UGS2197", title: "Physics and Chemistry Lab", category: "BS", credits: 1.5 },
      { code: "UGE2197", title: "Programming in Python Lab", category: "ES", credits: 1.5 },
    ],
  },
  {
    number: 2,
    courses: [
      {
        code: "UMA2276",
        title: "Complex Functions and Laplace Transforms",
        category: "BS",
        credits: 4,
      },
      {
        code: "UEE2276",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 3,
      },
      {
        code: "UCS2201",
        title: "Fundamentals and Practice of Software Development (TCP)",
        category: "ES",
        credits: 4.5,
      },
      { code: "UCY2276", title: "Environmental Science", category: "BS", credits: 0 },
      { code: "HE1", title: "Humanities Elective", category: "HS", credits: 3 },
      { code: "UCS2202", title: "Foundations of Data Science", category: "ES", credits: 3 },
      {
        code: "UGE2297",
        title: "Design Thinking and Engineering Practices Lab",
        category: "ES",
        credits: 1.5,
      },
    ],
  },
  {
    number: 3,
    courses: [
      { code: "UMA2377", title: "Discrete Mathematics", category: "BS", credits: 4 },
      {
        code: "UHS2376",
        title: "Universal Human Values 2: Understanding Harmony",
        category: "HS",
        credits: 3,
      },
      {
        code: "UCS2301",
        title: "Digital Principles and System Design",
        category: "ES",
        credits: 3,
      },
      { code: "UCS2302", title: "Data Structures", category: "PC", credits: 3 },
      { code: "UCS2303", title: "Object Oriented Programming", category: "PC", credits: 3 },
      { code: "UCS2311", title: "Digital Design Lab", category: "ES", credits: 1.5 },
      { code: "UCS2312", title: "Data Structures Lab", category: "PC", credits: 2 },
      {
        code: "UCS2313",
        title: "Object-Oriented Programming Lab",
        category: "PC",
        credits: 1.5,
      },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "UMA2476", title: "Probability and Statistics", category: "BS", credits: 4 },
      { code: "AHS2476", title: "Indian Constitution", category: "HS", credits: 0 },
      {
        code: "UCS2401",
        title: "Computer Organization and Architecture",
        category: "PC",
        credits: 3,
      },
      { code: "UCS2402", title: "Operating Systems", category: "PC", credits: 3 },
      {
        code: "UCS2403",
        title: "Design and Analysis of Algorithms (TCP)",
        category: "PC",
        credits: 4,
      },
      { code: "UCS2404", title: "Database Management Systems", category: "PC", credits: 3 },
      { code: "UCS2412", title: "Operating Systems Lab", category: "PC", credits: 1.5 },
      { code: "UCS2411", title: "Database Lab", category: "PC", credits: 1.5 },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "UCS2501", title: "Computer Networks", category: "PC", credits: 3 },
      {
        code: "UCS2502",
        title: "Microprocessors, Microcontrollers, and Interfacing",
        category: "PC",
        credits: 3,
      },
      {
        code: "UCS2504",
        title: "Foundations of Artificial Intelligence (TCP)",
        category: "PC",
        credits: 4,
      },
      { code: "UCS2503", title: "Software Engineering", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective I", category: "PE", credits: 3 },
      { code: "ME1", title: "Management Elective", category: "HS", credits: 3 },
      { code: "UCS2511", title: "Networks Lab", category: "PC", credits: 1.5 },
      { code: "UCS2512", title: "Microprocessors Lab", category: "PC", credits: 1.5 },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "UCS2601", title: "Internet Programming", category: "PC", credits: 3 },
      { code: "UCS2602", title: "Software System Security", category: "PC", credits: 3 },
      { code: "UCS2604", title: "Principles of Machine Learning", category: "PC", credits: 3 },
      { code: "UCS2603", title: "Theory of Computation", category: "PC", credits: 3 },
      {
        code: "UCS2600",
        title: "Professional Readiness for Innovation, Employability and Entrepreneurship",
        category: "EEC",
        credits: 3,
      },
      { code: "OE1", title: "Open Elective I", category: "OE", credits: 3 },
      { code: "UCS2611", title: "Internet Programming Lab", category: "PC", credits: 1.5 },
      { code: "UCS2612", title: "Machine Learning Lab", category: "PC", credits: 1.5 },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "UCS2701", title: "Distributed Systems", category: "PC", credits: 3 },
      { code: "UCS2703", title: "Software Architecture", category: "PC", credits: 3 },
      { code: "UCS2702", title: "Compiler Design (TCP)", category: "PC", credits: 4 },
      { code: "PE2", title: "Professional Elective II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective IV", category: "PE", credits: 3 },
      { code: "UCS2718", title: "Project Work Phase I", category: "EEC", credits: 3 },
      { code: "UCS2716", title: "Industrial Training / Internship", category: "EEC", credits: 2 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE5", title: "Professional Elective V", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective II", category: "OE", credits: 3 },
      { code: "UCS2818", title: "Project Work Phase II", category: "EEC", credits: 8 },
    ],
  },
];

export const SSN_CSE: Department = {
  id: "cse",
  name: "B.E. Computer Science and Engineering",
  curricula: [
    {
      id: "ssn-cse",
      regulation: "Regulation 2021",
      batch: "B2025",
      batchLabel: "Regulation 2021",
      gradeScaleId: "r2023",
      semesters: SSN_CSE_R2021_SEM,
    },
  ],
};

const SSN_ECE_R2024_SEM: Semester[] = [
  {
    number: 1,
    courses: [
      {
        code: "UEN3186",
        title: "Communicative English (TCP)",
        category: "HS",
        credits: 3,
      },
      {
        code: "UMA3176",
        title: "Algebra and Calculus for Engineers",
        category: "BS",
        credits: 4,
      },
      { code: "UPH3186", title: "Engineering Physics (TCP)", category: "BS", credits: 4 },
      { code: "UCY3186", title: "Engineering Chemistry (TCP)", category: "BS", credits: 4 },
      {
        code: "UGE3188",
        title: "Problem Solving and Python Programming (TCP)",
        category: "ES",
        credits: 3,
      },
      { code: "UGE3176", title: "Engineering Graphics", category: "ES", credits: 3 },
      { code: "UGA3176", title: "Heritage of Tamils", category: "HS", credits: 1 },
      {
        code: "UGEV301",
        title: "SDG Experiential Laboratory I",
        category: "EEC",
        credits: 1,
        excludeFromCgpa: true,
      },
    ],
  },
  {
    number: 2,
    courses: [
      {
        code: "UMA3276",
        title: "Calculus of Vectors, Complex Functions and Laplace Transforms",
        category: "BS",
        credits: 4,
      },
      {
        code: "UEE3251",
        title: "Basic Electrical and Instrumentation Engineering",
        category: "ES",
        credits: 3,
      },
      {
        code: "UEC3286",
        title: "Fundamentals of Electronic Devices (TCP)",
        category: "ES",
        credits: 4,
      },
      {
        code: "UCY3276",
        title: "Environmental Science",
        category: "MC",
        credits: 1,
        excludeFromCgpa: true,
      },
      { code: "HE1", title: "Humanities I-Elective", category: "HS", credits: 3 },
      {
        code: "UEC3201",
        title: "Circuits and Network Analysis",
        category: "ES",
        credits: 4,
      },
      { code: "UGA3276", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "UGE3297",
        title: "Design Thinking and Engineering Practices Laboratory",
        category: "ES",
        credits: 1.5,
      },
      { code: "UEC3211", title: "Circuits and Devices Laboratory", category: "ES", credits: 1.5 },
      {
        code: "UGEV302",
        title: "SDG Experiential Laboratory II",
        category: "EEC",
        credits: 1,
        excludeFromCgpa: true,
      },
    ],
  },
  {
    number: 3,
    courses: [
      {
        code: "UMA3362",
        title: "Probability Theory and Stochastic Processes (TCP)",
        category: "BS",
        credits: 4,
      },
      {
        code: "UHS3386",
        title: "Universal Human Values 2: Understanding Harmony",
        category: "HS",
        credits: 3,
      },
      { code: "UEC3301", title: "Electronic Circuits", category: "PC", credits: 3 },
      { code: "UEC3361", title: "Digital System Design (TCP)", category: "PC", credits: 4 },
      { code: "UEC3302", title: "OOPS and Data Structures", category: "ES", credits: 3 },
      { code: "UEC3303", title: "Signals and Systems", category: "ES", credits: 3 },
      {
        code: "UGE3386",
        title: "Design Thinking, Innovation and Entrepreneurship",
        category: "EEC",
        credits: 3,
      },
      { code: "UEC3311", title: "Electronic Circuits Lab", category: "PC", credits: 1.5 },
      { code: "UEC3312", title: "OOPS and Data Structures Lab", category: "ES", credits: 1.5 },
      {
        code: "UECV303",
        title: "Skills for Industry Readiness I",
        category: "EEC",
        credits: 1,
        excludeFromCgpa: true,
      },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "UMA3451",
        title: "Linear Algebra and Optimization",
        category: "BS",
        credits: 3,
      },
      {
        code: "UEC34101",
        title: "Microprocessors, Microcontroller, and Interfacing",
        category: "PC",
        credits: 3,
      },
      {
        code: "UGA3476",
        title: "Indian Constitution",
        category: "MC",
        credits: 1,
        excludeFromCgpa: true,
      },
      { code: "UEC3402", title: "Digital Signal Processing", category: "PC", credits: 3 },
      { code: "UEC3403", title: "Analog Communication Systems", category: "PC", credits: 3 },
      { code: "UEC3461", title: "Linear Integrated Circuits (TCP)", category: "PC", credits: 4 },
      {
        code: "UEC3411",
        title: "Microprocessors, Microcontroller, and Interfacing Lab",
        category: "PC",
        credits: 1.5,
      },
      {
        code: "UEC3412",
        title: "Digital Signal Processing Laboratory",
        category: "PC",
        credits: 1.5,
      },
      {
        code: "UECV304",
        title: "Skills for Industry Readiness II",
        category: "EEC",
        credits: 1,
        excludeFromCgpa: true,
      },
      {
        code: "UECV305",
        title: "Independent Research/Project Work I/GPP",
        category: "EEC",
        credits: 1,
        excludeFromCgpa: true,
      },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "UEC3501", title: "Digital Communication", category: "PC", credits: 3 },
      { code: "UEC3502", title: "Electromagnetic Fields", category: "PC", credits: 4 },
      { code: "UEC3561", title: "Communication Networks (TCP)", category: "PC", credits: 4 },
      { code: "UEC3503", title: "Principles of VLSI Design", category: "PC", credits: 3 },
      { code: "UEC3504", title: "Control Systems Engineering", category: "PC", credits: 3 },
      { code: "OE1", title: "Open Elective I", category: "OE", credits: 3 },
      {
        code: "UEC3511",
        title: "Analog and Digital Communication Laboratory",
        category: "PC",
        credits: 1.5,
      },
      { code: "UEC3512", title: "VLSI Design Laboratory", category: "PC", credits: 1.5 },
      {
        code: "UECV306",
        title: "Independent Research/Project Work II/GPP",
        category: "EEC",
        credits: 2,
        excludeFromCgpa: true,
      },
    ],
  },
  {
    number: 6,
    courses: [
      { code: "UEC3601", title: "Wireless Communication", category: "PC", credits: 3 },
      { code: "UEC3602", title: "Transmission Lines and Waveguides", category: "PC", credits: 3 },
      { code: "UEC3603", title: "System Design for IoT", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective I", category: "PE", credits: 3 },
      { code: "PE2", title: "Professional Elective II", category: "PE", credits: 3 },
      { code: "UEC3611", title: "Wireless Communication Laboratory", category: "PC", credits: 1.5 },
      { code: "UEC3612", title: "System Design for IoT Laboratory", category: "PC", credits: 1.5 },
      { code: "UEC3617", title: "Mini Project /GPP", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 7,
    courses: [
      {
        code: "UEC3701",
        title: "High Frequency Communication Systems",
        category: "PC",
        credits: 3,
      },
      { code: "UEC3702", title: "Microwave and Antenna Engineering", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective V", category: "PE", credits: 3 },
      { code: "UEC3711", title: "Microwave and Antennas Laboratory", category: "PC", credits: 1 },
      { code: "UEC3718", title: "Project Work Phase I/GPP", category: "EEC", credits: 3 },
      {
        code: "UEC3716",
        title: "Industrial Training /Internship",
        category: "EEC",
        credits: 2,
      },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective II", category: "OE", credits: 3 },
      { code: "UEC3818", title: "Project Work Phase II/GPP", category: "EEC", credits: 8 },
    ],
  },
];

export const SSN_ECE: Department = {
  id: "ece",
  name: "B.E. Electronics and Communication Engineering",
  curricula: [
    {
      id: "ssn-ece",
      regulation: "Regulation 2024",
      batch: "B2025",
      batchLabel: "Regulation 2024",
      gradeScaleId: "r2023",
      semesters: SSN_ECE_R2024_SEM,
    },
  ],
};

const SSN_IT_R2021_SEM: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "UEN2176", title: "Technical English", category: "HS", credits: 3 },
      { code: "UMA2176", title: "Matrices and Calculus", category: "BS", credits: 4 },
      { code: "UPH2176", title: "Engineering Physics", category: "BS", credits: 3 },
      { code: "UCY2176", title: "Engineering Chemistry", category: "BS", credits: 3 },
      {
        code: "UGE2176",
        title: "Problem Solving and Programming in Python",
        category: "ES",
        credits: 3,
      },
      { code: "UGE2177", title: "Engineering Graphics", category: "ES", credits: 3 },
      { code: "UGA2176", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "UGE2197", title: "Programming in Python Laboratory", category: "ES", credits: 1.5 },
      { code: "UGS2197", title: "Physics and Chemistry Laboratory", category: "BS", credits: 1.5 },
    ],
  },
  {
    number: 2,
    courses: [
      {
        code: "UMA2276",
        title: "Complex Functions and Laplace Transforms",
        category: "BS",
        credits: 4,
      },
      {
        code: "UEE2276",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 3,
      },
      { code: "UIT2201", title: "Programming and Data Structures", category: "ES", credits: 4 },
      {
        code: "ACY2276",
        title: "Environmental Science",
        category: "MC",
        credits: 0,
        excludeFromCgpa: true,
      },
      { code: "HE1", title: "Humanities I Elective", category: "HS", credits: 3 },
      {
        code: "UPH2251",
        title: "Physics for Information Science and Technology",
        category: "BS",
        credits: 3,
      },
      { code: "UGA2276", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "UGE2297",
        title: "Design Thinking and Engineering Practices Laboratory",
        category: "ES",
        credits: 1.5,
      },
      { code: "UIT2211", title: "Software Development Project - I", category: "ES", credits: 1.5 },
    ],
  },
  {
    number: 3,
    courses: [
      { code: "UMA2377", title: "Discrete Mathematics", category: "BS", credits: 4 },
      {
        code: "UHS2376",
        title: "Universal Human Values 2: Understanding Harmony",
        category: "HS",
        credits: 3,
      },
      { code: "UIT2301", title: "Programming and Design Patterns", category: "ES", credits: 3 },
      { code: "UIT2302", title: "Database Technology", category: "PC", credits: 3 },
      {
        code: "UIT2304",
        title: "Digital Logic and Computer Organization",
        category: "PC",
        credits: 3,
      },
      {
        code: "UIT2305",
        title: "Introduction to Digital Communication",
        category: "ES",
        credits: 3,
      },
      { code: "UIT2311", title: "Database Technology Laboratory", category: "PC", credits: 1.5 },
      {
        code: "UIT2312",
        title: "Programming and Design Patterns Laboratory",
        category: "ES",
        credits: 1.5,
      },
    ],
  },
  {
    number: 4,
    courses: [
      { code: "UMA2476", title: "Probability and Statistics", category: "BS", credits: 4 },
      { code: "UIT2401", title: "Microprocessor and Microcontroller", category: "PC", credits: 3 },
      {
        code: "AHS2476",
        title: "Indian Constitution",
        category: "MC",
        credits: 0,
        excludeFromCgpa: true,
      },
      {
        code: "UIT2402",
        title: "Advanced Data Structures and Algorithm Analysis",
        category: "PC",
        credits: 5,
      },
      { code: "UIT2403", title: "Data Communication and Networks", category: "PC", credits: 3 },
      { code: "UIT2404", title: "Automata Theory and Compiler Design", category: "PC", credits: 3 },
      { code: "UIT2411", title: "Network Programming Laboratory", category: "PC", credits: 1.5 },
      {
        code: "UIT2412",
        title: "Digital Systems and Microprocessor Laboratory",
        category: "PC",
        credits: 1.5,
      },
    ],
  },
  {
    number: 5,
    courses: [
      {
        code: "UIT2501",
        title: "Principles of Software Engineering and Practices",
        category: "PC",
        credits: 3,
      },
      { code: "UIT2502", title: "Data Analytics and Visualization", category: "PC", credits: 4 },
      { code: "UIT2503", title: "Principles of Operating Systems", category: "PC", credits: 3 },
      { code: "UIT2504", title: "Artificial Intelligence", category: "PC", credits: 3 },
      { code: "PE1", title: "Professional Elective I", category: "PE", credits: 3 },
      { code: "ME1", title: "Management Elective", category: "HS", credits: 3 },
      { code: "UIT2511", title: "Software Development Project - II", category: "PC", credits: 1.5 },
      {
        code: "UIT2512",
        title: "Operating Systems Practices Laboratory",
        category: "PC",
        credits: 1.5,
      },
    ],
  },
  {
    number: 6,
    courses: [
      {
        code: "UIT2601",
        title: "Pattern Recognition and Machine Learning",
        category: "PC",
        credits: 4,
      },
      { code: "UIT2602", title: "Web Programming", category: "PC", credits: 5 },
      {
        code: "UIT2603",
        title: "Internet of Things and C programming",
        category: "PC",
        credits: 4,
      },
      { code: "PE2", title: "Professional Elective II", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective I", category: "OE", credits: 3 },
      {
        code: "UIT2611",
        title: "Mobile Application Development Laboratory",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "UIT2701", title: "Network and Communication Security", category: "PC", credits: 3 },
      { code: "UIT2702", title: "Cloud and Distributed Computing", category: "PC", credits: 3 },
      { code: "PE3", title: "Professional Elective III", category: "PE", credits: 3 },
      { code: "PE4", title: "Professional Elective IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective V", category: "PE", credits: 3 },
      { code: "UIT2718", title: "Project Work - Phase 1", category: "EEC", credits: 3 },
      {
        code: "UIT2716",
        title: "Industrial Training /Internship",
        category: "EEC",
        credits: 2,
      },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective II", category: "OE", credits: 3 },
      { code: "UIT2818", title: "Project Work - Phase 2", category: "EEC", credits: 8 },
    ],
  },
];

export const SSN_IT: Department = {
  id: "it",
  name: "B.Tech. Information Technology",
  curricula: [
    {
      id: "ssn-it",
      regulation: "Regulation 2021",
      batch: "B2025",
      batchLabel: "Regulation 2021",
      gradeScaleId: "r2023",
      semesters: SSN_IT_R2021_SEM,
    },
  ],
};

const SSN_EEE_R2021_SEM: Semester[] = [
  {
    number: 1,
    courses: [
      { code: "UEN2176", title: "Technical English", category: "HS", credits: 3 },
      { code: "UMA2176", title: "Matrices and Calculus", category: "BS", credits: 4 },
      { code: "UPH2176", title: "Engineering Physics", category: "BS", credits: 3 },
      { code: "UCY2176", title: "Engineering Chemistry", category: "BS", credits: 3 },
      {
        code: "UGE2176",
        title: "Problem Solving and Programming in Python",
        category: "ES",
        credits: 3,
      },
      { code: "UGE2177", title: "Engineering Graphics", category: "ES", credits: 3 },
      { code: "UGA2176", title: "Heritage of Tamils", category: "HS", credits: 1 },
      { code: "UGE2197", title: "Programming in Python Laboratory", category: "ES", credits: 1.5 },
      { code: "UGS2197", title: "Physics and Chemistry Laboratory", category: "BS", credits: 1.5 },
    ],
  },
  {
    number: 2,
    courses: [
      {
        code: "UMA2276",
        title: "Complex Functions and Laplace Transforms",
        category: "BS",
        credits: 4,
      },
      {
        code: "UEE2276",
        title: "Basic Electrical and Electronics Engineering",
        category: "ES",
        credits: 3,
      },
      {
        code: "UEE2201",
        title: "Electrical Circuits and Systems - Fundamentals and Practices",
        category: "ES",
        credits: 5.5,
      },
      {
        code: "ACY2276",
        title: "Environmental Science",
        category: "MC",
        credits: 0,
        excludeFromCgpa: true,
      },
      { code: "HE1", title: "Humanities I-Elective", category: "HS", credits: 3 },
      {
        code: "UME2251",
        title: "Engineering Mechanics for Electrical Engineers",
        category: "ES",
        credits: 3,
      },
      { code: "UGA2276", title: "Tamils and Technology", category: "HS", credits: 1 },
      {
        code: "UGE2297",
        title: "Design Thinking and Engineering Practices Laboratory",
        category: "ES",
        credits: 1.5,
      },
    ],
  },
  {
    number: 3,
    courses: [
      {
        code: "UMA2376",
        title: "Transform Techniques and Partial Differential Equation",
        category: "BS",
        credits: 4,
      },
      {
        code: "UHS2376",
        title: "Universal Human Values 2: Understanding Harmony",
        category: "HS",
        credits: 3,
      },
      { code: "UEC2376", title: "Signals and Systems", category: "PC", credits: 3 },
      { code: "UEE2301", title: "Electromagnetic Theory", category: "PC", credits: 3 },
      {
        code: "UEE2302",
        title: "OOPS and Data Structures for Electrical Engineering",
        category: "ES",
        credits: 3,
      },
      { code: "UEE2303", title: "Electronic Devices and Circuits", category: "PC", credits: 3 },
      { code: "UEE2311", title: "Electronics Laboratory", category: "PC", credits: 1.5 },
      {
        code: "UEE2312",
        title: "OOPS and Data Structures Laboratory for Electrical Engineering",
        category: "ES",
        credits: 1.5,
      },
    ],
  },
  {
    number: 4,
    courses: [
      {
        code: "UMA2452",
        title: "Probability and Statistics for Electrical Engineering",
        category: "BS",
        credits: 3,
      },
      {
        code: "AHS2476",
        title: "Indian Constitution",
        category: "MC",
        credits: 0,
        excludeFromCgpa: true,
      },
      { code: "UEE2401", title: "Electrical Machines - I", category: "PC", credits: 3 },
      { code: "UEE2402", title: "Analog Electronic Circuits", category: "PC", credits: 3 },
      { code: "UEE2476", title: "Control Systems Engineering", category: "PC", credits: 3 },
      {
        code: "UEE2403",
        title: "Generation, Transmission and Distribution",
        category: "PC",
        credits: 4,
      },
      {
        code: "UEE2411",
        title: "Electrical Machines - I Laboratory",
        category: "PC",
        credits: 1.5,
      },
      {
        code: "UEE2412",
        title: "Analog Electronic Circuits Laboratory",
        category: "PC",
        credits: 1.5,
      },
    ],
  },
  {
    number: 5,
    courses: [
      { code: "UEE2501", title: "Power Electronics", category: "PC", credits: 3 },
      { code: "UEE2502", title: "Electrical Machines - II", category: "PC", credits: 3 },
      {
        code: "UEE2503",
        title: "Electrical Measurements and Instrumentation Systems",
        category: "PC",
        credits: 3,
      },
      {
        code: "UEE2504",
        title: "Digital Logic System Design and Practices",
        category: "PC",
        credits: 4.5,
      },
      { code: "ME1", title: "Management Elective", category: "HS", credits: 3 },
      { code: "PE1", title: "Professional Elective I", category: "PE", credits: 3 },
      {
        code: "UEE2511",
        title: "Electrical Machines - II Laboratory",
        category: "PC",
        credits: 1.5,
      },
      {
        code: "UEE2512",
        title: "Control System and Instrumentation Laboratory",
        category: "PC",
        credits: 2,
      },
    ],
  },
  {
    number: 6,
    courses: [
      {
        code: "UEE2601",
        title: "Microprocessors and Microcontrollers - Fundamentals and Practices",
        category: "PC",
        credits: 4.5,
      },
      { code: "UEE2602", title: "Power System Analysis", category: "PC", credits: 3 },
      { code: "UEE2603", title: "Power System Operation and Control", category: "PC", credits: 3 },
      { code: "PE2", title: "Professional Elective II", category: "PE", credits: 3 },
      { code: "PE3", title: "Professional Elective III", category: "PE", credits: 3 },
      { code: "OE1", title: "Open Elective I", category: "OE", credits: 3 },
      {
        code: "UEE2611",
        title: "Power Electronics and Drives Laboratory",
        category: "PC",
        credits: 2,
      },
      {
        code: "UEE2612",
        title: "Power System Simulation Laboratory",
        category: "PC",
        credits: 1.5,
      },
    ],
  },
  {
    number: 7,
    courses: [
      { code: "UEE2701", title: "Solid State Drives", category: "PC", credits: 3 },
      { code: "UEE2702", title: "Protection and Switchgear", category: "PC", credits: 3 },
      { code: "UEE2703", title: "High Voltage Engineering", category: "PC", credits: 3 },
      { code: "PE4", title: "Professional Elective IV", category: "PE", credits: 3 },
      { code: "PE5", title: "Professional Elective V", category: "PE", credits: 3 },
      {
        code: "UEE2716",
        title: "Industrial Training /Internship",
        category: "EEC",
        credits: 2,
      },
      {
        code: "UEE2711",
        title: "Advanced Electrical and Electronics Design Laboratory",
        category: "PC",
        credits: 2,
      },
      { code: "UEE2718", title: "Project Phase I", category: "EEC", credits: 3 },
    ],
  },
  {
    number: 8,
    courses: [
      { code: "PE6", title: "Professional Elective VI", category: "PE", credits: 3 },
      { code: "OE2", title: "Open Elective II", category: "OE", credits: 3 },
      { code: "UEE2818", title: "Project Phase II", category: "EEC", credits: 8 },
    ],
  },
];

export const SSN_EEE: Department = {
  id: "eee",
  name: "B.E. Electrical and Electronics Engineering",
  curricula: [
    {
      id: "ssn-eee",
      regulation: "Regulation 2021",
      batch: "B2025",
      batchLabel: "Regulation 2021",
      gradeScaleId: "r2023",
      semesters: SSN_EEE_R2021_SEM,
    },
  ],
};
