import { scoreNeurologicalComponent } from "@/lib/score-neurological-component/score-neurological-component";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { Variables } from "@/models/variables";
import { describe, expect, it } from "vitest";

describe("scoreNeurologicalComponent", () => {
  const cloneVariables = (): Variables =>
    structuredClone(INITIAL_APP_STATE.variables);

  it("returns null when variables are omitted", () => {
    const variables: Variables = cloneVariables();
    expect(scoreNeurologicalComponent(variables)).toBeNull();
  });

  it("scores 0 with reactive pupils and GCS > 10", () => {
    const variables: Variables = cloneVariables();
    variables.pupilState = "reactive";
    variables.glasgowComaScale = 11;
    expect(scoreNeurologicalComponent(variables)).toBe(0);
  });

  it("scores 1 with reactive pupils and GCS <= 10", () => {
    const variables: Variables = cloneVariables();
    variables.pupilState = "reactive";
    variables.glasgowComaScale = 10;
    expect(scoreNeurologicalComponent(variables)).toBe(1);
  });

  it("scores 2 with fixed pupils bilaterally", () => {
    const variables: Variables = cloneVariables();
    variables.pupilState = "fixed-bilaterally";
    expect(scoreNeurologicalComponent(variables)).toBe(2);
  });
});
