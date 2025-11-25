"use client";

import { FixBottom } from "@/components/fix-bottom";
import { InstallPrompt } from "@/components/install-prompt";
import { FixTop } from "@/components/fix-top";
import { NewCheckButton } from "@/components/new-check-button";
import { ResultsTable } from "@/components/results-table";
import { useAppStore } from "@/providers/app-store-provider";
import { useRouter } from "next/navigation";
import { SafeAreaContentWrapper } from "@/components/safe-area-content-wrapper";

export default function Home() {
  const results = useAppStore((state) => state.results);
  const router = useRouter();

  return (
    <>
      <FixTop>
        <div className="px-4 py-2">
          <h1 className="font-medium text-center">SepsisCheck</h1>
          <p className="text-sm text-muted-foreground text-center">v0.0.1</p>
        </div>
      </FixTop>

      <SafeAreaContentWrapper paddingTop="60px" paddingBottom="64px">
        <InstallPrompt />
        <ResultsTable className="py-4" />
      </SafeAreaContentWrapper>

      <FixBottom>
        <div className="px-4 py-2 grid grid-flow-col  auto-cols-fr  gap-2">
          <NewCheckButton resetAndStartNewOption />
        </div>
      </FixBottom>
    </>
  );
}
