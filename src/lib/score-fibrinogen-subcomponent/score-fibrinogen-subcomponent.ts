import { convertFibrinogenConcentrationToBaseUnit } from "@/models/units/fibrinogen-concentration";
import type { Variables } from "@/models/variables";

export function scoreFibrinogenSubcomponent(
  variables: Variables
): number | null {
  const { fibrinogenConcentration } = variables;

  if (!fibrinogenConcentration) return null;

  const { value, unit } = fibrinogenConcentration;

  if (!value || !unit) return null;

  const fibrinogenConcentrationInBaseUnit =
    convertFibrinogenConcentrationToBaseUnit(value, unit);

  if (fibrinogenConcentrationInBaseUnit < 100) {
    return 1;
  } else {
    return 0;
  }
}
