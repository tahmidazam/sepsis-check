"use client";

import { ButtonArray } from "@/components/layout/button-array";
import { ComponentBreakdownTable } from "@/components/tables/component-breakdown";
import { FixBottom } from "@/components/layout/fix-bottom";
import { FixTop } from "@/components/layout/fix-top";
import Guidance from "@/components/guidance";
import { HomeButton } from "@/components/buttons/home";
import { NavigationBar } from "@/components/navigation-bar";
import { NewCheckButton } from "@/components/buttons/new-check";
import { RecordedVariablesTable } from "@/components/tables/recorded-variables";
import { SafeAreaContentWrapper } from "@/components/layout/safe-area-content-wrapper";
import { DIAGNOSIS_LABELS } from "@/models/diagnosis";
import { useAppStore } from "@/providers/app-store-provider";
import { use } from "react";
import { MetadataTable } from "@/components/tables/metadata";

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
        <MetadataTable result={result} />
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
