import { range } from "../../../utils";

export const upLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowLetters = upLetters.map((l) => l.toLowerCase());

export const letters = [
  ...upLetters,
  ...lowLetters
]

const NUM_MAP: Map<number, string> = new Map();

for (let i of range(10)) {
  NUM_MAP.set(i, String(i));
}

for (let i in upLetters) {
  NUM_MAP.set(Number(i) + 10, upLetters[i]);
}

export default NUM_MAP;
