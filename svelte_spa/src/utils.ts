export const list = Array.from;
export const print_ = console.log;
export const int = (num: string | number) =>
    !num ? 0 : parseInt(`${Number(num)}`);

export function* range(
    begin: number,
    end: number | undefined = undefined,
    step: number = 1
): Generator<number> {
    if (!end) {
        [end, begin] = [begin, 0];
    }

    for (let i = begin; step < 0 ? i > end : i < end; i += step) {
        yield i;
    }
}

export function* loop<T>(iterable: Iterable<T>): Generator<T> {
    let index = 0;
    let array = list(iterable);
    let last_index = array.length - 1;
    while (true) {
        if (index == last_index) {
            index = 0;
        }
        yield array[index];
        index++;
    }
}

export function* enumerate<T>(array: T[]) {
    for (let i of range(array.length)) {
        yield [i, array[i]];
    }
}

export function take<T>(array: ArrayLike<T>, val: number) {
    const datas = list(array);
    return val < 0 ? datas[datas.length + val] : datas[val];
}

export const filterNumIn = async (num: string | number, chars: string[]) => {
    return String(num)
        .split("")
        .filter((x) => chars.includes(x))
        .join("");
};

export function isPositiveNumber(chars: string) {
    const numbers = list(range(10)).map((i) => String(i)); // list from string 0 to  string 9
    let conditions = list(chars).map((x) => numbers.includes(x));
    return conditions.every(Boolean);
}

export function multList<T>(array: ArrayLike<T>, mult: number) {
    let arrayList = list(array);
    const n = int(mult);
    const res = [];

    for (let _ of range(n)) {
        res.push(...arrayList);
    }
    return res;
}

export const zfill = (value: number | string, zeros = 2) =>
    String(value).padStart(zeros, "0");

export function replace(str: string, from_: string[], to: string) {
    let res = ""
    for(let i of str){
        if(from_.includes(i)){
            res += to
            
        }else{
            res+=i
        }
    }
    
    return res;
}

// let txt = "jeux de malade-avec plein de chose";

// print_( replace(txt, [" ", "-"], "_"));
