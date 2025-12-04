import type { Variables } from "@/models/variables";
import { convertPlateletConcentrationToBaseUnit } from "../convert-platelet-concentration-to-base-unit/convert-platelet-concentration-to-base-unit";

export function scorePlateletSubcomponent(variables: Variables): number | null {
  const { plateletConcentration } = variables;

  if (!plateletConcentration) return null;

  const { value, unit } = plateletConcentration;

  if (!value || !unit) return null;

  const plateletConcentrationInBaseUnit =
    convertPlateletConcentrationToBaseUnit(value, unit);

  if (plateletConcentrationInBaseUnit < 100) {
    return 1;
  } else {
    return 0;
  }
}
