import { scoreVasoactiveMedicationsSubcomponent } from "@/lib/score-vasoactive-medications-subcomponent/score-vasoactive-medications-subcomponent";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scoreVasoactiveMedicationsSubcomponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("should return null if omitted", () => {
    const variables = cloneVariables();
    expect(scoreVasoactiveMedicationsSubcomponent(variables)).toBeNull();
  });

  it("scores 1 if 1", () => {
    const variables = cloneVariables();
    variables.vasoactiveMedicationCount = 1;
    expect(scoreVasoactiveMedicationsSubcomponent(variables)).toBe(1);
  });

  it("scores 2 if 2", () => {
    const variables = cloneVariables();
    variables.vasoactiveMedicationCount = 2;
    expect(scoreVasoactiveMedicationsSubcomponent(variables)).toBe(2);
  });

  it("scores 2 if more than 2", () => {
    const variables = cloneVariables();
    variables.vasoactiveMedicationCount = 5;
    expect(scoreVasoactiveMedicationsSubcomponent(variables)).toBe(2);
  });
});
