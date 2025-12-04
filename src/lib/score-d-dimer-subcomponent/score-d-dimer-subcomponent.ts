import { convertDDimerConcentrationToBaseUnit } from "@/lib/convert-d-dimer-concentration-to-base-unit/convert-d-dimer-concentration-to-base-unit";
import type { Variables } from "@/models/variables";

export function scoreDDimerSubcomponent(variables: Variables): number | null {
  const { dDimerConcentration } = variables;

  if (!dDimerConcentration) return null;

  const { value, unit } = dDimerConcentration;

  if (!value || !unit) return null;

  const dDimerConcentrationInBaseUnit = convertDDimerConcentrationToBaseUnit(
    value,
    unit
  );

  if (dDimerConcentrationInBaseUnit > 2) {
    return 1;
  } else {
    return 0;
  }
}
