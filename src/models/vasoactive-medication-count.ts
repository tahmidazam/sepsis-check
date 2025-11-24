import z from "zod";

export const vasoactiveMedicationCountSchema = z.coerce.number().int().min(0);
