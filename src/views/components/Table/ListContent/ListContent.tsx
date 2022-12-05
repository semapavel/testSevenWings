import React, { FC } from "react";
import { deleteRow, updateRow } from "../../../../data/actions/contentTable";
import { ContentsTableType } from "../Table.types";

import styles from "./listContent.module.sass";
import { ListContentProps } from "./ListContent.types";

const ListContent: FC<ListContentProps> = ({
  item,
  isRowEditing,
  setIsRowEditing,
  contents,
  setContents,
  setIsNewRow,
  setParId,
  setOnIconRowId,
}) => {
  const isCurrentBeingUpdated = isRowEditing === item.id;

  const handleInputChange = (
    name: string,
    { target: { value } }: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContents((prevList: ContentsTableType[]) =>
      prevList.map((el) => (el.id === item.id ? { ...el, [name]: value } : el))
    );
  };

  const editingRow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsRowEditing(e.key === "Enter" ? 0 : item.id);
    updateRow(item.id, item);
  };

  const renderTitleOrInput = (value: string | number, name: string) => {
    return isCurrentBeingUpdated ? (
      <input
        onKeyDown={(e) => editingRow(e)}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(name, e)}
      />
    ) : (
      value
    );
  };

  const deleteRowTable = (id: number | null) => {
    deleteRow(id);
    setContents(
      contents.filter((el) => {
        return el.id !== id;
      })
    );
  };

  const onClickIcon = (id: null | number) => {
    setIsNewRow(true);
    setParId(id);
    setOnIconRowId(id);
  };

  return (
    <>
      <div
        className={styles.info_table_row_content}
        onDoubleClick={() =>
          setIsRowEditing(isCurrentBeingUpdated ? null : item.id)
        }
      >
        <div className={styles.info_table_column_content}>
          <div className={styles.icon_content}>
            <button onClick={() => onClickIcon(item.id)}></button>
            <button onClick={() => onClickIcon(item.id)}></button>
            <button onClick={() => onClickIcon(item.id)}></button>
            <button onClick={() => deleteRowTable(item.id)}></button>
          </div>
        </div>
        <div className={styles.info_table_column_content}>
          {renderTitleOrInput(item.rowName, "rowName")}
        </div>
        <div className={styles.info_table_column_content}>
          {renderTitleOrInput(item.salary, "salary")}
        </div>
        <div className={styles.info_table_column_content}>
          {renderTitleOrInput(item.equipmentCosts, "equipmentCosts")}
        </div>
        <div className={styles.info_table_column_content}>
          {renderTitleOrInput(item.overheads, "overheads")}
        </div>
        <div className={styles.info_table_column_content}>
          {renderTitleOrInput(item.estimatedProfit, "estimatedProfit")}
        </div>
      </div>
    </>
  );
};

export default ListContent;
