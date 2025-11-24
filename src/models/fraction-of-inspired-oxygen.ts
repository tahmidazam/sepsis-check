import z from "zod";

export const fractionOfInspiredOxygenSchema = z.coerce.number().min(0).max(1);
