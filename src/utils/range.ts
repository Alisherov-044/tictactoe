export function range(start: number, end: number, step: number = 1): number[] {
  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
