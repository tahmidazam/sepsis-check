import type { DDimerConcentrationUnit } from "@/models/units/d-dimer-concentration";

export function convertDDimerConcentrationToBaseUnit(
  value: number,
  unit: DDimerConcentrationUnit
): number {
  switch (unit) {
    case "mg/L FEU":
      return value;
    case "mcg/L FEU":
      return value / 1e3;
    case "ng/mL FEU":
      return value / 1e3;
  }
}
