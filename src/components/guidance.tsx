import { ChevronDown, RotateCw } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Diagnosis } from "@/models/diagnosis";

const STEPS: string[] = [
  "Obtain IV/IO access",
  "Collect blood culture",
  "Start empiric broad-spectrum antibiotics",
  "Measure lactate",
  "Administer fluid bolus(es) if shock present",
  "Start vasoactive agents if shock persists",
];

export default function Guidance({ diagnosis }: { diagnosis: Diagnosis }) {
  if (diagnosis === "no-sepsis" || diagnosis === "no-diagnosis") return null;

  return (
    <div className="flex flex-col gap-4 px-4 w-full max-w-lg mx-auto">
      <div className="flex flex-col">
        <p className="font-medium text-pretty">
          Consider management according to the SSC Initial Resuscitation
          Algorithm for Children
        </p>
        <p className="text-sm text-muted-foreground">
          Adapted from{" "}
          <Link
            className="underline underline-offset-4 decoration-border"
            href="https://www.sccm.org/SurvivingSepsisCampaign/Guidelines/Pediatric-Patients"
          >
            Surviving Sepsis Campaign
          </Link>
          . Use their{" "}
          <span className="italic">
            Fluid and Vasoactive-Inotrope Management
          </span>{" "}
          algorithm for fluid boluses and vasoactive agents. For further
          management advice see the{" "}
          <Link
            href="https://www.sccm.org/SCCM/media/SCCM/PDFs/Initial-Resuscitation-Algorithm-for-Children.pdf"
            className="underline-offset-4 underline decoration-border"
          >
            full algorithm
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {STEPS.map((step, index) => (
          <GuidanceStep key={step} number={String(index + 1)} label={step} />
        ))}
      </div>
    </div>
  );
}

function GuidanceStep({
  number,
  label,
  aside,
}: {
  number: ReactNode;
  label: string;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-row items-center gap-4 font-medium">
      <p className="bg-destructive text-background rounded-full w-8 h-8 flex items-center justify-center">
        {number}
      </p>

      <div className="flex flex-col">
        <p>{label}</p>
        {aside && <p className="text-xs text-muted-foreground">{aside}</p>}
      </div>
    </div>
  );
}
