import z from "zod";

export const glasgowComaScaleSchema = z.coerce.number().int().min(3).max(15);
