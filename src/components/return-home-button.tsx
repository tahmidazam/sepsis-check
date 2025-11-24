import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export function ReturnHomeButton() {
  return (
    <Button asChild className="h-12 grow" variant="outline">
      <Link href="/">
        <Home />
      </Link>
    </Button>
  );
}
