import z from "zod";
import { AGE_BAND_LABELS, AGE_BANDS, type AgeBand } from "@/models/age-band";
import {
  PUPIL_STATE_CASES,
  PUPIL_STATE_LABELS,
  type PupilState,
} from "@/models/pupil-state";
import {
  RESPIRATORY_SUPPORT_CASES,
  RESPIRATORY_SUPPORT_LABELS,
  type RespiratorySupport,
} from "@/models/respiratory-support";
import {
  FIBRINOGEN_CONCENTRATION_UNIT_CASES,
  type FibrinogenConcentrationUnit,
} from "@/models/units/fibrinogen-concentration";
import {
  LACTATE_CONCENTRATION_UNIT_CASES,
  type LactateConcentrationUnit,
} from "@/models/units/lactate-concentration";
import {
  MEAN_ARTERIAL_PRESSURE_UNIT_CASES,
  type MeanArterialPressureUnit,
} from "@/models/units/mean-arterial-pressure";
import {
  PLATELET_CONCENTRATION_UNIT_CASES,
  type PlateletConcentrationUnit,
} from "@/models/units/platelet-concentration";
import {
  D_DIMER_CONCENTRATION_UNIT_CASES,
  type DDimerConcentrationUnit,
} from "./units/d-dimer-concentration";

export const STEPS = [
  "ageBand",
  "saturationOfPeripheralOxygen",
  "fractionOfInspiredOxygen",
  "respiratorySupport",
  "vasoactiveMedicationCount",
  "lactateConcentration",
  "meanArterialPressure",
  "plateletConcentration",
  "internationalNormalisedRatio",
  "dDimerConcentration",
  "fibrinogenConcentration",
  "glasgowComaScale",
  "pupilState",
] as const;

export const stepEnum = z.enum(STEPS);

export type Step = z.infer<typeof stepEnum>;

export const DIMENSIONED_STEP_CASES = [
  "meanArterialPressure",
  "lactateConcentration",
  "dDimerConcentration",
  "fibrinogenConcentration",
  "plateletConcentration",
] as const;

export type DimensionedStep = Extract<
  Step,
  (typeof DIMENSIONED_STEP_CASES)[number]
>;

export const DIMENSIONLESS_STEP_CASES = [
  "saturationOfPeripheralOxygen",
  "fractionOfInspiredOxygen",
  "vasoactiveMedicationCount",
  "glasgowComaScale",
  "internationalNormalisedRatio",
] as const;

export type DimensionlessStep = Extract<
  Step,
  (typeof DIMENSIONLESS_STEP_CASES)[number]
>;

export const NUMERICAL_STEP_CASES = [
  "saturationOfPeripheralOxygen",
  "fractionOfInspiredOxygen",
  "vasoactiveMedicationCount",
  "lactateConcentration",
  "meanArterialPressure",
  "plateletConcentration",
  "internationalNormalisedRatio",
  "dDimerConcentration",
  "fibrinogenConcentration",
  "glasgowComaScale",
] as const;

export type NumericalStep = Extract<
  Step,
  (typeof NUMERICAL_STEP_CASES)[number]
>;

export const INTEGER_STEP_CASES = [
  "vasoactiveMedicationCount",
  "glasgowComaScale",
] as const;

export type IntegerStep = Extract<Step, (typeof INTEGER_STEP_CASES)[number]>;

export const ENUM_STEP_CASES = [
  "ageBand",
  "respiratorySupport",
  "pupilState",
] as const;

export type EnumStep = Extract<Step, (typeof ENUM_STEP_CASES)[number]>;

export const STEP_PRIMARY_LABELS: Record<Step, string> = {
  ageBand: "Age band",
  saturationOfPeripheralOxygen: "SpO2",
  fractionOfInspiredOxygen: "FiO2",
  respiratorySupport: "Respiratory support",
  vasoactiveMedicationCount: "Vasoactive medications",
  lactateConcentration: "Lactate",
  meanArterialPressure: "MAP",
  plateletConcentration: "Platelet",
  internationalNormalisedRatio: "INR",
  dDimerConcentration: "D-dimer",
  fibrinogenConcentration: "Fibrinogen",
  glasgowComaScale: "GCS",
  pupilState: "Pupil state",
} as const;

export const STEP_SECONDARY_LABELS: Record<Step, string | null> = {
  ageBand:
    "Age is not adjusted for prematurity, and the criteria do not apply to birth hospitalisations, children with postconcenptional age <37 weeks, or those aged ≥18 years.",
  saturationOfPeripheralOxygen: null,
  fractionOfInspiredOxygen: null,
  respiratorySupport: null,
  vasoactiveMedicationCount:
    "Vasoactive medications include any dose of adrenaline, noradrenaline, dopamine, dobutamine, milrinone, and/or vasopressin (for shock).",
  lactateConcentration: "Lactate can be arterial or venous.",
  meanArterialPressure:
    "Use measured mean arterial pressure preferentially (invasive arterial if available or noninavasive oscillometric), and if measured mean arterial pressure is not available, a calculated mean arterial pressure (⅓ × systolic + ⅔ × diastolic) may be used as an alternative.",
  plateletConcentration: null,
  internationalNormalisedRatio: null,
  dDimerConcentration: null,
  fibrinogenConcentration: null,
  glasgowComaScale: null,
  pupilState: null,
} as const;

export const STEP_UNIT_CASES: Record<
  Step,
  | ReadonlyArray<LactateConcentrationUnit>
  | ReadonlyArray<MeanArterialPressureUnit>
  | ReadonlyArray<PlateletConcentrationUnit>
  | ReadonlyArray<FibrinogenConcentrationUnit>
  | ReadonlyArray<DDimerConcentrationUnit>
  | null
> = {
  lactateConcentration: LACTATE_CONCENTRATION_UNIT_CASES,
  meanArterialPressure: MEAN_ARTERIAL_PRESSURE_UNIT_CASES,
  plateletConcentration: PLATELET_CONCENTRATION_UNIT_CASES,
  fibrinogenConcentration: FIBRINOGEN_CONCENTRATION_UNIT_CASES,
  dDimerConcentration: D_DIMER_CONCENTRATION_UNIT_CASES,
  ageBand: null,
  saturationOfPeripheralOxygen: null,
  fractionOfInspiredOxygen: null,
  respiratorySupport: null,
  vasoactiveMedicationCount: null,
  internationalNormalisedRatio: null,
  glasgowComaScale: null,
  pupilState: null,
} as const;

export const STEP_ENUM_CASES: Record<
  Step,
  | {
      cases: ReadonlyArray<AgeBand>;
      labels: Record<AgeBand, string>;
    }
  | {
      cases: ReadonlyArray<RespiratorySupport>;
      labels: Record<RespiratorySupport, string>;
    }
  | {
      cases: ReadonlyArray<PupilState>;
      labels: Record<PupilState, string>;
    }
  | null
> = {
  ageBand: {
    cases: AGE_BANDS,
    labels: AGE_BAND_LABELS,
  },
  respiratorySupport: {
    cases: RESPIRATORY_SUPPORT_CASES,
    labels: RESPIRATORY_SUPPORT_LABELS,
  },
  pupilState: {
    cases: PUPIL_STATE_CASES,
    labels: PUPIL_STATE_LABELS,
  },
  vasoactiveMedicationCount: null,
  internationalNormalisedRatio: null,
  glasgowComaScale: null,
  lactateConcentration: null,
  meanArterialPressure: null,
  plateletConcentration: null,
  fibrinogenConcentration: null,
  dDimerConcentration: null,
  saturationOfPeripheralOxygen: null,
  fractionOfInspiredOxygen: null,
} as const;

export function isIntegerStep(step: Step): step is IntegerStep {
  return INTEGER_STEP_CASES.includes(step as IntegerStep);
}

export function isDimensionedStep(step: Step): step is DimensionedStep {
  return DIMENSIONED_STEP_CASES.includes(step as DimensionedStep);
}

export function isDimensionlessStep(step: Step): step is DimensionlessStep {
  return DIMENSIONLESS_STEP_CASES.includes(step as DimensionlessStep);
}

export function isNumericalStep(step: Step): step is NumericalStep {
  return NUMERICAL_STEP_CASES.includes(step as NumericalStep);
}

export function isEnumStep(step: Step): step is EnumStep {
  return ENUM_STEP_CASES.includes(step as EnumStep);
}
