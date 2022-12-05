import React, { FC } from "react";
import styles from "./editForm.module.sass";
import { EditFormProps } from "./EditForm.types";

const EditForm: FC<EditFormProps> = ({ onKeyDown, newRow, updatedRow }) => {
  return (
    <form className={styles.info_table_row_content}>
      <div className={styles.info_table_column_content}></div>
      <div className={styles.info_table_column_content}>
        <input
          onKeyDown={onKeyDown}
          name="rowName"
          value={newRow.rowName}
          onChange={(event) => updatedRow(event)}
          type="text"
        />
      </div>
      <div className={styles.info_table_column_content}>
        <input
          onKeyDown={onKeyDown}
          name="salary"
          value={newRow.salary}
          onChange={(event) => updatedRow(event)}
          type="number"
        />
      </div>
      <div className={styles.info_table_column_content}>
        <input
          onKeyDown={onKeyDown}
          name="equipmentCosts"
          value={newRow.equipmentCosts}
          onChange={(event) => updatedRow(event)}
          type="number"
        />
      </div>
      <div className={styles.info_table_column_content}>
        <input
          onKeyDown={onKeyDown}
          name="overheads"
          value={newRow.overheads}
          onChange={(event) => updatedRow(event)}
          type="number"
        />
      </div>
      <div className={styles.info_table_column_content}>
        <input
          onKeyDown={onKeyDown}
          name="estimatedProfit"
          value={newRow.estimatedProfit}
          onChange={(event) => updatedRow(event)}
          type="number"
        />
      </div>
    </form>
  );
};

export default EditForm;
