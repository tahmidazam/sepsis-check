import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppActions, useStep } from "@/hooks/state";
import { STEPS } from "@/models/step";

export function FinishButton() {
  const router = useRouter();
  const step = useStep();
  const { finish } = useAppActions();

  if (STEPS.indexOf(step) !== STEPS.length - 1) {
    return null;
  }

  return (
    <Button
      size="icon"
      className="grow h-12"
      onClick={() => {
        const id = finish();
        router.push(`/result/${id}`);
      }}
    >
      <Check />
    </Button>
  );
}
