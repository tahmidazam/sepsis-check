import { Button } from "@/components/ui/button";

export function ExportJSONButton({
  json,
  filename,
  className,
}: {
  json: any;
  filename: string;
  className?: string;
}) {
  const handleExport = () => {
    const jsonString = JSON.stringify(json, null, 2);

    const blob = new Blob([jsonString], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="link" onClick={handleExport} className={className}>
      Export to JavaScript Object Notation (JSON)
    </Button>
  );
}
