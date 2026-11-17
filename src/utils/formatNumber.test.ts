import { formatWithCommas } from "./formatNumber";

describe("formatWithCommas", () => {
  it("정수에 천 단위 콤마", () => {
    expect(formatWithCommas(88050000)).toBe("88,050,000");
    expect(formatWithCommas(999)).toBe("999");
    expect(formatWithCommas(0)).toBe("0");
  });

  it("소수부에는 콤마를 넣지 않는다", () => {
    expect(formatWithCommas(122227436.38164121)).toBe("122,227,436.38164121");
    expect(formatWithCommas(0.12345)).toBe("0.12345");
    expect(formatWithCommas(1234.5678)).toBe("1,234.5678");
  });

  it("음수와 문자열 입력", () => {
    expect(formatWithCommas(-1234567)).toBe("-1,234,567");
    expect(formatWithCommas("1234567")).toBe("1,234,567");
  });
});
