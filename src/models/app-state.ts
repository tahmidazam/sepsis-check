import z from "zod";
import { resultSchema } from "@/models/result";
import { stepEnum } from "@/models/step";
import { FIBRINOGEN_CONCENTRATION_BASE_UNIT } from "@/models/units/fibrinogen-concentration";
import { LACTATE_CONCENTRATION_BASE_UNIT } from "@/models/units/lactate-concentration";
import { MEAN_ARTERIAL_PRESSURE_BASE_UNIT } from "@/models/units/mean-arterial-pressure";
import { PLATELET_CONCENTRATION_BASE_UNIT } from "@/models/units/platelet-concentration";
import { variablesSchema } from "@/models/variables";
import { D_DIMER_CONCENTRATION_BASE_UNIT } from "./units/d-dimer-concentration";

export const appStateSchema = z.object({
  step: stepEnum,
  unitsPickerIsPresented: z.boolean(),
  variables: variablesSchema,
  omittedVariables: z.array(stepEnum),
  inputValue: z.string(),
  errorMessage: z.string().nullish(),
  results: z.array(resultSchema),
});

export type AppState = z.infer<typeof appStateSchema>;

export const INITIAL_APP_STATE: AppState = {
  step: "ageBand",
  results: [],
  inputValue: "",
  variables: {
    lactateConcentration: {
      unit: LACTATE_CONCENTRATION_BASE_UNIT,
    },
    meanArterialPressure: {
      unit: MEAN_ARTERIAL_PRESSURE_BASE_UNIT,
    },
    plateletConcentration: {
      unit: PLATELET_CONCENTRATION_BASE_UNIT,
    },
    dDimerConcentration: {
      unit: D_DIMER_CONCENTRATION_BASE_UNIT,
    },
    fibrinogenConcentration: {
      unit: FIBRINOGEN_CONCENTRATION_BASE_UNIT,
    },
  },
  omittedVariables: [],
  unitsPickerIsPresented: false,
};
