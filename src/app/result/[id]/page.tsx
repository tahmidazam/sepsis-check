"use client";

import { FixBottom } from "@/components/fix-bottom";
import { ComponentBreakdownTable } from "@/components/component-breakdown-table";
import Guidance from "@/components/guidance";
import { HomeButton } from "@/components/home-button";
import { FixTop } from "@/components/fix-top";
import { NewCheckButton } from "@/components/new-check-button";
import { RecordedVariablesTable } from "@/components/recorded-variables-table";
import { DIAGNOSIS_LABELS } from "@/models/diagnosis";
import { useAppStore } from "@/providers/app-store-provider";
import { use } from "react";

export default function ResultsPage(props: PageProps<"/result/[id]">) {
  const { id } = use(props.params);
  const result = useAppStore((state) => state.results.find((i) => i.id === id));

  if (!result) return null;

  const { timestamp, variables, diagnosis } = result;

  return (
    <>
      <FixTop>
        <div className="px-4 py-2">
          <h1 className="font-medium text-center">
            {DIAGNOSIS_LABELS[diagnosis] ?? DIAGNOSIS_LABELS["no-diagnosis"]}
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            {result.phoenixSepsisScore
              ? `Score of ${result.phoenixSepsisScore}`
              : "No score"}
          </p>
        </div>
      </FixTop>

      <div
        style={{
          paddingTop: "calc(env(safe-area-inset-top) + 60px)",
          paddingBottom: "calc(env(safe-area-inset-bottom) + 64px)",
        }}
      >
        <div className="py-4 flex flex-col gap-8">
          <Guidance diagnosis={diagnosis} />
          <ComponentBreakdownTable result={result} />
          <RecordedVariablesTable variables={variables} />
        </div>
      </div>

      <FixBottom>
        <div className="px-4 py-2 grid grid-flow-col auto-cols-fr gap-2">
          <HomeButton />

          <NewCheckButton />
        </div>
      </FixBottom>
    </>
  );
}
