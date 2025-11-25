import { cn } from "@/lib/utils";

export function SafeAreaContentWrapper({
  children,
  className,
  paddingTop,
  paddingBottom,
}: {
  children: React.ReactNode;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
}) {
  return (
    <div
      className={cn(className)}
      style={{
        paddingTop: `calc(env(safe-area-inset-top) + ${paddingTop ?? "0px"})`,
        paddingBottom: `calc(env(safe-area-inset-bottom) + ${
          paddingBottom ?? "0px"
        })`,
      }}
    >
      {children}
    </div>
  );
}
