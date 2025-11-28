import { deepEqual } from "fast-equals";
import { useContext } from "react";
import { useStore } from "zustand";
import { useShallow } from "zustand/shallow";
import { getUnitLabel } from "@/lib/get-unit-label";
import { INITIAL_APP_STATE } from "@/models/app-state";
import type { AppStore } from "@/models/app-store";
import {
  type EnumStep,
  isEnumStep,
  isIntegerStep,
  isNumericalStep,
  STEP_ENUM_CASES,
} from "@/models/step";
import { AppStoreContext } from "@/providers/app-store-provider";

const useAppStore = <T>(selector: (store: AppStore) => T) => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext)
    throw new Error("useAppStore must be used within AppStoreProvider");

  return useStore(appStoreContext, useShallow(selector));
};

export const useAppActions = () => useAppStore((state) => state.actions);

export const useResult = (id: string) =>
  useAppStore((state) => state.results.find((i) => i.id === id));

export const useErrorMessage = () => useAppStore((state) => state.errorMessage);

export const useStep = () => useAppStore((state) => state.step);

export const useVariables = () => useAppStore((state) => state.variables);

export const useOmittedVariables = () =>
  useAppStore((state) => state.omittedVariables);

export const useUnsavedChanges = () =>
  useAppStore((state) => {
    return !deepEqual(
      {
        step: state.step,
        variables: state.variables,
      },
      {
        step: INITIAL_APP_STATE.step,
        variables: INITIAL_APP_STATE.variables,
      }
    );
  });

export const useStepIsOmitted = () =>
  useAppStore((state) => state.omittedVariables.includes(state.step));

export const useUnit = () =>
  useAppStore((state) => {
    const variable = state.variables[state.step];
    if (
      typeof variable === "object" &&
      variable !== null &&
      "unit" in variable
    ) {
      return variable.unit;
    }
    return null;
  });

export const useInputValue = () => useAppStore((state) => state.inputValue);

export const useUnitLabel = () =>
  useAppStore((state) => getUnitLabel(state.step, state.variables));

export const useEnumLabel = (): string | null =>
  useAppStore((state) => {
    if (!isEnumStep(state.step)) return null;

    const value = state.variables[state.step];
    const labels = STEP_ENUM_CASES[state.step]?.labels;

    if (!value || !labels) return null;

    return labels[value as keyof typeof labels];
  });

export const useStepIsEnum = () =>
  useAppStore((state) => isEnumStep(state.step));

export const useEnumValue = () =>
  useAppStore((state) => {
    const step = state.step;

    if (!isEnumStep(step)) {
      return null;
    }

    return state.variables[step as EnumStep] ?? null;
  });

export const useUnitsPickerIsPresented = () =>
  useAppStore((state) => state.unitsPickerIsPresented);

export const useDecimalPresentInInputValue = () =>
  useAppStore((state) => state.inputValue.includes("."));

export const useStepIsInteger = () =>
  useAppStore((state) => isIntegerStep(state.step));

export const useStepIsNumerical = () =>
  useAppStore((state) => isNumericalStep(state.step));

export const useNumericalValue = () =>
  useAppStore((state) => {
    const variable = state.variables[state.step];
    if (
      typeof variable === "object" &&
      variable !== null &&
      "unit" in variable
    ) {
      return variable.unit;
    }
    return null;
  });

export const useResults = () => useAppStore((state) => state.results);
