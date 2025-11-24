import type { Step } from "@/models/step";
import type { Variables } from "@/models/variables";

export function getUnitLabel(step: Step, variables: Variables): string | null {
  if (step === "saturationOfPeripheralOxygen") return "%";

  const variable = variables[step];

  if (typeof variable === "object" && variable !== null && "unit" in variable) {
    return variable.unit;
  }

  return null;
}
