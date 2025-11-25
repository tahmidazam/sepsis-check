"use client";

import { EnumPad } from "@/components/pads/enum";
import { FinishButton } from "@/components/buttons/finish";
import { NextStepButton } from "@/components/buttons/next-step";
import { NumberPad } from "@/components/pads/number";
import { PreviousStepButton } from "@/components/buttons/previous-step";
import { RecordValueButton } from "@/components/buttons/record-value";
import { ResetButton } from "@/components/buttons/reset";
import { ReturnHomeButton } from "@/components/buttons/return-home";
import { ButtonGroup } from "@/components/ui/button-group";
import { UnitPad } from "@/components/pads/unit";
import { UnitPadToggleButton } from "@/components/buttons/unit-pad-toggle";

export function Keyboard() {
  return (
    <div className="flex flex-col gap-2 px-4 py-2 bg-muted border-t">
      <div className="grid grid-cols-3 gap-2">
        <ButtonGroup orientation="horizontal" className="w-full">
          <ReturnHomeButton />

          <ResetButton />
        </ButtonGroup>

        <UnitPadToggleButton />

        <ButtonGroup orientation="horizontal" className="w-full">
          <PreviousStepButton />

          <NextStepButton />

          <FinishButton />
        </ButtonGroup>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 gap-2 h-[216px]">
        <UnitPad />

        <NumberPad />

        <EnumPad />

        <RecordValueButton />
      </div>
    </div>
  );
}
