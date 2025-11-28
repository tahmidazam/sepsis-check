import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppActions } from "@/hooks/state";

export function ResetButton() {
  const { reset } = useAppActions();

  return (
    <Button size="icon" variant="outline" onClick={reset} className="grow h-12">
      <RefreshCw />
    </Button>
  );
}
