import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <div className="min-h-screen  max-w-2xl mx-auto flex flex-col p-4 py-48 gap-4 grow">
        <div className="mb-8 flex flex-col">
          <p className="text-muted-foreground">About</p>
          <h1 className="text-3xl font-medium tracking-tight">SepsisCheck</h1>
        </div>

        <p>
          SepsisCheck is a{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            className="underline underline-offset-4 decoration-border"
          >
            progressive web app (PWA)
          </Link>{" "}
          implementation of the Phoenix Sepsis Score and Criteria
          <Link href="#schlapbachInternationalConsensusCriteria2024b">
            <sup className="text-muted-foreground underline underline-offset-4 decoration-border">
              [1]
            </sup>
          </Link>{" "}
          for mobile paediatric sepsis diagnostics.
        </p>

        <p>
          Built by{" "}
          <Link
            href="https://www.github.com/tahmidazam"
            className="underline underline-offset-4 decoration-border"
          >
            Tahmid Azam
          </Link>
          , in collaboration with{" "}
          <Link
            href="https://www.cuh.nhs.uk/staff-directory/dr_david_inwald/"
            className="underline underline-offset-4 decoration-border"
          >
            Dr David Inwald
          </Link>
          .
        </p>

        <Button className="max-w-[190px] h-12 my-4" asChild>
          <Link href="/">Get Started</Link>
        </Button>

        <p>
          Have feedback? Open an{" "}
          <Link
            href="https://github.com/tahmidazam/sepsis-check/issues/new"
            className="underline underline-offset-4 decoration-border"
          >
            issue
          </Link>
          .
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-medium mt-4 text-xl tracking-tight">
              Features
            </h2>

            <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-muted-foreground/50">
              <li>
                <p>Cross-platform across iOS and Android</p>
              </li>

              <li>
                <p>UI minimises clinician interactions and optimises speed</p>
              </li>

              <li>
                <p>
                  Custom data entry UI with support for popular unit conversions
                </p>
              </li>

              <li>
                <p>Scores can be calculated in the absence of some variables</p>
              </li>
            </ul>

            <h2 className="font-medium mt-4 text-xl tracking-tight">Roadmap</h2>

            <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-muted-foreground/50">
              <li>
                <p>Offline support</p>
              </li>

              <li>
                <p>Implementation unit tests</p>
              </li>

              <li>
                <p>Internationalisation</p>
              </li>
            </ul>

            <h2 className="font-medium mt-4 text-xl tracking-tight">
              Technologies
            </h2>

            <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-muted-foreground/50">
              <li>
                <Link
                  href="https://nextjs.org"
                  className="underline underline-offset-4 decoration-border"
                >
                  Next.js 16 App Router
                </Link>
              </li>

              <li>
                <Link
                  href="https://zustand.docs.pmnd.rs/getting-started/introduction"
                  className="underline underline-offset-4 decoration-border"
                >
                  Zustand
                </Link>
              </li>

              <li>
                <Link
                  href="https://zod.dev"
                  className="underline underline-offset-4 decoration-border"
                >
                  Zod
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <Image
              src="/ss-1.png"
              alt="Screenshot of the SepsisCheck PWA"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="bg-muted border-t">
        <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
          <ol className="list-decimal pl-6 text-sm text-muted-foreground">
            <li id="schlapbachInternationalConsensusCriteria2024b">
              <Link
                href="https://doi.org/10.1001/jama.2024.0179"
                className="underline underline-offset-4 decoration-border"
              >
                Schlapbach LJ, Watson RS, Sorce LR, Argent AC, Menon K, Hall MW,
                et al. International Consensus Criteria for Pediatric Sepsis and
                Septic Shock. JAMA. 2024 Feb 27;331(8):665–74.
              </Link>
            </li>
          </ol>

          <Separator />

          <div className="flex flex-col gap-4 md:justify-between md:flex-row-reverse">
            <div className="text-xs text-muted-foreground flex flex-row gap-2 items-center">
              <Link
                href="https://www.github.com/tahmidazam/sepsis-check"
                className="underline underline-offset-4 decoration-border"
              >
                Repository
              </Link>
            </div>

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
        </div>
      </div>
    </main>
  );
}
