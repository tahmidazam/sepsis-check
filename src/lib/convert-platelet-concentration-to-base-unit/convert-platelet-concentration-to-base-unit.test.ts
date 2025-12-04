import { describe, expect, it } from "vitest";
import { convertPlateletConcentrationToBaseUnit } from "@/lib/convert-platelet-concentration-to-base-unit/convert-platelet-concentration-to-base-unit";

describe("convertPlateletConcentrationToBaseUnit", () => {
  it("should convert 1 x10^9/L to 1 x10^3/mcL", () => {
    expect(convertPlateletConcentrationToBaseUnit(1, "x10^9/L")).toBe(1);
  });
});
