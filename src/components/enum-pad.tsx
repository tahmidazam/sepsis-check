import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type EnumStep, isEnumStep, STEP_ENUM_CASES } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export function EnumPad() {
  const stepIsEnum = useAppStore((state) => isEnumStep(state.step));
  const step = useAppStore((state) => state.step);
  const stepEnumCase = STEP_ENUM_CASES[step];
  const stepIsOmitted = useAppStore((state) =>
    state.omittedVariables.includes(state.step),
  );
  const setEnum = useAppStore((state) => state.setEnum);
  const value = useAppStore((state) => {
    const step = state.step;

    if (!isEnumStep(step)) {
      return null;
    }

    return state.variables[step as EnumStep] ?? null;
  });

  if (!stepIsEnum || !stepEnumCase || stepIsOmitted) return null;

  const { cases, labels } = stepEnumCase;

  return (
    <>
      {cases.map((key) => {
        const selected = value === key;

        return (
          <Button
            key={key}
            variant="outline"
            className={cn(
              "h-full relative",
              cases.length < 4 ? "col-span-3" : "col-span-1",
              selected && "bg-green-50 border-green-500",
            )}
            onClick={() => setEnum(key)}
          >
            {labels[key as keyof typeof labels]}
          </Button>
        );
      })}
    </>
  );
}
