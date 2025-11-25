import type { Variables } from "@/models/variables";

export function scoreNeurologicalComponent(
  variables: Variables
): number | null {
  const { pupilState, glasgowComaScale } = variables;

  if (!pupilState) return null;

  if (pupilState === "fixed-bilaterally") return 2;

  if (!glasgowComaScale) return null;

  if (glasgowComaScale <= 10) {
    return 1;
  } else {
    return 0;
  }
}
