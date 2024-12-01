export const list = Array.from;
export const print_ = console.log;

export function* range(
  begin: number,
  end: number | null = null,
  step: number = 1
): Generator<number> {
  if (end == null) {
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
