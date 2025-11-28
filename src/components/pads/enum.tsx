import { Button } from "@/components/ui/button";
import {
  useAppActions,
  useEnumValue,
  useStep,
  useStepIsEnum,
  useStepIsOmitted,
} from "@/hooks/state";
import { cn } from "@/lib/utils";
import { STEP_ENUM_CASES } from "@/models/step";

export function EnumPad() {
  const stepIsEnum = useStepIsEnum();
  const step = useStep();
  const stepIsOmitted = useStepIsOmitted();
  const { setEnum } = useAppActions();
  const value = useEnumValue();

  const stepEnumCase = STEP_ENUM_CASES[step];

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
              selected && "bg-green-50 border-green-500"
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
