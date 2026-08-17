import type { College } from "@/types/curriculum";
import { DEPARTMENTS } from "./departments";
import { SSN_CSE, SSN_ECE, SSN_EEE, SSN_IT } from "./ssn";

export const REC: College = {
  id: "rec",
  name: "Rajalakshmi Engineering College",
  shortName: "REC",
  autonomy: "autonomous",
  departments: DEPARTMENTS,
};

export const RIT: College = {
  id: "rit",
  name: "Rajalakshmi Institute of Technology",
  shortName: "RIT",
  autonomy: "autonomous",
  departments: DEPARTMENTS,
};

export const CEG: College = {
  id: "ceg",
  name: "College of Engineering, Guindy",
  shortName: "CEG",
  autonomy: "non-autonomous",
  departments: DEPARTMENTS,
};

export const MIT: College = {
  id: "mit",
  name: "Madras Institute of Technology, Chromepet",
  shortName: "MIT",
  autonomy: "non-autonomous",
  departments: DEPARTMENTS,
};

export const SEC: College = {
  id: "sec",
  name: "Saveetha Engineering College",
  shortName: "SEC",
  autonomy: "autonomous",
  departments: DEPARTMENTS,
};

export const SKCET: College = {
  id: "skcet",
  name: "Sri Krishna College of Engineering and Technology",
  shortName: "SKCET",
  autonomy: "autonomous",
  departments: DEPARTMENTS,
};

export const SSN: College = {
  id: "ssn",
  name: "SSN College of Engineering",
  shortName: "SSN",
  autonomy: "autonomous",
  departments: [SSN_CSE, SSN_ECE, SSN_EEE, SSN_IT],
};

export const COLLEGES: College[] = [
  REC,
  { ...RIT, available: false },
  { ...CEG, available: false },
  { ...MIT, available: false },
  { ...SEC, available: false },
  { ...SKCET, available: false },
  SSN,
];
