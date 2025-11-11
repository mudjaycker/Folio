import { int, list, range } from "../../../utils";
import NUM_MAP from "./consts";

const INVERTED_MAP: Map<string, number> = new Map();

for (let data of NUM_MAP) {
    INVERTED_MAP.set(data[1], data[0]);
}

function from_base(number_: string, base: number = 2): number {
    let result = 0;
    let mapKeys = NUM_MAP.values();
    let intervals = list(mapKeys).slice(0, base);

    number_.split("").forEach((n) => {
        if (!intervals.includes(n.toUpperCase()))
            throw new RangeError(
                `Input "${number_}" is not in range [${intervals}]`
            );
    });

    let number_list = number_
        .split("")
        .map((x) => x.toUpperCase())
        .reverse();

    for (let i of range(number_list.length)) {
        let n = number_list[i];
        let invertMapValue = INVERTED_MAP.get(n);

        //@ts-ignore
        result += invertMapValue * Math.pow(base, i);
    }

    return result;
}

export default from_base;
