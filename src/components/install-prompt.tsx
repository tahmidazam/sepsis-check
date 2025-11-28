import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export function InstallPrompt() {
  const [isMobile, setIsMobile] = useState(false);
  const [isStandalone, setIsStandalone] = useState(true);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone || !isMobile) return null;

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
