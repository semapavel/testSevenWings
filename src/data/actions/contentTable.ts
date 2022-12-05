import axios from "axios";
import { ContentsTableType, NewRowType } from "../../views/components/Table/Table.types";


export const eID: number = 31155;
export const parentRowName: string = "6251c372-3b6c-4ecd-8bd8-e193d134e8a8";

export async function getRowList(contents: ContentsTableType[],
  setContents: React.Dispatch<React.SetStateAction<ContentsTableType[]>>) {
  try {
    const resList = await axios.get(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`
    );

    setContents(contents.concat(resList.data));

  } catch (e) {
    alert(`Произошла ошибка: ${e}`);
  }
}

export async function createRow(newRow: NewRowType,
  contents: ContentsTableType[],
  setContents: React.Dispatch<React.SetStateAction<ContentsTableType[]>>) {
  try {
    const resList = await axios.post(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/create`,
      newRow
    );
    console.log(resList.data.current)
    setContents([...contents, resList.data.current]);
  } catch (e) { alert(`Произошла ошибка: ${e}`); }
}

export async function updateRow(rID: number | null, item: ContentsTableType) {
  try {
    const resList = await axios.post(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${rID}/update`, item
    );

    console.log(resList.data);
  } catch (e) { alert(`Произошла ошибка: ${e}`); }
}

export async function deleteRow(rID: number | null) {
  try {
    const resList = await axios.delete(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${rID}/delete`
    );

    // console.log(resList.data.current);
  } catch (e) { alert(`Произошла ошибка: ${e}`); }
}
