// 정수부에만 천 단위 콤마를 넣는다. 소수부까지 정규식을 걸면
// "122227436.38164121" → "122,227,436.38,164,121" 처럼 깨진다.
export function formatWithCommas(value: number | string): string {
  const str = typeof value === "number" ? value.toString() : value;
  const [intPart, fracPart] = str.split(".");
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fracPart !== undefined ? `${grouped}.${fracPart}` : grouped;
}
