"use client";

import { CurrentStepLabel } from "@/components/labels/current-step";
import { CurrentStepSecondaryLabel } from "@/components/labels/current-step-secondary";
import { ErrorBanner } from "@/components/error-banner";
import { InputValueLabel } from "@/components/labels/input-value";
import { Keyboard } from "@/components/keyboard";
import { FixBottom } from "@/components/layout/fix-bottom";
import { FixTop } from "@/components/layout/fix-top";
import { StepProgressLabel } from "@/components/labels/step-progress";
import { StepSummaryBar } from "@/components/step-summary-bar";
import { useAppStore } from "@/providers/app-store-provider";

export default function NewCheckPage() {
  const step = useAppStore((state) => state.step);

  return (
    <>
      <FixTop className="border-b-0">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-2">
            <StepSummaryBar />
            <StepProgressLabel />
            <CurrentStepLabel />
          </div>

          <InputValueLabel />
          <CurrentStepSecondaryLabel />
        </div>
      </FixTop>

      <FixBottom className="border-t-0 bg-muted">
        <ErrorBanner />
        <Keyboard />
      </FixBottom>
    </>
  );
}
