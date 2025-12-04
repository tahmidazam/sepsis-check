"use client";

import Link from "next/link";
import { NewCheckButton } from "@/components/buttons/new-check";
import { InstallPrompt } from "@/components/install-prompt";
import { ButtonArray } from "@/components/layout/button-array";
import { FixBottom } from "@/components/layout/fix-bottom";
import { FixTop } from "@/components/layout/fix-top";
import { SafeAreaContentWrapper } from "@/components/layout/safe-area-content-wrapper";
import { Loading } from "@/components/loading";
import { NavigationBar } from "@/components/navigation-bar";
import { ResponsiveFooter } from "@/components/responsive-footer";
import { ResultsTable } from "@/components/tables/results";
import { useHydration } from "@/hooks/use-hydration";

export default function Home() {
  const hydrated = useHydration();
  if (!hydrated) return <Loading />;

  return (
    <main className="h-screen w-screen">
      <FixTop>
        <NavigationBar title="SepsisCheck" subtitle="v0.0.2" />
      </FixTop>

      <SafeAreaContentWrapper paddingTop="60px" paddingBottom="64px">
        <InstallPrompt />

        <p className="px-4 pt-4 mx-auto max-w-lg">
          SepsisCheck is a mobile implementation of the Phoenix Sepsis Score and
          Criteria
          <Link href="#schlapbachInternationalConsensusCriteria2024b">
            <sup className="underline underline-offset-4 decoration-border">
              [1]
            </sup>
          </Link>
          , designed to aid sepsis and septic shock diagnostics in children.
        </p>

        <ResultsTable className="pt-4" />

        <ResponsiveFooter />
      </SafeAreaContentWrapper>

      <FixBottom>
        <ButtonArray>
          <NewCheckButton resetAndStartNewOption />
        </ButtonArray>
      </FixBottom>
    </main>
  );
}
