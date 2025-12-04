import z from "zod";

export const PLATELET_CONCENTRATION_UNIT_CASES = [
  "x10^3/mcL",
  "x10^9/L",
] as const;

export const plateletConcentrationUnitEnum = z.enum(
  PLATELET_CONCENTRATION_UNIT_CASES
);

export type PlateletConcentrationUnit = z.infer<
  typeof plateletConcentrationUnitEnum
>;

export const PLATELET_CONCENTRATION_BASE_UNIT: PlateletConcentrationUnit =
  "x10^9/L";
