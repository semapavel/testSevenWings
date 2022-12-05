import { ContentsTableType } from "../Table.types";

export interface ListContentProps {
  item: ContentsTableType;
  isRowEditing: null | number;
  setIsRowEditing: (isRowEditing: null | number) => void;
  contents: ContentsTableType[];
  setContents: (prevList: any) => void;
  setIsNewRow: (bool: boolean) => void;
  setParId: (id: null | number) => void;
  setOnIconRowId: (id: null | number) => void;
}
