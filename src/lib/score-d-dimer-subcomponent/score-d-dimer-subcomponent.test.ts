import { scoreDDimerSubcomponent } from "@/lib/score-d-dimer-subcomponent/score-d-dimer-subcomponent";
import { INITIAL_APP_STATE } from "@/models/app-state";
import type { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scoreDDimerSubcomponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("returns null when omitted", () => {
    const variables: Variables = cloneVariables();
    expect(scoreDDimerSubcomponent(variables)).toBeNull();
  });

  it("scores 0 at the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.dDimerConcentration.value = 2;
    variables.dDimerConcentration.unit = "mg/L FEU";
    expect(scoreDDimerSubcomponent(variables)).toBe(0);
  });

  it("scores 1 above the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.dDimerConcentration.value = 2.1;
    variables.dDimerConcentration.unit = "mg/L FEU";
    expect(scoreDDimerSubcomponent(variables)).toBe(1);
  });

  it("scores 0 below threshold", () => {
    const variables: Variables = cloneVariables();
    variables.dDimerConcentration.value = 1.9;
    variables.dDimerConcentration.unit = "mg/L FEU";
    expect(scoreDDimerSubcomponent(variables)).toBe(0);
  });
});
