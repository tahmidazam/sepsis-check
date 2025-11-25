"use client";

import { ButtonArray } from "@/components/button-array";
import { ComponentBreakdownTable } from "@/components/component-breakdown-table";
import { FixBottom } from "@/components/fix-bottom";
import { FixTop } from "@/components/fix-top";
import Guidance from "@/components/guidance";
import { HomeButton } from "@/components/home-button";
import { NavigationBar } from "@/components/navigation-bar";
import { NewCheckButton } from "@/components/new-check-button";
import { RecordedVariablesTable } from "@/components/recorded-variables-table";
import { SafeAreaContentWrapper } from "@/components/safe-area-content-wrapper";
import { DIAGNOSIS_LABELS } from "@/models/diagnosis";
import { useAppStore } from "@/providers/app-store-provider";
import { use } from "react";

export default function ResultsPage(props: PageProps<"/result/[id]">) {
  const { id } = use(props.params);
  const result = useAppStore((state) => state.results.find((i) => i.id === id));

  if (!result) return null;

  const { variables, diagnosis } = result;

  const title = DIAGNOSIS_LABELS[diagnosis];
  const subtitle = result.phoenixSepsisScore
    ? `Score of ${result.phoenixSepsisScore}`
    : "No score";

  return (
    <>
      <FixTop>
        <NavigationBar title={title} subtitle={subtitle} />
      </FixTop>

      <SafeAreaContentWrapper
        paddingTop="60px + var(--spacing) * 4"
        paddingBottom="64px + var(--spacing) * 4"
        className="flex flex-col gap-8"
      >
        <Guidance diagnosis={diagnosis} />
        <ComponentBreakdownTable result={result} />
        <RecordedVariablesTable variables={variables} />
      </SafeAreaContentWrapper>

      <FixBottom>
        <ButtonArray>
          <HomeButton />
          <NewCheckButton />
        </ButtonArray>
      </FixBottom>
    </>
  );
}
