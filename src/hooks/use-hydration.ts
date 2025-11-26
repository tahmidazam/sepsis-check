import { useEffect, useState } from "react";
import { useAppStoreContext } from "@/providers/app-store-provider";

export const useHydration = () => {
  const appStoreContext = useAppStoreContext();
  const [hydrated, setHydrated] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: We only want to run this on mount.
  useEffect(() => {
    const unsubFinishHydration = appStoreContext.persist.onFinishHydration(() =>
      setHydrated(true),
    );

    setHydrated(appStoreContext.persist.hasHydrated());

    return () => {
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};
