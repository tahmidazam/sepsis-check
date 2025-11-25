"use client";

import { ErrorBanner } from "@/components/error-banner";
import { InputValueLabel } from "@/components/input-value-label";
import { Keyboard } from "@/components/keyboard";
import { StepSummaryBar } from "@/components/step-summary-bar";
import { STEP_PRIMARY_LABELS, STEP_SECONDARY_LABELS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";

export default function NewCheckPage() {
  const step = useAppStore((state) => state.step);

  return (
    <main
      className="h-screen flex flex-col justify-between"
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-col">
          <StepSummaryBar />

          <h1 className="font-medium text-xl">{STEP_PRIMARY_LABELS[step]}</h1>
        </div>

        <InputValueLabel />

        {STEP_SECONDARY_LABELS[step] && (
          <p className="text-sm text-muted-foreground text-left text-balance">
            {STEP_SECONDARY_LABELS[step]}
          </p>
        )}
      </div>

      <div
        className="fixed bottom-0 left-0 w-full z-20 bg-muted"
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <ErrorBanner />

        <Keyboard />
      </div>
    </main>
  );
}
