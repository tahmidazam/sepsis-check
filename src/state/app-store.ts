import { getNewInputValue } from "@/lib/get-new-input-value";
import { removeOmittedVariables } from "@/lib/remove-omitted-variables";
import { scoreVariables } from "@/lib/score-variables";
import { type AppState, INITIAL_APP_STATE } from "@/models/app-state";
import type { AppStore } from "@/models/app-store";
import type { Key } from "@/models/key";
import {
  isDimensionedStep,
  isDimensionlessStep,
  isEnumStep,
  isNumericalStep,
  type Step,
  STEP_ENUM_CASES,
  STEPS,
} from "@/models/step";
import { variablesSchema } from "@/models/variables";
import { v4 as uuidv4 } from "uuid";
import z from "zod";
import { createStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const createAppStore = (
  initialAppState: AppState = INITIAL_APP_STATE,
) => {
  return createStore<AppStore>()(
    devtools(
      persist(
        (set, get) => ({
          ...initialAppState,
          setStep: (newStep: Step) => {
            set((state) => {
              state.clearErrorMessage();

              var newInputValue = getNewInputValue(state, newStep);

              if (state.inputValue !== "") {
                if (isNumericalStep(state.step)) {
                  if (isDimensionedStep(state.step)) {
                    const value = variablesSchema.shape[
                      state.step
                    ].shape.value.safeParse(state.inputValue);

                    if (!value.success) {
                      return {
                        errorMessage: z
                          .prettifyError(value.error)
                          .replaceAll("✖ ", ""),
                      };
                    }

                    return {
                      step: newStep,
                      unitsPickerIsPresented: false,
                      inputValue: newInputValue ?? "",
                      variables: {
                        ...state.variables,
                        [state.step]: {
                          ...state.variables[state.step],
                          value: value.data,
                        },
                      },
                    };
                  }
                  if (isDimensionlessStep(state.step)) {
                    const value = variablesSchema.shape[state.step].safeParse(
                      state.inputValue,
                    );

                    if (!value.success) {
                      return {
                        errorMessage: z
                          .prettifyError(value.error)
                          .replaceAll("✖ ", ""),
                      };
                    }

                    return {
                      step: newStep,
                      unitsPickerIsPresented: false,
                      inputValue: newInputValue ?? "",
                      variables: {
                        ...state.variables,
                        [state.step]: value.data,
                      },
                    };
                  }
                }
              }

              if (isNumericalStep(state.step)) {
                const isOmitted = state.omittedVariables.includes(state.step);

                return {
                  step: newStep,
                  unitsPickerIsPresented: false,
                  inputValue: newInputValue ?? "",
                  ...(!isOmitted
                    ? {
                        omittedVariables: [
                          ...state.omittedVariables,
                          state.step,
                        ],
                      }
                    : {}),
                };
              }

              if (isEnumStep(state.step)) {
                const value = state.variables[state.step] ?? null;

                if (value === null) {
                  const isOmitted = state.omittedVariables.includes(state.step);

                  return {
                    step: newStep,
                    unitsPickerIsPresented: false,
                    inputValue: newInputValue ?? "",
                    ...(!isOmitted
                      ? {
                          omittedVariables: [
                            ...state.omittedVariables,
                            state.step,
                          ],
                        }
                      : {}),
                  };
                }
              }

              return {
                step: newStep,
                unitsPickerIsPresented: false,
                inputValue: newInputValue ?? "",
              };
            });
          },
          reset: () =>
            set((state) => ({ ...initialAppState, results: state.results })),
          toggleUnitPad: () =>
            set((state) => ({
              unitsPickerIsPresented: !state.unitsPickerIsPresented,
            })),
          setUnit: (unit: string) =>
            set((state) => {
              if (!isDimensionedStep(state.step)) return {};

              return {
                variables: {
                  ...state.variables,
                  [state.step]: {
                    ...state.variables[state.step],
                    unit,
                  },
                },
                unitsPickerIsPresented: false,
              };
            }),
          toggleStepOmission: () =>
            set((state) => {
              const isOmitted = state.omittedVariables.includes(state.step);

              if (isOmitted) {
                const newOmittedVariables = state.omittedVariables.filter(
                  (variable) => variable !== state.step,
                );
                return {
                  omittedVariables: newOmittedVariables,
                  unitsPickerIsPresented: false,
                };
              } else {
                const newOmittedVariables = [
                  ...state.omittedVariables,
                  state.step,
                ];

                const currentIndex = STEPS.indexOf(state.step);

                if (currentIndex === STEPS.length - 1) {
                  return {
                    omittedVariables: newOmittedVariables,
                    unitsPickerIsPresented: false,
                  };
                }

                const nextIndex = (currentIndex + 1) % STEPS.length;

                return {
                  omittedVariables: newOmittedVariables,
                  step: STEPS[nextIndex],
                  unitsPickerIsPresented: false,
                };
              }
            }),
          pressKey: (key: Key) =>
            set((state) => {
              if (key === "backspace")
                return { inputValue: state.inputValue.slice(0, -1) };

              return { inputValue: state.inputValue + key };
            }),
          setErrorMessage: (message: string) =>
            set(() => ({ errorMessage: message })),
          clearErrorMessage: () => set(() => ({ errorMessage: null })),
          setEnum: (value: string) =>
            set((state) => {
              if (!isEnumStep(state.step)) return {};

              const enumCase = STEP_ENUM_CASES[state.step];

              if (
                !enumCase ||
                !(value in enumCase.labels) ||
                !enumCase.cases.includes(value as keyof typeof enumCase.labels)
              )
                return {};

              const currentIndex = STEPS.indexOf(state.step);
              const newIndex = (currentIndex + 1) % STEPS.length;
              const newStep = STEPS[newIndex];

              if (currentIndex === STEPS.length - 1) {
                return {
                  variables: {
                    ...state.variables,
                    [state.step]: value,
                  },
                };
              }

              return {
                variables: {
                  ...state.variables,
                  [state.step]: value,
                },
                step: newStep,
              };
            }),
          finish: () => {
            const id = uuidv4();

            set((state) => {
              const variables = removeOmittedVariables(
                state.variables,
                state.omittedVariables,
              );
              return {
                results: [
                  ...state.results,
                  {
                    id,
                    timestamp: Date.now(),
                    variables,
                    ...scoreVariables(variables),
                  },
                ],
              };
            });

            const { reset } = get();

            reset();

            return id;
          },
          clearInput: () => set(() => ({ inputValue: "", errorMessage: null })),
        }),
        {
          name: "app-store",
        },
      ),
    ),
  );
};

export type AppStoreApi = ReturnType<typeof createAppStore>;
