import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useResults } from "@/hooks/state";
import { cn } from "@/lib/utils";
import { DIAGNOSIS_LABELS } from "@/models/diagnosis";

export function ResultsTable({ className }: { className?: string }) {
  const results = useResults();
  const router = useRouter();

  if (results.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-2 max-w-lg mx-auto", className)}>
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
