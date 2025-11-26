import { scorePlateletSubcomponent } from "@/lib/score-platelet-subcomponent/score-platelet-subcomponent";
import { INITIAL_APP_STATE } from "@/models/app-state";
import type { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scorePlateletSubcomponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("returns null when omitted", () => {
    const variables: Variables = cloneVariables();
    expect(scorePlateletSubcomponent(variables)).toBeNull();
  });

  it("scores 0 at the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.plateletConcentration = {
      value: 100,
      unit: "x10^3/mcL",
    };
    expect(scorePlateletSubcomponent(variables)).toBe(0);
  });

  it("scores 0 above the threshold", () => {
    const variables: Variables = cloneVariables();
    variables.plateletConcentration = {
      value: 101,
      unit: "x10^3/mcL",
    };
    expect(scorePlateletSubcomponent(variables)).toBe(0);
  });

  it("scores 1 below threshold", () => {
    const variables: Variables = cloneVariables();
    variables.plateletConcentration = {
      value: 99,
      unit: "x10^3/mcL",
    };
    expect(scorePlateletSubcomponent(variables)).toBe(1);
  });
});
