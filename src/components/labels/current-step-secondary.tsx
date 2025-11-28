import { useStep } from "@/hooks/state";
import { STEP_SECONDARY_LABELS } from "@/models/step";

export function CurrentStepSecondaryLabel() {
  const step = useStep();
  const label = STEP_SECONDARY_LABELS[step];

  if (!label) return null;

  return (
    <p className="text-sm text-muted-foreground text-left text-balance">
      {label}
    </p>
  );
}
