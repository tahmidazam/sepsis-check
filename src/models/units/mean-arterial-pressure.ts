import z from "zod";

export const MEAN_ARTERIAL_PRESSURE_UNIT_CASES = ["kPa", "mmHg"] as const;

export const meanArterialPressureUnitEnum = z.enum(
  MEAN_ARTERIAL_PRESSURE_UNIT_CASES
);

export type MeanArterialPressureUnit = z.infer<
  typeof meanArterialPressureUnitEnum
>;

export const MEAN_ARTERIAL_PRESSURE_BASE_UNIT: MeanArterialPressureUnit =
  "mmHg";

export function convertMeanArterialPressureToBaseUnit(
  value: number,
  unit: MeanArterialPressureUnit
): number {
  switch (unit) {
    case "kPa":
      return value * 7.50062;
    case "mmHg":
      return value;
  }
}
