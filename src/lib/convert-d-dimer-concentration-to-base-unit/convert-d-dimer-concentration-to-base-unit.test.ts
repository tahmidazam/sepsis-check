import { describe, expect, it } from "vitest";
import { convertDDimerConcentrationToBaseUnit } from "@/lib/convert-d-dimer-concentration-to-base-unit/convert-d-dimer-concentration-to-base-unit";

describe("convertDDimerConcentrationToBaseUnit", () => {
  it("should convert 1 ng/mL FEU to 0.001 mg/L FEU", () => {
    expect(convertDDimerConcentrationToBaseUnit(1, "ng/mL FEU")).toBe(0.001);
  });

  it("should convert 1 mcg/L FEU to 0.001 mg/L FEU", () => {
    expect(convertDDimerConcentrationToBaseUnit(1, "mcg/L FEU")).toBe(0.001);
  });
});
