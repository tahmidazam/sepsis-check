"use client";

import { FixBottom } from "@/components/fix-bottom";
import { InstallPrompt } from "@/components/install-prompt";
import { FixTop } from "@/components/fix-top";
import { NewCheckButton } from "@/components/new-check-button";
import { ResultsTable } from "@/components/results-table";
import { useAppStore } from "@/providers/app-store-provider";
import { useRouter } from "next/navigation";
import { SafeAreaContentWrapper } from "@/components/safe-area-content-wrapper";
import { NavigationBar } from "@/components/navigation-bar";
import { ButtonArray } from "@/components/button-array";

export default function Home() {
  const results = useAppStore((state) => state.results);
  const router = useRouter();

  return (
    <>
      <FixTop>
        <NavigationBar title="SepsisCheck" subtitle="v0.0.1" />
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
    </>
  );
}
