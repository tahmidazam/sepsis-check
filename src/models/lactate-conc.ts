import z from "zod";

export const LACTATE_CONCENTRATION_UNIT_CASES = [
  "mmol/L",
  "mg/dL",
  "g/L",
] as const;

const LACTATE_MOLAR_MASS_IN_GRAMS_PER_MOLE = 90.08;

export const lactateConcentrationUnitEnum = z.enum(
  LACTATE_CONCENTRATION_UNIT_CASES,
);

export type LactateConcentrationUnit = z.infer<
  typeof lactateConcentrationUnitEnum
>;

export const LACTATE_CONCENTRATION_BASE_UNIT: LactateConcentrationUnit =
  "mmol/L";

export function convertLactateConcentrationToBaseUnit(
  value: number,
  unit: LactateConcentrationUnit,
): number {
  switch (unit) {
    case "mmol/L":
      return value;
    case "mg/dL":
      return value / LACTATE_MOLAR_MASS_IN_GRAMS_PER_MOLE;
    case "g/L":
      return (value * 1000) / LACTATE_MOLAR_MASS_IN_GRAMS_PER_MOLE;
  }
}

export const lactateConcentrationSchema = z.object({
  value: z.coerce.number().min(0).nullish(),
  unit: lactateConcentrationUnitEnum,
});
