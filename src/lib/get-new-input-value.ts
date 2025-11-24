import type { AppState } from "@/models/app-state";
import {
  type Step,
  isNumericalStep,
  isDimensionedStep,
  type DimensionedStep,
  isDimensionlessStep,
  type DimensionlessStep,
} from "@/models/step";

export function getNewInputValue(
  state: AppState,
  newStep: Step,
): string | undefined {
  if (!isNumericalStep(newStep)) return undefined;

  if (isDimensionedStep(newStep))
    return state.variables[newStep as DimensionedStep].value?.toLocaleString();

  if (isDimensionlessStep(newStep))
    return state.variables[newStep as DimensionlessStep]?.toLocaleString();
}
