import { Button } from "@/components/ui/button";
import { useAppStore } from "@/providers/app-store-provider";
import { AlertCircle } from "lucide-react";

export function ErrorBanner() {
  const errorMessage = useAppStore((state) => state.errorMessage);
  const clearInput = useAppStore((state) => state.clearInput);

  if (!errorMessage || errorMessage.length === 0) return null;

  return (
    <div className="bg-red-50 border-t border-b border-red-500 flex flex-row gap-4 justify-between items-center p-4">
      <div className="flex flex-row gap-2 items-center">
        <AlertCircle className="text-red-500" />
        <p className="text-sm text-red-500">{errorMessage}</p>
      </div>

      <Button variant="destructive" size="sm" onClick={clearInput}>
        Clear
      </Button>
    </div>
  );
}
