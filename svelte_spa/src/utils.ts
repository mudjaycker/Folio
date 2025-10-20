export const list = Array.from;
export const print_ = console.log;
export const int = (num: string | number) => {
    if (!num) {
        return 0;
    } else {
        return parseInt(`${Number(num)}`);
    }
};
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

export const filterNumIn = (num: string | number, chars: string[]) => {
    return String(num)
        .split("")
        .filter((x) => chars.includes(x))
        .join("");
};

export function isNumeric(value: string) {
    const numbers = list(range(0, 10)).map((i) => String(i)); // list from 0 to 9
    for (let i of value) {
        if (!numbers.includes(i)) {
            return false;
        }
    }
    return true;
}
