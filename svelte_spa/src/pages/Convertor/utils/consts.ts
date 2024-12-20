export const letters = [
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

const NUM_MAP: Map<number, string> = new Map();

for (let i = 0; i < 10; i++) {
  NUM_MAP.set(i, String(i));
}

for (let i in letters) {
  NUM_MAP.set(Number(i) + 10, letters[i]);
}

export default NUM_MAP;
