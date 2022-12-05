import React, { FC, useEffect, useState } from "react";
import {
  createRow,
  eID,
  getRowList,
  parentRowName,
} from "../../../data/actions/contentTable";

import EditForm from "./EditForm/EditForm";
import FirstRow from "./FirstRow/FirstRow";

import ListContent from "./ListContent/ListContent";

import styles from "./table.module.sass";
import { ContentsTableType, NewRowType, UpdateRowType } from "./Table.types";

const Table: FC = () => {
  const [isNewRow, setIsNewRow] = useState(false);
  const [isRowEditing, setIsRowEditing] = useState<number | null>(0);
  const [isHoverIcon, setIsHoverIcon] = useState(true);
  const [parId, setParId] = useState<number | null>(null);
  const [onIconRowId, setOnIconRowId] = useState<number | null | undefined>(
    undefined
  );

  const [newRow, setNewRow] = useState<NewRowType>({
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    parentId: parId,
    rowName: "string",
    salary: 0,
    supportCosts: 0,
  });
  console.log(newRow);

  const [updateRow, setUpdateRow] = useState<UpdateRowType>({
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: "",
    salary: 0,
    supportCosts: 0,
  });

  const [contents, setContents] = useState<ContentsTableType[]>([
    {
      child: [],
      equipmentCosts: 0,
      estimatedProfit: 0,
      id: eID,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: parentRowName,
      salary: 0,
      supportCosts: 0,
      total: 0,
    },
  ]);
  console.log(contents);

  useEffect(() => {
    getRowList(contents, setContents);
  }, []);

  const updatedRow = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRow({
      ...newRow,
      [event.target.name]: event.target.value,
    });
  };

  const onKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      createRow(newRow, contents, setContents);
      setIsNewRow(false);
      setOnIconRowId(undefined);
    }
  };

  return (
    <div className={styles.info_table}>
      <FirstRow />
      {contents.map((item) =>
        onIconRowId === item.id ? (
          <>
            <ListContent
              key={item.id}
              item={item}
              isRowEditing={isRowEditing}
              setIsRowEditing={setIsRowEditing}
              contents={contents}
              setContents={setContents}
              setIsNewRow={setIsNewRow}
              setParId={setParId}
              setOnIconRowId={setOnIconRowId}
            />
            <EditForm
              key={item.id}
              onKeyDown={onKeyDown}
              newRow={newRow}
              updatedRow={updatedRow}
            />
          </>
        ) : (
          <>
            <ListContent
              key={item.id}
              item={item}
              isRowEditing={isRowEditing}
              setIsRowEditing={setIsRowEditing}
              contents={contents}
              setContents={setContents}
              setIsNewRow={setIsNewRow}
              setParId={setParId}
              setOnIconRowId={setOnIconRowId}
            />
            {item.child &&
              item.child.map((elem) => (
                <ListContent
                  key={elem.id}
                  item={elem}
                  isRowEditing={isRowEditing}
                  setIsRowEditing={setIsRowEditing}
                  contents={contents}
                  setContents={setContents}
                  setIsNewRow={setIsNewRow}
                  setParId={setParId}
                  setOnIconRowId={setOnIconRowId}
                />
              ))}
          </>
        )
      )}
    </div>
  );
};

export default Table;
