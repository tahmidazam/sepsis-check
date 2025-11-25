import { Button } from "@/components/ui/button";
import { type Key, KEY_CASES } from "@/models/key";
import { isIntegerStep, isNumericalStep } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";
import { Delete } from "lucide-react";

export function NumberPad() {
  const unitsPickerIsPresented = useAppStore(
    (state) => state.unitsPickerIsPresented,
  );
  const pressKey = useAppStore((state) => state.pressKey);
  const decimalPresentInInputValue = useAppStore((state) =>
    state.inputValue.includes("."),
  );
  const stepIsInteger = useAppStore((state) => isIntegerStep(state.step));
  const stepIsNumerical = useAppStore((state) => isNumericalStep(state.step));
  const stepIsOmitted = useAppStore((state) =>
    state.omittedVariables.includes(state.step),
  );

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
