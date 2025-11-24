import { Button } from "@/components/ui/button";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { useAppStore } from "@/providers/app-store-provider";
import { deepEqual } from "fast-equals";
import Link from "next/link";

export function NewCheckButton() {
  const hasUnsavedChanges = useAppStore((state) => {
    return !deepEqual(
      {
        step: state.step,
        variables: state.variables,
      },
      {
        step: INITIAL_APP_STATE.step,
        variables: INITIAL_APP_STATE.variables,
      }
    );
  });

  return (
    <Button asChild>
      <Link href="/new" className="grow h-12">
        {hasUnsavedChanges ? "Continue Check" : "New Check"}
      </Link>
    </Button>
  );
}
