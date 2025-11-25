import sumNonNullElements from "@/lib/sum-non-null-elements/sum-non-null-elements";
import { describe, expect, it } from "vitest";

describe("sumNonNullElements", () => {
  it("returns null for an empty array", () => {
    expect(sumNonNullElements([])).toBeNull();
  });

  it("returns null for an array with only null values", () => {
    expect(sumNonNullElements([null, null, null])).toBeNull();
  });

  it("sums only the non-null elements", () => {
    expect(sumNonNullElements([1, null, 3, null, 5])).toBe(9);
  });

  it("sums all elements when there are no nulls", () => {
    expect(sumNonNullElements([1, 2, 3, 4, 5])).toBe(15);
  });
});
