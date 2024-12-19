import { int, list } from "../../../utils";
import NUM_MAP from "./consts";

const INVERTED_MAP: Map<string, number> = new Map();

for (let data of NUM_MAP) {
  INVERTED_MAP.set(data[1], data[0]);
}

function from_base(number_: string, base: number = 2): number {
  let result = 0;
  let mapKeys = NUM_MAP.values();
  let intervals = list(mapKeys).slice(0, base);
  number_.split("").filter((n) => {
    if (!intervals.includes(n.toUpperCase()))
      throw new RangeError(
        `Input ${number_} is not in range ${intervals}`
      );
  });

  let number_list = number_
    .split("")
    .map((x) => x.toUpperCase())
    .reverse();

  for (let i = 0; i < number_list.length; i++) {
    let v = number_list[i];
    let char = INVERTED_MAP.get(v);

    //@ts-ignore
    result += char * Math.pow(base, i);
  }

  return result;
}

export default from_base;
