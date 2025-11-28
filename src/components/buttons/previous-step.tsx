"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppActions, useStep } from "@/hooks/state";
import { STEPS } from "@/models/step";

export function PreviousStepButton() {
  const { setStep } = useAppActions();
  const step = useStep();

  return (
    <Button
      size="icon"
      variant="outline"
      className="grow h-12"
      onClick={() => {
        const currentIndex = STEPS.indexOf(step);
        const previousIndex = (currentIndex - 1 + STEPS.length) % STEPS.length;
        const previousStepValue = STEPS[previousIndex];
        setStep(previousStepValue);
      }}
      disabled={STEPS.indexOf(step) === 0}
    >
      <ArrowLeft />
    </Button>
  );
}
