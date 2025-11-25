import sumNonNullElements from "@/lib/sum-non-null-elements/sum-non-null-elements";
import type { Diagnosis } from "@/models/diagnosis";

export function getPhoenixSepsisScoreAndDiagnosis(
  respiratoryComponent: number | null,
  cardiovascularComponent: number | null,
  coagulationComponent: number | null,
  neurologicalComponent: number | null,
): {
  phoenixSepsisScore: number | null;
  diagnosis: Diagnosis;
} {
  const phoenixSepsisScore = sumNonNullElements([
    respiratoryComponent,
    cardiovascularComponent,
    coagulationComponent,
    neurologicalComponent,
  ]);

  if (!phoenixSepsisScore) {
    return { phoenixSepsisScore, diagnosis: "no-diagnosis" };
  }

  if (phoenixSepsisScore >= 2) {
    if (!cardiovascularComponent) {
      return { phoenixSepsisScore, diagnosis: "sepsis" };
    } else {
      if (cardiovascularComponent >= 1) {
        return { phoenixSepsisScore, diagnosis: "septic-shock" };
      } else {
        return { phoenixSepsisScore, diagnosis: "sepsis" };
      }
    }
  } else {
    return { phoenixSepsisScore, diagnosis: "no-sepsis" };
  }
}
