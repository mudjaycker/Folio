import from_base from "./from_base";
import to_base from "./to_base";

export default function convert(str: string|number, from_: number = 2, to: number = 10) {
  let numFrom = from_base(String(str), from_);
  let numTo = to_base(numFrom, to);
  return numTo;
}
