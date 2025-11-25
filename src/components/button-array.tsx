import { cn } from "@/lib/utils";

export function ButtonArray({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-4 py-2 grid grid-flow-col auto-cols-fr gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}
