import { Spinner } from "@/components/ui/spinner";

export function Loading() {
  return (
    <div className="flex flex-col gap-2 h-full items-center justify-center">
      <Spinner className="text-muted-foreground" />
      <p className="text-xs text-muted-foreground">Loading...</p>
    </div>
  );
}
