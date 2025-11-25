import { scoreLactateSubcomponent } from "@/lib/score-lactate-concentration-subcomponent/score-lactate-concentration-subcomponent";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scoreLactateSubcomponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("returns null when omitted", () => {
    const variables: Variables = cloneVariables();
    expect(scoreLactateSubcomponent(variables)).toBeNull();
  });

  it("scores 0 when <5 mmol/L", () => {
    const variables: Variables = cloneVariables();
    variables.lactateConcentration.value = 4;
    variables.lactateConcentration.unit = "mmol/L";
    expect(scoreLactateSubcomponent(variables)).toBe(0);
  });

  it("scores 1 when between 5 and <11 mmol/L (at lower threshold)", () => {
    const variables: Variables = cloneVariables();
    variables.lactateConcentration.value = 5;
    variables.lactateConcentration.unit = "mmol/L";
    expect(scoreLactateSubcomponent(variables)).toBe(1);
  });

  it("scores 1 when between 5 and <11 mmol/L", () => {
    const variables: Variables = cloneVariables();
    variables.lactateConcentration.value = 6;
    variables.lactateConcentration.unit = "mmol/L";
    expect(scoreLactateSubcomponent(variables)).toBe(1);
  });

  it("scores 2 when >=11 mmol/L (suprathreshold)", () => {
    const variables: Variables = cloneVariables();
    variables.lactateConcentration.value = 12;
    variables.lactateConcentration.unit = "mmol/L";
    expect(scoreLactateSubcomponent(variables)).toBe(2);
  });

  it("scores 2 when >=11 mmol/L (at threshold)", () => {
    const variables: Variables = cloneVariables();
    variables.lactateConcentration.value = 11;
    variables.lactateConcentration.unit = "mmol/L";
    expect(scoreLactateSubcomponent(variables)).toBe(2);
  });
});
