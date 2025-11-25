import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export function HomeButton() {
  return (
    <Button asChild variant="outline">
      <Link href="/" className="h-12">
        <Home />
        Home
      </Link>
    </Button>
  );
}
