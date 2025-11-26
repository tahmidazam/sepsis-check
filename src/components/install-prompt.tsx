import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export function InstallPrompt() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) return null;

  return (
    <div className="bg-muted border-b flex flex-row gap-4 justify-between items-center">
      <div className="flex flex-row gap-4 items-center px-4 py-2 max-w-lg mx-auto">
        <Lightbulb className="text-muted-foreground" />
        <p className="text-sm text-muted-foreground text-balance">
          To install this app on your device, tap the share button and then "Add
          to Home Screen".
        </p>
      </div>
    </div>
  );
}
