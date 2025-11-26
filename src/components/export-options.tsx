import { ExportJSONButton } from "@/components/buttons/export-json";
import { Result } from "@/models/result";

export function ExportOptions({ result }: { result: Result }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-lg mx-auto items-start">
      <h2 className="font-medium px-4">Export</h2>

      <div className="px-4 flex flex-col items-start">
        <ExportJSONButton
          json={result}
          filename={`${result.id}.json`}
          className="text-left p-0"
        />
      </div>
    </div>
  );
}
