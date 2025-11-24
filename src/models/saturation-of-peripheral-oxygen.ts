import z from "zod";

export const saturationOfPeripheralOxygenSchema = z.coerce
  .number()
  .min(0)
  .max(100);
