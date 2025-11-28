import { Button } from "@/components/ui/button";
import {
  useAppActions,
  useNumericalValue,
  useStep,
  useStepIsOmitted,
  useUnitsPickerIsPresented,
} from "@/hooks/state";
import { cn } from "@/lib/utils";
import { STEP_UNIT_CASES } from "@/models/step";

export function UnitPad() {
  const unitsPickerIsPresented = useUnitsPickerIsPresented();
  const step = useStep();
  const stepOmitted = useStepIsOmitted();
  const value = useNumericalValue();

  const { setUnit } = useAppActions();

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
