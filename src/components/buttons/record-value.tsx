import { Button } from "@/components/ui/button";
import { useAppActions, useStepIsOmitted } from "@/hooks/state";

export function RecordValueButton() {
  const { toggleStepOmission } = useAppActions();
  const stepIsOmitted = useStepIsOmitted();

  if (!stepIsOmitted) return null;

  return (
    <>
      <p className="col-span-3 row-span-3 text-muted-foreground text-center text-balance h-full flex flex-col justify-center text-sm">
        This variable was previously left blank. Would you like to record a
        value?
      </p>
      <Button className="col-span-3 w-full h-12" onClick={toggleStepOmission}>
        Record Value
      </Button>
    </>
  );
}
