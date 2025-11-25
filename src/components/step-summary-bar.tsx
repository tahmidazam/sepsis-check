import { cn } from "@/lib/utils";
import {
  isDimensionedStep,
  isNumericalStep,
  type Step,
  STEPS,
} from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function StepSummaryBar() {
  const step = useAppStore((state) => state.step);
  const omittedVariables = useAppStore((state) => state.omittedVariables);
  const variables = useAppStore((state) => state.variables);

  const stepIsCompleted = (step: Step) => {
    if (isNumericalStep(step)) {
      if (isDimensionedStep(step)) {
        const value = variables[step].value ?? null;

        return value !== null;
      }
    }

    const value = variables[step] ?? null;
    return value !== null;
  };
  return (
    <div className={`h-1 flex flex-row gap-1`}>
      {STEPS.map((stepElement: Step) => {
        return (
          <div
            key={stepElement}
            className={cn(
              "w-full rounded-full",
              omittedVariables.includes(stepElement) && "bg-muted",
              stepIsCompleted(stepElement) && "bg-green-500",
              step === stepElement && "bg-primary",
            )}
          ></div>
        );
      })}
    </div>
  );
}
