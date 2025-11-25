import { cn } from "@/lib/utils";

export function FixBottom({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full z-20 bg-background border-t",
        className
      )}
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {children}
    </div>
  );
}
