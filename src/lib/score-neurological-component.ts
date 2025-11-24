import type { Variables } from "@/models/variables";

export function scoreNeurologicalComponent(
  variables: Variables,
): number | null {
  const { pupilState, glasgowComaScale } = variables;

  if (!pupilState || !glasgowComaScale) return null;

  if (pupilState === "fixed-bilaterally") {
    return 2;
  } else {
    if (glasgowComaScale <= 10) {
      return 1;
    } else {
      return 0;
    }
  }
}
