"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppActions, useStep } from "@/hooks/state";
import { STEPS } from "@/models/step";

export function NextStepButton() {
  const { setStep } = useAppActions();
  const step = useStep();

  if (STEPS.indexOf(step) === STEPS.length - 1) {
    return null;
  }

  return (
    <Button
      size="icon"
      variant="outline"
      className="grow h-12"
      onClick={() => {
        const currentIndex = STEPS.indexOf(step);
        const newIndex = (currentIndex + 1) % STEPS.length;
        const newStep = STEPS[newIndex];
        setStep(newStep);
      }}
      disabled={STEPS.indexOf(step) === STEPS.length - 1}
    >
      <ArrowRight />
    </Button>
  );
}
