import Link from "next/link";
import { useDeviceMetadata } from "@/hooks/use-device-metadata";

export function ResponsiveFooter() {
  const { isMobile } = useDeviceMetadata();

  return (
    <div className="max-w-lg mx-auto p-4 flex flex-col gap-4 text-sm text-muted-foreground">
      {!isMobile && (
        <>
          <Link
            href="/about"
            className="underline underline-offset-4 decoration-border"
          >
            About SepsisCheck
          </Link>

          <Link
            href="https://www.github.com/tahmidazam/sepsis-check"
            className="underline underline-offset-4 decoration-border"
          >
            Repository
          </Link>
        </>
      )}

      <p className="text-xs text-muted-foreground">
        Copyright © 2025{" "}
        <Link
          href="https://www.github.com/tahmidazam"
          className="underline underline-offset-4 decoration-border"
        >
          Tahmid Azam
        </Link>
        . All rights reserved.
      </p>
    </div>
  );
}
