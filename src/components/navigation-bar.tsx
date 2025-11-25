export function NavigationBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="px-4 py-2">
      <h1 className="font-medium text-center">{title}</h1>
      <p className="text-sm text-muted-foreground text-center">{subtitle}</p>
    </div>
  );
}
