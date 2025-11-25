import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { STEP_UNIT_CASES } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function UnitPad() {
  const unitsPickerIsPresented = useAppStore(
    (state) => state.unitsPickerIsPresented,
  );
  const step = useAppStore((state) => state.step);
  const stepOmitted = useAppStore((state) =>
    state.omittedVariables.includes(state.step),
  );
  const value = useAppStore((state) => {
    const variable = state.variables[state.step];
    if (
      typeof variable === "object" &&
      variable !== null &&
      "unit" in variable
    ) {
      return variable.unit;
    }
    return null;
  });

  const setUnit = useAppStore((state) => state.setUnit);

  const unitCases = STEP_UNIT_CASES[step];

  if (!unitsPickerIsPresented || !unitCases || !value) return null;

  return (
    <>
      {unitCases.map((unit) => {
        const selected = value === unit;
        return (
          <Button
            key={unit}
            variant="outline"
            className={cn("h-full", selected && "bg-green-50 border-green-500")}
            onClick={() => setUnit(unit)}
            disabled={stepOmitted}
          >
            {unit}
          </Button>
        );
      })}
    </>
  );
}
