import { STEP_SECONDARY_LABELS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function CurrentStepSecondaryLabel() {
  const step = useAppStore((state) => state.step);

  const label = STEP_SECONDARY_LABELS[step];

  if (!label) return null;

  return (
    <p className="text-sm text-muted-foreground text-left text-balance">
      {label}
    </p>
  );
}
