import z from "zod";

export const FIBRINOGEN_CONCENTRATION_UNIT_CASES = ["g/L", "mg/dL"] as const;

export const fibrinogenConcentrationUnitEnum = z.enum(
  FIBRINOGEN_CONCENTRATION_UNIT_CASES,
);

export type FibrinogenConcentrationUnit = z.infer<
  typeof fibrinogenConcentrationUnitEnum
>;

export const FIBRINOGEN_CONCENTRATION_BASE_UNIT: FibrinogenConcentrationUnit =
  "mg/dL";

export function convertFibrinogenConcentrationToBaseUnit(
  value: number,
  unit: FibrinogenConcentrationUnit,
): number {
  switch (unit) {
    case "g/L":
      return value / 10e2;
    case "mg/dL":
      return value;
  }
}

export const fibrinogenConcentrationSchema = z.object({
  value: z.coerce.number().min(0).nullish(),
  unit: fibrinogenConcentrationUnitEnum,
});
