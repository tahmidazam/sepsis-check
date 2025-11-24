import z from "zod";

export const PUPIL_STATE_CASES = ["reactive", "fixed-bilaterally"] as const;

export const pupilStateEnum = z.enum(PUPIL_STATE_CASES);

export type PupilState = z.infer<typeof pupilStateEnum>;

export const PUPIL_STATE_LABELS: Record<PupilState, string> = {
  reactive: "Reactive",
  "fixed-bilaterally": "Fixed bilaterally",
} as const;
