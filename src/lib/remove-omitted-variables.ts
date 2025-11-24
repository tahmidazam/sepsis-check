import type { Step } from "@/models/step";
import type { Variables } from "@/models/variables";

export function removeOmittedVariables(
  variables: Variables,
  omittedVariables: Step[],
): Variables {
  return Object.fromEntries(
    Object.entries(variables).filter(
      ([key]) => !omittedVariables.includes(key as Step),
    ),
  ) as Variables;
}
