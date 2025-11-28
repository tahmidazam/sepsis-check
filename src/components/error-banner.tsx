import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppActions, useErrorMessage } from "@/hooks/state";

export function ErrorBanner() {
  const errorMessage = useErrorMessage();
  const { clearInput } = useAppActions();

  if (!errorMessage || errorMessage.length === 0) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-10"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom) + 289px)",
      }}
    >
      <div className="bg-red-50 border-t border-b border-red-500">
        <div className="max-w-lg mx-auto flex flex-row gap-4 justify-between items-center px-4 py-2">
          <div className="flex flex-row gap-2 items-center">
            <AlertCircle className="text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </div>

          <Button variant="destructive" size="sm" onClick={clearInput}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
