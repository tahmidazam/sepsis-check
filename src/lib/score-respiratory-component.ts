import { getSpo2ToFio2Ratio } from "@/lib/get-spo2-to-fio2-ratio";
import type { Variables } from "@/models/variables";

export function scoreRespiratoryComponent(variables: Variables): number | null {
  const { respiratorySupport } = variables;

  const spo2ToFio2Ratio = getSpo2ToFio2Ratio(variables);

  if (!respiratorySupport || !spo2ToFio2Ratio) return null;

  switch (respiratorySupport) {
    case "none":
      return 0;
    case "non-invasive":
      if (spo2ToFio2Ratio < 292) {
        return 1;
      } else {
        return 0;
      }
    case "invasive":
      if (spo2ToFio2Ratio < 148) {
        return 3;
      } else if (spo2ToFio2Ratio < 220) {
        return 2;
      } else {
        return 0;
      }
  }
}
