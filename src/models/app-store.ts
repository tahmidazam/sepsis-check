import type { AppActions } from "@/models/app-actions";
import type { AppState } from "@/models/app-state";

export type AppStore = AppState & AppActions;
