import { useStep } from "@/hooks/state";
import { STEP_PRIMARY_LABELS } from "@/models/step";

export function CurrentStepLabel() {
  const step = useStep();

  return <h1 className="font-medium text-xl">{STEP_PRIMARY_LABELS[step]}</h1>;
}
