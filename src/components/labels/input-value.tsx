import { getUnitLabel } from "@/lib/get-unit-label";
import { cn } from "@/lib/utils";
import { ENUM_STEP_CASES, isEnumStep, STEP_ENUM_CASES } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function InputValueLabel() {
  const inputValue = useAppStore((state) => state.inputValue);
  const stepIsOmitted = useAppStore((state) =>
    state.omittedVariables.includes(state.step),
  );
  const enumValue: string | null = useAppStore((state) => {
    if (!isEnumStep(state.step)) return null;

    const value = state.variables[state.step];
    const labels = STEP_ENUM_CASES[state.step]?.labels;

    if (!value || !labels) return null;

    return labels[value as keyof typeof labels];
  });
  const unit = useAppStore((state) =>
    getUnitLabel(state.step, state.variables),
  );

  const label = enumValue ?? (inputValue === "" ? undefined : inputValue);

  return (
    <div className="flex flex-row justify-between items-end">
      <p
        className={cn(
          "text-6xl",
          label === undefined && "text-muted-foreground/35",
        )}
      >
        {label ?? "--"}
      </p>
      {unit && !stepIsOmitted && (
        <p className="text-2xl text-muted-foreground">{unit}</p>
      )}
    </div>
  );
}
