import z from "zod";

export const internationalNormalisedRatioSchema = z.coerce.number().min(0);
