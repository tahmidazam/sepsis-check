import type { PlateletConcentrationUnit } from "@/models/units/platelet-concentration";

export function convertPlateletConcentrationToBaseUnit(
  value: number,
  unit: PlateletConcentrationUnit
): number {
  switch (unit) {
    case "x10^3/mcL":
    case "x10^9/L":
      return value;
  }
}
