"use client";

import { ErrorBanner } from "@/components/error-banner";
import { InputValueLabel } from "@/components/input-value-label";
import { Keyboard } from "@/components/keyboard";
import { StepSummaryBar } from "@/components/step-summary-bar";
import { STEP_TITLES } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export default function NewCheckPage() {
  const step = useAppStore((state) => state.step);

  return (
    <main
      className="h-dvh flex flex-col justify-between"
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-col">
          <StepSummaryBar />

          <h1 className="font-medium text-xl">{STEP_TITLES[step]}</h1>
        </div>

        <InputValueLabel />
      </div>

      <div>
        <ErrorBanner />

        <Keyboard />
      </div>
    </main>
  );
}
