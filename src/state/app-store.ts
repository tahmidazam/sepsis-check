import { v4 as uuidv4 } from "uuid";
import z from "zod";
import { createStore } from "zustand";
import { devtools, persist } from "zustand/middleware";
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
  STEP_ENUM_CASES,
  STEPS,
  type Step,
} from "@/models/step";
import { variablesSchema } from "@/models/variables";

export const createAppStore = (
  initialAppState: AppState = INITIAL_APP_STATE
) => {
  return createStore<AppStore>()(
    devtools(
      persist(
        (set, get) => {
          const setStep = (newStep: Step) => {
            set((state) => {
              get().actions.clearErrorMessage();

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
                      state.inputValue
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
          };

          const reset = () =>
            set((state) => ({
              ...initialAppState,
              results: state.results,
              errorMessage: null,
            }));

          const toggleUnitPad = () =>
            set((state) => ({
              unitsPickerIsPresented: !state.unitsPickerIsPresented,
            }));

          const setUnit = (unit: string) =>
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
            });

          const toggleStepOmission = () =>
            set((state) => {
              const isOmitted = state.omittedVariables.includes(state.step);

              if (isOmitted) {
                const newOmittedVariables = state.omittedVariables.filter(
                  (variable) => variable !== state.step
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
            });

          const pressKey = (key: Key) =>
            set((state) => {
              if (key === "backspace")
                return { inputValue: state.inputValue.slice(0, -1) };

              return { inputValue: state.inputValue + key };
            });

          const setErrorMessage = (message: string) =>
            set(() => ({ errorMessage: message }));

          const clearErrorMessage = () => set(() => ({ errorMessage: null }));

          const setEnum = (value: string) =>
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
            });

          const finish = () => {
            set({ loading: true });
            const id = uuidv4();

            set((state) => {
              const variables = removeOmittedVariables(
                state.variables,
                state.omittedVariables
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

            get().actions.reset();
            set({ loading: false });

            return id;
          };

          const clearInput = () =>
            set(() => ({ inputValue: "", errorMessage: null }));

          const actions = {
            setStep,
            reset,
            toggleUnitPad,
            setUnit,
            toggleStepOmission,
            pressKey,
            setErrorMessage,
            clearErrorMessage,
            setEnum,
            finish,
            clearInput,
          };

          return { ...initialAppState, actions };
        },
        {
          name: "app-store",
          version: 1,
          partialize: (state) => {
            const { actions, ...persisted } = state;
            return persisted;
          },
        }
      )
    )
  );
};

export type AppStoreApi = ReturnType<typeof createAppStore>;
