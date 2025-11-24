import type { Key } from "@/models/key";
import type { Step } from "@/models/step";

export type AppActions = {
  toggleUnitPad: () => void;
  setUnit: (unit: string) => void;
  setEnum: (value: string) => void;
  setStep: (newStep: Step) => void;
  reset: () => void;
  toggleStepOmission: () => void;
  pressKey: (key: Key) => void;
  setErrorMessage: (message: string) => void;
  clearErrorMessage: () => void;
  finish: () => void;
  clearInput: () => void;
};
