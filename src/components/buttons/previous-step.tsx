"use client";

import { Button } from "@/components/ui/button";
import { STEPS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";
import { ArrowLeft } from "lucide-react";

export function PreviousStepButton() {
  const previousStep = useAppStore((state) => state.setStep);
  const step = useAppStore((state) => state.step);

  return (
    <Button
      size="icon"
      variant="outline"
      className="grow h-12"
      onClick={() => {
        const currentIndex = STEPS.indexOf(step);
        const previousIndex = (currentIndex - 1 + STEPS.length) % STEPS.length;
        const previousStepValue = STEPS[previousIndex];
        previousStep(previousStepValue);
      }}
      disabled={STEPS.indexOf(step) === 0}
    >
      <ArrowLeft />
    </Button>
  );
}
