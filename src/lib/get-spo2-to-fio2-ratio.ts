import type { Variables } from "@/models/variables";

export function getSpo2ToFio2Ratio(variables: Variables): number | null {
  const { saturationOfPeripheralOxygen, fractionOfInspiredOxygen } = variables;

  if (
    !saturationOfPeripheralOxygen ||
    !fractionOfInspiredOxygen ||
    saturationOfPeripheralOxygen > 97
  )
    return null;

  const spO2ToFiO2Ratio =
    Math.round(saturationOfPeripheralOxygen) /
    Math.round(fractionOfInspiredOxygen * 100) /
    100;

  return spO2ToFiO2Ratio;
}
