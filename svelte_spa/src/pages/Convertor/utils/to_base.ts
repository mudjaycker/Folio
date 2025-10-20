import { int } from "../../../utils";
import NUM_MAP from "./consts";

function to_base(_number: number | string, base: number | string = 2) {
  let result = "0";

  if (!_number || !base) return "0";

  let temp = int(_number);
  base = int(base);

  while (temp > 0) {
    let mod = temp % base;
    temp = int(temp / base);
    let mod2 = NUM_MAP.get(mod);
    result = mod2 + result;
  }
  return result;
}

export default to_base;
