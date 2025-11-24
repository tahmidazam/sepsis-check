"use client";

import { Button } from "@/components/ui/button";
import { STEPS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";
import { ArrowRight } from "lucide-react";

export function NextStepButton() {
  const nextStep = useAppStore((state) => state.setStep);
  const step = useAppStore((state) => state.step);

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
        nextStep(newStep);
      }}
      disabled={STEPS.indexOf(step) === STEPS.length - 1}
    >
      <ArrowRight />
    </Button>
  );
}
