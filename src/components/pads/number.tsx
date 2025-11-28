import { Delete } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  useAppActions,
  useDecimalPresentInInputValue,
  useStepIsInteger,
  useStepIsNumerical,
  useStepIsOmitted,
  useUnitsPickerIsPresented,
} from "@/hooks/state";
import { KEY_CASES, type Key } from "@/models/key";

export function NumberPad() {
  const unitsPickerIsPresented = useUnitsPickerIsPresented();
  const decimalPresentInInputValue = useDecimalPresentInInputValue();
  const stepIsInteger = useStepIsInteger();
  const stepIsNumerical = useStepIsNumerical();
  const stepIsOmitted = useStepIsOmitted();

  const { pressKey } = useAppActions();

  if (unitsPickerIsPresented || !stepIsNumerical || stepIsOmitted) return null;

  return (
    <>
      {KEY_CASES.map((key: Key) => (
        <Button
          key={key}
          variant={["backspace", "."].includes(key) ? "ghost" : "outline"}
          className="text-lg h-full"
          onClick={() => pressKey(key)}
          disabled={
            key === "." && (decimalPresentInInputValue || stepIsInteger)
          }
        >
          {key === "backspace" ? <Delete /> : key}
        </Button>
      ))}
    </>
  );
}
