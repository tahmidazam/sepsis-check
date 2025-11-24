import type { Variables } from "@/models/variables";

export function scoreINRSubcomponent(variables: Variables): number | null {
  const { internationalNormalisedRatio } = variables;

  if (!internationalNormalisedRatio) return null;

  if (internationalNormalisedRatio > 1.3) {
    return 1;
  } else {
    return 0;
  }
}
