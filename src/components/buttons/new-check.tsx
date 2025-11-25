import { Button } from "@/components/ui/button";
import { INITIAL_APP_STATE } from "@/models/app-state";
import { useAppStore } from "@/providers/app-store-provider";
import { deepEqual } from "fast-equals";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NewCheckButton({
  resetAndStartNewOption = false,
}: {
  resetAndStartNewOption?: boolean;
}) {
  const hasUnsavedChanges = useAppStore((state) => {
    return !deepEqual(
      {
        step: state.step,
        variables: state.variables,
      },
      {
        step: INITIAL_APP_STATE.step,
        variables: INITIAL_APP_STATE.variables,
      },
    );
  });

  const reset = useAppStore((state) => state.reset);

  const router = useRouter();

  if (resetAndStartNewOption && hasUnsavedChanges) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            reset();

            router.push("/new");
          }}
          className="w-full h-12"
        >
          New Check
        </Button>

        <Button asChild>
          <Link href="/new" className="w-full h-12">
            Continue Check
          </Link>
        </Button>
      </>
    );
  }

  return (
    <Button asChild>
      <Link href="/new" className="grow h-12">
        {hasUnsavedChanges ? "Continue Check" : "New Check"}
      </Link>
    </Button>
  );
}
