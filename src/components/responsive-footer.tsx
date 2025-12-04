import Link from "next/link";
import { useDeviceMetadata } from "@/hooks/use-device-metadata";

export function ResponsiveFooter() {
  const { isMobile } = useDeviceMetadata();

  return (
    <div className="max-w-lg mx-auto p-4 flex flex-col gap-4 text-sm text-muted-foreground">
      <ol className="list-decimal pl-6 text-sm text-muted-foreground">
        <li id="schlapbachInternationalConsensusCriteria2024b">
          <Link
            href="https://doi.org/10.1001/jama.2024.0179"
            className="underline underline-offset-4 decoration-border"
          >
            Schlapbach LJ, Watson RS, Sorce LR, Argent AC, Menon K, Hall MW, et
            al. International Consensus Criteria for Pediatric Sepsis and Septic
            Shock. JAMA. 2024 Feb 27;331(8):665–74.
          </Link>
        </li>
      </ol>

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
