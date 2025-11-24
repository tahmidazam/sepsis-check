import { Button } from "@/components/ui/button";
import { useAppStore } from "@/providers/app-store-provider";
import { RefreshCw } from "lucide-react";

export function ResetButton() {
  const reset = useAppStore((state) => state.reset);
  return (
    <Button size="icon" variant="outline" onClick={reset} className="grow h-12">
      <RefreshCw />
    </Button>
  );
}
