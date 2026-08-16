import type { College } from "@/types/curriculum";
import { DEPARTMENTS } from "./departments";

export const REC: College = {
  id: "rec",
  name: "Rajalakshmi Engineering College",
  shortName: "REC",
  departments: DEPARTMENTS,
};

export const RIT: College = {
  id: "rit",
  name: "Rajalakshmi Institute of Technology",
  shortName: "RIT",
  departments: DEPARTMENTS,
};

export const CEG: College = {
  id: "ceg",
  name: "College of Engineering, Guindy",
  shortName: "CEG",
  departments: DEPARTMENTS,
};

export const MIT: College = {
  id: "mit",
  name: "Madras Institute of Technology, Chromepet",
  shortName: "MIT",
  departments: DEPARTMENTS,
};

export const SEC: College = {
  id: "sec",
  name: "Saveetha Engineering College",
  shortName: "SEC",
  departments: DEPARTMENTS,
};

export const SKCET: College = {
  id: "skcet",
  name: "Sri Krishna College of Engineering and Technology",
  shortName: "SKCET",
  departments: DEPARTMENTS,
};

export const SSN: College = {
  id: "ssn",
  name: "SSN College of Engineering",
  shortName: "SSN",
  departments: DEPARTMENTS,
};

export const COLLEGES: College[] = [
  REC,
  { ...RIT, available: false },
  { ...CEG, available: false },
  { ...MIT, available: false },
  { ...SEC, available: false },
  { ...SKCET, available: false },
  { ...SSN, available: false },
];
