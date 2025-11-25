import { STEP_PRIMARY_LABELS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function CurrentStepLabel() {
  const step = useAppStore((state) => state.step);

  return <h1 className="font-medium text-xl">{STEP_PRIMARY_LABELS[step]}</h1>;
}
