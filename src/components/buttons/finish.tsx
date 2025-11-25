import { Button } from "@/components/ui/button";
import { STEPS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export function FinishButton() {
  const router = useRouter();
  const step = useAppStore((state) => state.step);
  const finish = useAppStore((state) => state.finish);

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
