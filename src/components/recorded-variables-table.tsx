import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUnitLabel } from "@/lib/get-unit-label";
import { getValueLabel } from "@/lib/get-value-label";
import { STEPS, STEP_PRIMARY_LABELS } from "@/models/step";
import { Variables } from "@/models/variables";

export function RecordedVariablesTable({
  variables,
}: {
  variables: Variables;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium px-4">Recorded variables</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Variable</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Unit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {STEPS.map((step) => {
            const stepLabel = STEP_PRIMARY_LABELS[step];
            const valueLabel = getValueLabel(step, variables);
            const unitLabel = getUnitLabel(step, variables);

            return (
              <TableRow key={step}>
                <TableCell>{stepLabel}</TableCell>
                <TableCell className="text-right">{valueLabel}</TableCell>
                <TableCell>{unitLabel}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
