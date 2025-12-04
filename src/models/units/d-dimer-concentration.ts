import z from "../../../node_modules/zod/v4/classic/external.cjs";

export const D_DIMER_CONCENTRATION_UNIT_CASES = [
  "mg/L FEU",
  "mcg/L FEU",
  "ng/mL FEU",
] as const;

export const dDimerConcentrationUnitEnum = z.enum(
  D_DIMER_CONCENTRATION_UNIT_CASES
);

export type DDimerConcentrationUnit = z.infer<
  typeof dDimerConcentrationUnitEnum
>;

export const D_DIMER_CONCENTRATION_BASE_UNIT: DDimerConcentrationUnit =
  "mg/L FEU";
