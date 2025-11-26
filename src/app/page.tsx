"use client";

import { NewCheckButton } from "@/components/buttons/new-check";
import { InstallPrompt } from "@/components/install-prompt";
import { ButtonArray } from "@/components/layout/button-array";
import { FixBottom } from "@/components/layout/fix-bottom";
import { FixTop } from "@/components/layout/fix-top";
import { SafeAreaContentWrapper } from "@/components/layout/safe-area-content-wrapper";
import { Loading } from "@/components/loading";
import { NavigationBar } from "@/components/navigation-bar";
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
        <ResultsTable className="py-4" />
      </SafeAreaContentWrapper>

      <FixBottom>
        <ButtonArray>
          <NewCheckButton resetAndStartNewOption />
        </ButtonArray>
      </FixBottom>
    </main>
  );
}
