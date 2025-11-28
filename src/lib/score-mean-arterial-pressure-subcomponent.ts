import { convertMeanArterialPressureToBaseUnit } from "@/models/mean-arterial-pressure";
import type { Variables } from "@/models/variables";

export function scoreMeanArterialPressureSubcomponent(
  variables: Variables
): number | null {
  const { meanArterialPressure, ageBand } = variables;

  if (!meanArterialPressure || !ageBand) return null;

  const { value, unit } = meanArterialPressure;

  if (!value || !unit) return null;

  const meanArterialPressureInBaseUnit = convertMeanArterialPressureToBaseUnit(
    value,
    unit
  );

  if (ageBand === "lessThanOneMonth") {
    if (meanArterialPressureInBaseUnit < 17) {
      return 2;
    } else if (meanArterialPressureInBaseUnit < 30) {
      return 1;
    } else {
      return 0;
    }
  } else if (ageBand === "oneToLessThanTwelveMonths") {
    if (meanArterialPressureInBaseUnit < 25) {
      return 2;
    } else if (meanArterialPressureInBaseUnit < 39) {
      return 1;
    } else {
      return 0;
    }
  } else if (ageBand === "oneToLessThanTwoYears") {
    if (meanArterialPressureInBaseUnit < 31) {
      return 2;
    } else if (meanArterialPressureInBaseUnit < 43) {
      return 1;
    } else {
      return 0;
    }
  } else if (ageBand === "twoToLessThanFiveYears") {
    if (meanArterialPressureInBaseUnit < 32) {
      return 2;
    } else if (meanArterialPressureInBaseUnit < 44) {
      return 1;
    } else {
      return 0;
    }
  } else if (ageBand === "fiveToLessThanTwelveYears") {
    if (meanArterialPressureInBaseUnit < 32) {
      return 2;
    } else if (meanArterialPressureInBaseUnit < 44) {
      return 1;
    } else {
      return 0;
    }
  } else if (ageBand === "twelveToLessThanEighteenYears") {
    if (meanArterialPressureInBaseUnit < 38) {
      return 2;
    } else if (meanArterialPressureInBaseUnit < 51) {
      return 1;
    } else {
      return 0;
    }
  }

  return null;
}
