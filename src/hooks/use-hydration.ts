import { useAppStoreContext } from "@/providers/app-store-provider";
import { useEffect, useState } from "react";

export const useHydration = () => {
  const appStoreContext = useAppStoreContext();
  const [hydrated, setHydrated] = useState(false);

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
