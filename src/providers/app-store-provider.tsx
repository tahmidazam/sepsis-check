"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";
import { type AppStoreApi, createAppStore } from "@/state/app-store";

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
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

export const useAppStoreContext = () => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext)
    throw new Error("useAppStoreContext must be used within AppStoreProvider");

  return appStoreContext;
};
