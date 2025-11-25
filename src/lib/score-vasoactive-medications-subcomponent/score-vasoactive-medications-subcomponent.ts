import type { Variables } from "@/models/variables";

export function scoreVasoactiveMedicationsSubcomponent(
  variables: Variables
): number | null {
  const { vasoactiveMedicationCount } = variables;

  if (!vasoactiveMedicationCount) return null;

  const score = Math.min(vasoactiveMedicationCount, 2);

  return score;
}
