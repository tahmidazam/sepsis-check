import { ageBandEnum } from "@/models/age-band";
import { dDimerConcentrationSchema } from "@/models/d-dimer-concentration-unit";
import { fibrinogenConcentrationSchema } from "@/models/fibrinogen-concentration-unit";
import { fractionOfInspiredOxygenSchema } from "@/models/fraction-of-inspired-oxygen";
import { glasgowComaScaleSchema } from "@/models/glasgow-coma-scale";
import { internationalNormalisedRatioSchema } from "@/models/international-normalised-ratio";
import { lactateConcentrationSchema } from "@/models/lactate-conc";
import { meanArterialPressureSchema } from "@/models/mean-arterial-pressure";
import { plateletConcentrationSchema } from "@/models/platelet-concentration-unit";
import { pupilStateEnum } from "@/models/pupil-state";
import { respiratorySupportEnum } from "@/models/respiratory-support";
import { saturationOfPeripheralOxygenSchema } from "@/models/saturation-of-peripheral-oxygen";
import { vasoactiveMedicationCountSchema } from "@/models/vasoactive-medication-count";
import z from "zod";

export const variablesSchema = z.object({
  ageBand: ageBandEnum.nullish(),
  saturationOfPeripheralOxygen: saturationOfPeripheralOxygenSchema.nullish(),
  fractionOfInspiredOxygen: fractionOfInspiredOxygenSchema.nullish(),
  respiratorySupport: respiratorySupportEnum.nullish(),
  vasoactiveMedicationCount: vasoactiveMedicationCountSchema.nullish(),
  lactateConcentration: lactateConcentrationSchema,
  meanArterialPressure: meanArterialPressureSchema,
  plateletConcentration: plateletConcentrationSchema,
  internationalNormalisedRatio: internationalNormalisedRatioSchema.nullish(),
  dDimerConcentration: dDimerConcentrationSchema,
  fibrinogenConcentration: fibrinogenConcentrationSchema,
  glasgowComaScale: glasgowComaScaleSchema.nullish(),
  pupilState: pupilStateEnum.nullish(),
});

export type Variables = z.infer<typeof variablesSchema>;
