import { cn } from "@/lib/utils";

export function FixTop({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full fixed top-0 left-0 border-b z-20 bg-background",
        className
      )}
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="max-w-lg mx-auto"> {children}</div>
    </div>
  );
}
