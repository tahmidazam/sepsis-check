import { diagnosisEnum } from "@/models/diagnosis";
import { variablesSchema } from "@/models/variables";
import z from "zod";

export const resultSchema = z.object({
  id: z.uuid(),
  timestamp: z.number(),
  variables: variablesSchema,
  vasoactiveMedicationsSubcomponent: z.number().nullish(),
  lactateSubcomponent: z.number().nullish(),
  meanArterialPressureSubcomponent: z.number().nullish(),
  plateletSubcomponent: z.number().nullish(),
  inrSubcomponent: z.number().nullish(),
  dDimerSubcomponent: z.number().nullish(),
  fibrinogenSubcomponent: z.number().nullish(),
  respiratoryComponent: z.number().nullish(),
  cardiovascularComponent: z.number().nullish(),
  coagulationComponent: z.number().nullish(),
  neurologicalComponent: z.number().nullish(),
  phoenixSepsisScore: z.number().nullish(),
  diagnosis: diagnosisEnum,
});

export type Result = z.infer<typeof resultSchema>;
