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
