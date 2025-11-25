import { scoreFibrinogenSubcomponent } from "@/lib/score-fibrinogen-subcomponent/score-fibrinogen-subcomponent";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scoreFibrinogenSubcomponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("returns null when omitted", () => {
    const variables: Variables = cloneVariables();
    expect(scoreFibrinogenSubcomponent(variables)).toBeNull();
  });

  it("scores 0 at the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.fibrinogenConcentration.value = 100;
    variables.fibrinogenConcentration.unit = "mg/dL";
    expect(scoreFibrinogenSubcomponent(variables)).toBe(0);
  });

  it("scores 1 below the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.fibrinogenConcentration.value = 99;
    variables.fibrinogenConcentration.unit = "mg/dL";
    expect(scoreFibrinogenSubcomponent(variables)).toBe(1);
  });

  it("scores 0 above threshold", () => {
    const variables: Variables = cloneVariables();
    variables.fibrinogenConcentration.value = 101;
    variables.fibrinogenConcentration.unit = "mg/dL";
    expect(scoreFibrinogenSubcomponent(variables)).toBe(0);
  });
});
