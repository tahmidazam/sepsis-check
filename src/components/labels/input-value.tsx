import {
  useEnumLabel,
  useInputValue,
  useStepIsOmitted,
  useUnitLabel,
} from "@/hooks/state";
import { cn } from "@/lib/utils";

export function InputValueLabel() {
  const inputValue = useInputValue();
  const stepIsOmitted = useStepIsOmitted();
  const enumValue = useEnumLabel();
  const unit = useUnitLabel();

  const label = enumValue ?? (inputValue === "" ? undefined : inputValue);

  return (
    <div className="flex flex-row justify-between items-end">
      <p
        className={cn(
          "text-6xl",
          label === undefined && "text-muted-foreground/35"
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
