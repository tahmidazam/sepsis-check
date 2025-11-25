import { STEPS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function StepProgressLabel() {
  const step = useAppStore((state) => state.step);
  return (
    <p className="text-sm text-muted-foreground">
      Step {STEPS.indexOf(step) + 1} of {STEPS.length}
    </p>
  );
}
