import z from "zod";

export const D_DIMER_CONCENTRATION_UNIT_CASES = [
  "mg/L FEU",
  "mcg/L FEU",
  "ng/mL FEU",
] as const;

export const dDimerConcentrationUnitEnum = z.enum(
  D_DIMER_CONCENTRATION_UNIT_CASES,
);

export type DDimerConcentrationUnit = z.infer<
  typeof dDimerConcentrationUnitEnum
>;

export const D_DIMER_CONCENTRATION_BASE_UNIT: DDimerConcentrationUnit =
  "mg/L FEU";

export function convertDDimerConcentrationToBaseUnit(
  value: number,
  unit: DDimerConcentrationUnit,
): number {
  switch (unit) {
    case "mg/L FEU":
      return value;
    case "mcg/L FEU":
      return value / 10e3;
    case "ng/mL FEU":
      return value / 10e6;
  }
}

export const dDimerConcentrationSchema = z.object({
  value: z.coerce.number().min(0).nullish(),
  unit: dDimerConcentrationUnitEnum,
});
