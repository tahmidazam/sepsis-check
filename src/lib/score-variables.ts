import { getPhoenixSepsisScoreAndDiagnosis } from "@/lib/get-diagnosis";
import { scoreDDimerSubcomponent } from "@/lib/score-d-dimer-subcomponent/score-d-dimer-subcomponent";
import { scoreFibrinogenSubcomponent } from "@/lib/score-fibrinogen-subcomponent/score-fibrinogen-subcomponent";
import { scoreINRSubcomponent } from "@/lib/score-inr-subcomponent/score-inr-subcomponent";
import { scoreLactateSubcomponent } from "@/lib/score-lactate-concentration-subcomponent/score-lactate-concentration-subcomponent";
import { scoreMeanArterialPressureSubcomponent } from "@/lib/score-mean-arterial-pressure-subcomponent";
import { scoreNeurologicalComponent } from "@/lib/score-neurological-component/score-neurological-component";
import { scorePlateletSubcomponent } from "@/lib/score-platelet-subcomponent/score-platelet-subcomponent";
import { scoreRespiratoryComponent } from "@/lib/score-respiratory-component";
import { scoreVasoactiveMedicationsSubcomponent } from "@/lib/score-vasoactive-medications-subcomponent/score-vasoactive-medications-subcomponent";
import sumNonNullElements from "@/lib/sum-non-null-elements/sum-non-null-elements";
import type { Variables } from "@/models/variables";

export function scoreVariables(variables: Variables) {
  const vasoactiveMedicationsSubcomponent =
    scoreVasoactiveMedicationsSubcomponent(variables);
  const lactateSubcomponent = scoreLactateSubcomponent(variables);
  const meanArterialPressureSubcomponent =
    scoreMeanArterialPressureSubcomponent(variables);

  const plateletSubcomponent = scorePlateletSubcomponent(variables);
  const inrSubcomponent = scoreINRSubcomponent(variables);
  const dDimerSubcomponent = scoreDDimerSubcomponent(variables);
  const fibrinogenSubcomponent = scoreFibrinogenSubcomponent(variables);

  const respiratoryComponent = scoreRespiratoryComponent(variables);
  const cardiovascularComponent = sumNonNullElements([
    vasoactiveMedicationsSubcomponent,
    lactateSubcomponent,
    meanArterialPressureSubcomponent,
  ]);

  const coagulationSubcomponentsSumResult = sumNonNullElements([
    plateletSubcomponent,
    inrSubcomponent,
    dDimerSubcomponent,
    fibrinogenSubcomponent,
  ]);
  const coagulationComponent = coagulationSubcomponentsSumResult
    ? Math.max(coagulationSubcomponentsSumResult, 2)
    : null;

  const neurologicalComponent = scoreNeurologicalComponent(variables);

  const { phoenixSepsisScore, diagnosis } = getPhoenixSepsisScoreAndDiagnosis(
    respiratoryComponent,
    cardiovascularComponent,
    coagulationComponent,
    neurologicalComponent,
  );

  return {
    vasoactiveMedicationsSubcomponent,
    lactateSubcomponent,
    meanArterialPressureSubcomponent,
    plateletSubcomponent,
    inrSubcomponent,
    dDimerSubcomponent,
    fibrinogenSubcomponent,
    respiratoryComponent,
    cardiovascularComponent,
    coagulationComponent,
    neurologicalComponent,
    phoenixSepsisScore,
    diagnosis,
  };
}
