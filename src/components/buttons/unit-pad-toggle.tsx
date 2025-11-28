"use client";

import { Button } from "@/components/ui/button";
import { useAppActions, useStepIsOmitted, useUnitValue } from "@/hooks/state";

export function UnitPadToggleButton() {
  const { toggleUnitPad } = useAppActions();
  const stepOmitted = useStepIsOmitted();
  const unit = useUnitValue();

  if (!unit)
    return <Button variant="outline" disabled={true} className="h-12"></Button>;

  return (
    <Button
      variant="outline"
      onClick={toggleUnitPad}
      disabled={stepOmitted}
      className="h-12"
    >
      {unit}
    </Button>
  );
}
