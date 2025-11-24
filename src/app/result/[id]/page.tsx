"use client";

import Guidance from "@/components/guidance";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUnitLabel } from "@/lib/get-unit-label";
import { getValueLabel } from "@/lib/get-value-label";
import { DIAGNOSIS_LABELS } from "@/models/diagnosis";
import type { resultSchema } from "@/models/result";
import { STEP_TITLES, STEPS } from "@/models/step";
import { useAppStore } from "@/providers/app-store-provider";
import { Home } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const COMPONENT_RESULT_KEY_MAP: {
  [key: string]: {
    label: string;
    resultSchemaKey: keyof typeof resultSchema.shape;
  };
} = {
  respiratory: {
    label: "Respiratory",
    resultSchemaKey: "respiratoryComponent",
  },
  cardiovascular: {
    label: "Cardiovascular",
    resultSchemaKey: "cardiovascularComponent",
  },
  coagulation: {
    label: "Coagulation",
    resultSchemaKey: "coagulationComponent",
  },
  neurological: {
    label: "Neurological",
    resultSchemaKey: "neurologicalComponent",
  },
};

export default function ResultsPage(props: PageProps<"/result/[id]">) {
  const { id } = use(props.params);
  const result = useAppStore((state) => state.results.find((i) => i.id === id));

  if (!result) return null;

  const { timestamp, variables, diagnosis } = result;

  return (
    <main className="h-dvh w-screen">
      <div
        className="w-full fixed top-0 left-0 border-b z-20 bg-background"
        style={{
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
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
      </div>

      <div
        style={{
          paddingTop: "calc(env(safe-area-inset-top) + 60px)",
          paddingBottom: "calc(env(safe-area-inset-bottom) + 64px)",
        }}
      >
        <div className="py-4 flex flex-col gap-8">
          <Guidance diagnosis={diagnosis} />

          <div className="flex flex-col gap-2">
            <h2 className="font-medium px-4">Component breakdown</h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Object.entries(COMPONENT_RESULT_KEY_MAP).map(
                  ([label, key]) => (
                    <TableRow key={label}>
                      <TableCell>
                        {label.charAt(0).toUpperCase() + label.slice(1)}
                      </TableCell>
                      <TableCell className="w-full">
                        {result[key.resultSchemaKey]?.toString() ?? "No score"}
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell>Phoenix Sepsis Score</TableCell>
                  <TableCell className="w-full">
                    {result.phoenixSepsisScore ?? "No score"}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-medium px-4">Recorded variables</h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Variable</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Unit</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {STEPS.map((step) => {
                  const stepLabel = STEP_TITLES[step];
                  const valueLabel = getValueLabel(step, variables);
                  const unitLabel = getUnitLabel(step, variables);

                  return (
                    <TableRow key={step}>
                      <TableCell>{stepLabel}</TableCell>
                      <TableCell className="text-right">{valueLabel}</TableCell>
                      <TableCell>{unitLabel}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 w-full border-t z-20 bg-background"
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="px-4 py-2 flex flex-row gap-2">
          <Button asChild variant="outline">
            <Link href="/" className="grow h-12">
              <Home />
              Home
            </Link>
          </Button>

          <Button asChild>
            <Link href="/new" className="grow h-12">
              New Check
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
