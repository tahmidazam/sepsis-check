import { scoreINRSubcomponent } from "@/lib/score-inr-subcomponent/score-inr-subcomponent";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scoreINRSubcomponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("returns null when omitted", () => {
    const variables: Variables = cloneVariables();
    expect(scoreINRSubcomponent(variables)).toBeNull();
  });

  it("scores 0 at the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.internationalNormalisedRatio = 1.3;
    expect(scoreINRSubcomponent(variables)).toBe(0);
  });

  it("scores 1 above the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.internationalNormalisedRatio = 1.4;
    expect(scoreINRSubcomponent(variables)).toBe(1);
  });

  it("scores 0 below threshold", () => {
    const variables: Variables = cloneVariables();
    variables.internationalNormalisedRatio = 1;
    expect(scoreINRSubcomponent(variables)).toBe(0);
  });
});
