import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Result } from "@/models/result";

export function MetadataTable({ result }: { result: Result }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-lg mx-auto">
      <h2 className="font-medium px-4">Metadata</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>{new Date(result.timestamp).toLocaleString()}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Local identifier</TableCell>
            <TableCell className="text-wrap w-full whitespace-normal wrap-break-word">
              <code>{result.id}</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
