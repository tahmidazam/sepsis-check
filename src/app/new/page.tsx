"use client";

import { ErrorBanner } from "@/components/error-banner";
import { Keyboard } from "@/components/keyboard";
import { CurrentStepLabel } from "@/components/labels/current-step";
import { CurrentStepSecondaryLabel } from "@/components/labels/current-step-secondary";
import { InputValueLabel } from "@/components/labels/input-value";
import { StepProgressLabel } from "@/components/labels/step-progress";
import { FixBottom } from "@/components/layout/fix-bottom";
import { FixTop } from "@/components/layout/fix-top";
import { Loading } from "@/components/loading";
import { StepSummaryBar } from "@/components/step-summary-bar";
import { useHydration } from "@/hooks/use-hydration";

export default function NewCheckPage() {
  const hydrated = useHydration();
  if (!hydrated) return <Loading />;

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

      <ErrorBanner />

      <FixBottom className="bg-muted">
        <Keyboard />
      </FixBottom>
    </>
  );
}
