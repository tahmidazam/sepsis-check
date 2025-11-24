"use client";

import { EnumPad } from "@/components/enum-pad";
import { FinishButton } from "@/components/finish-button";
import { NextStepButton } from "@/components/next-step-button";
import { NumberPad } from "@/components/number-pad";
import { PreviousStepButton } from "@/components/previous-step-button";
import { RecordValueButton } from "@/components/record-value-button";
import { ResetButton } from "@/components/reset-button";
import { ReturnHomeButton } from "@/components/return-home-button";
import { ButtonGroup } from "@/components/ui/button-group";
import { UnitPad } from "@/components/unit-pad";
import { UnitPadToggleButton } from "@/components/unit-pad-toggle-button";

export function Keyboard() {
  return (
    <div
      className="flex flex-col gap-2 px-4 pt-2 bg-muted border-t"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom) + var(--spacing) * 2)",
      }}
    >
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
