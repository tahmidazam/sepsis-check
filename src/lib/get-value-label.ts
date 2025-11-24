import {
  isDimensionedStep,
  isDimensionlessStep,
  isEnumStep,
  isNumericalStep,
  type Step,
  STEP_ENUM_CASES,
} from "@/models/step";
import type { Variables } from "@/models/variables";

export function getValueLabel(step: Step, variables: Variables): string | null {
  if (isEnumStep(step)) {
    const value = variables[step];
    const labels = STEP_ENUM_CASES[step]?.labels;

    if (!value || !labels) return null;

    return labels[value as keyof typeof labels];
  }

  if (isNumericalStep(step)) {
    if (isDimensionedStep(step)) {
      return variables[step]?.value?.toString() ?? null;
    }
    if (isDimensionlessStep(step)) {
      return variables[step]?.toString() ?? null;
    }
  }

  return null;
}
