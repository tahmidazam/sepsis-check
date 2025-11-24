import z from "zod";

export const KEY_CASES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "0",
  "backspace",
] as const;

export const keyEnum = z.enum(KEY_CASES);
export type Key = z.infer<typeof keyEnum>;
