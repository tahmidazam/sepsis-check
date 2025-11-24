import z from "zod";

export const DIAGNOSES_CASES = [
  "no-diagnosis",
  "no-sepsis",
  "sepsis",
  "septic-shock",
] as const;

export const diagnosisEnum = z.enum(DIAGNOSES_CASES);

export type Diagnosis = z.infer<typeof diagnosisEnum>;

export const DIAGNOSIS_LABELS: Record<Diagnosis, string> = {
  "no-diagnosis": "No diagnosis",
  "no-sepsis": "No sepsis",
  sepsis: "Sepsis",
  "septic-shock": "Septic shock",
};
