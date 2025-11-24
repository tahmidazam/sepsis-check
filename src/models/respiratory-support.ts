import z from "zod";

export const RESPIRATORY_SUPPORT_CASES = [
  "none",
  "non-invasive",
  "invasive",
] as const;

export const respiratorySupportEnum = z.enum(RESPIRATORY_SUPPORT_CASES);

export type RespiratorySupport = z.infer<typeof respiratorySupportEnum>;

export const RESPIRATORY_SUPPORT_LABELS: Record<RespiratorySupport, string> = {
  none: "None",
  "non-invasive": "Non-invasive",
  invasive: "Invasive",
} as const;
