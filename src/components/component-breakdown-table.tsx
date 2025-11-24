import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Result, resultSchema } from "@/models/result";

const COMPONENT_RESULT_KEY_MAP: {
  [key: string]: {
    label: string;
    resultSchemaKey: keyof typeof resultSchema.shape;
  };
} = {
  respiratory: {
    label: "Respiratory",
    resultSchemaKey: "respiratoryComponent",
  },
  cardiovascular: {
    label: "Cardiovascular",
    resultSchemaKey: "cardiovascularComponent",
  },
  coagulation: {
    label: "Coagulation",
    resultSchemaKey: "coagulationComponent",
  },
  neurological: {
    label: "Neurological",
    resultSchemaKey: "neurologicalComponent",
  },
};

export function ComponentBreakdownTable({ result }: { result: Result }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium px-4">Component breakdown</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Component</TableHead>
            <TableHead>Score</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Object.entries(COMPONENT_RESULT_KEY_MAP).map(
            ([component, { label, resultSchemaKey }]) => {
              return (
                <TableRow key={label}>
                  <TableCell>
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </TableCell>
                  <TableCell className="w-full">
                    {result[resultSchemaKey]?.toString() ?? "No score"}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell>Phoenix Sepsis Score</TableCell>
            <TableCell className="w-full">
              {result.phoenixSepsisScore ?? "No score"}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
