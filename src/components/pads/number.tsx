import { Delete } from "lucide-react";
import { useEffect } from "react";
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

const KEY_MAP: { [key: string]: Key } = {
  Backspace: "backspace",
  ".": ".",
  ",": ".",
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
};

export function NumberPad() {
  const unitsPickerIsPresented = useUnitsPickerIsPresented();
  const decimalPresentInInputValue = useDecimalPresentInInputValue();
  const stepIsInteger = useStepIsInteger();
  const stepIsNumerical = useStepIsNumerical();
  const stepIsOmitted = useStepIsOmitted();

  const { pressKey } = useAppActions();

  useEffect(() => {
    if (unitsPickerIsPresented) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      if (!(key in KEY_MAP)) return;

      event.preventDefault();
      const mappedKey = KEY_MAP[key];

      if (mappedKey === "." && (decimalPresentInInputValue || stepIsInteger))
        return;

      pressKey(mappedKey);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    decimalPresentInInputValue,
    stepIsInteger,
    unitsPickerIsPresented,
    pressKey,
  ]);

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
