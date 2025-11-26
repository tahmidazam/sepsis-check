"use client";

import type { AppStore } from "@/models/app-store";
import { type AppStoreApi, createAppStore } from "@/state/app-store";
import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { useShallow } from "zustand/shallow";

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined,
);

export interface AppStoreProviderProps {
  children: ReactNode;
}

export function AppStoreProvider({ children }: AppStoreProviderProps) {
  const appStoreRef = useRef<AppStoreApi | null>(null);

  if (appStoreRef.current === null) appStoreRef.current = createAppStore();

  return (
    <AppStoreContext.Provider value={appStoreRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
}

export const useAppStore = <T,>(selector: (store: AppStore) => T) => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext)
    throw new Error("useAppStore must be used within AppStoreProvider");

  return useStore(appStoreContext, useShallow(selector));
};

export const useAppStoreContext = () => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext)
    throw new Error("useAppStoreContext must be used within AppStoreProvider");

  return appStoreContext;
};
