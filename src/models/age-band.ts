import z from "zod";

export const AGE_BANDS = [
  "lessThanOneMonth",
  "oneToLessThanTwelveMonths",
  "oneToLessThanTwoYears",
  "twoToLessThanFiveYears",
  "fiveToLessThanTwelveYears",
  "twelveToLessThanEighteenYears",
] as const;

export const ageBandEnum = z.enum(AGE_BANDS);

export type AgeBand = z.infer<typeof ageBandEnum>;

export const AGE_BAND_LABELS: Record<AgeBand, string> = {
  lessThanOneMonth: "<1 m",
  oneToLessThanTwelveMonths: "1 to <12 m",
  oneToLessThanTwoYears: "1 to <2 y",
  twoToLessThanFiveYears: "2 to <5 y",
  fiveToLessThanTwelveYears: "5 to <12 y",
  twelveToLessThanEighteenYears: "12 to <18 y",
} as const;
