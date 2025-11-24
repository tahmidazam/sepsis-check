"use client";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/providers/app-store-provider";

export function UnitPadToggleButton() {
  const toggleUnitPad = useAppStore((state) => state.toggleUnitPad);
  const stepOmitted = useAppStore((state) =>
    state.omittedVariables.includes(state.step)
  );
  const unit = useAppStore((state) => {
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
