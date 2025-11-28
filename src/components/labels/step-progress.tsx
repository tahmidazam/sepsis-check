import { useStep } from "@/hooks/state";
import { STEPS } from "@/models/step";

export function StepProgressLabel() {
  const step = useStep();

  return (
    <p className="text-sm text-muted-foreground">
      Step {STEPS.indexOf(step) + 1} of {STEPS.length}
    </p>
  );
}
