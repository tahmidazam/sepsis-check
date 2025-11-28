import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppActions, useUnsavedChanges } from "@/hooks/state";

export function NewCheckButton({
  resetAndStartNewOption = false,
}: {
  resetAndStartNewOption?: boolean;
}) {
  const hasUnsavedChanges = useUnsavedChanges();
  const { reset } = useAppActions();

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
