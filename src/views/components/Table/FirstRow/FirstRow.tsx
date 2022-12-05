import React from "react";
import styles from "./firstRow.module.sass";

const FirstRow = () => {
  return (
    <div className={styles.info_table_row_title}>
      <div className={styles.info_table_column_title}>Уровень</div>
      <div className={styles.info_table_column_title}>Наименование работ</div>
      <div className={styles.info_table_column_title}>Основная з/п</div>
      <div className={styles.info_table_column_title}>Оборудование</div>
      <div className={styles.info_table_column_title}>Накладные расходы</div>
      <div className={styles.info_table_column_title}>Сметная прибыль</div>
    </div>
  );
};

export default FirstRow;
