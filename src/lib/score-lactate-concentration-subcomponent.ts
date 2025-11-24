import { convertLactateConcentrationToBaseUnit } from "@/models/lactate-conc";
import type { Variables } from "@/models/variables";

export function scoreLactateSubcomponent(variables: Variables): number | null {
  const { lactateConcentration } = variables;

  if (!lactateConcentration) return null;

  const { value, unit } = lactateConcentration;

  if (!value || !unit) return null;

  const lactateConcentrationInBaseUnit = convertLactateConcentrationToBaseUnit(
    value,
    unit,
  );

  if (lactateConcentrationInBaseUnit > 11) {
    return 2;
  } else if (lactateConcentrationInBaseUnit > 5) {
    return 1;
  } else {
    return 0;
  }
}
