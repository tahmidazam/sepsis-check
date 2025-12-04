import z from "zod";
import { ageBandEnum } from "@/models/age-band";
import { pupilStateEnum } from "@/models/pupil-state";
import { respiratorySupportEnum } from "@/models/respiratory-support";
import { dDimerConcentrationUnitEnum } from "@/models/units/d-dimer-concentration";
import { fibrinogenConcentrationUnitEnum } from "@/models/units/fibrinogen-concentration";
import { lactateConcentrationUnitEnum } from "@/models/units/lactate-concentration";
import { meanArterialPressureUnitEnum } from "@/models/units/mean-arterial-pressure";
import { plateletConcentrationUnitEnum } from "@/models/units/platelet-concentration";

export const variablesSchema = z.object({
  ageBand: ageBandEnum.nullish(),
  saturationOfPeripheralOxygen: z.coerce.number().min(0).max(100).nullish(),
  fractionOfInspiredOxygen: z.coerce.number().min(0).max(1).nullish(),
  respiratorySupport: respiratorySupportEnum.nullish(),
  vasoactiveMedicationCount: z.coerce.number().int().min(0).nullish(),
  lactateConcentration: z.object({
    value: z.coerce.number().min(0).nullish(),
    unit: lactateConcentrationUnitEnum,
  }),
  meanArterialPressure: z.object({
    value: z.coerce.number().min(0).nullish(),
    unit: meanArterialPressureUnitEnum,
  }),
  plateletConcentration: z.object({
    value: z.coerce.number().min(0).nullish(),
    unit: plateletConcentrationUnitEnum,
  }),
  internationalNormalisedRatio: z.coerce.number().min(0).nullish(),
  dDimerConcentration: z.object({
    value: z.coerce.number().min(0).nullish(),
    unit: dDimerConcentrationUnitEnum,
  }),
  fibrinogenConcentration: z.object({
    value: z.coerce.number().min(0).nullish(),
    unit: fibrinogenConcentrationUnitEnum,
  }),
  glasgowComaScale: z.coerce.number().int().min(3).max(15).nullish(),
  pupilState: pupilStateEnum.nullish(),
});

export type Variables = z.infer<typeof variablesSchema>;
