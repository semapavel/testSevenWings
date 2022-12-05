import { NewRowType } from "../Table.types";

export interface EditFormProps {
  newRow: NewRowType;
  onKeyDown: (event: { key: string }) => void;
  updatedRow: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
