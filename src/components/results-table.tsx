import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DIAGNOSIS_LABELS } from "@/models/diagnosis";
import { useAppStore } from "@/providers/app-store-provider";
import { useRouter } from "next/navigation";

export function ResultsTable() {
  const results = useAppStore((state) => state.results);
  const router = useRouter();

  if (results.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium px-4">Check history</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Diagnosis</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={result.id}
              className="cursor-pointer"
              onClick={() => router.push(`/result/${result.id}`)}
            >
              <TableCell>
                {DIAGNOSIS_LABELS[result.diagnosis] ??
                  DIAGNOSIS_LABELS["no-diagnosis"]}
              </TableCell>
              <TableCell>{result.phoenixSepsisScore ?? "No score"}</TableCell>

              <TableCell>
                {new Date(result.timestamp).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">{results.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
