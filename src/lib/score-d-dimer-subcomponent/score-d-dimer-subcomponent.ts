import { convertDDimerConcentrationToBaseUnit } from "@/models/d-dimer-concentration-unit";
import type { Variables } from "@/models/variables";

export function scoreDDimerSubcomponent(variables: Variables): number | null {
  const { dDimerConcentration } = variables;

  if (!dDimerConcentration) return null;

  const { value, unit } = dDimerConcentration;

  if (!value || !unit) return null;

  const dDimerConcentrationInBaseUnit = convertDDimerConcentrationToBaseUnit(
    value,
    unit,
  );

  if (dDimerConcentrationInBaseUnit > 2) {
    return 1;
  } else {
    return 0;
  }
}
