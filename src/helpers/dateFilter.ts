import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const FilterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  // for(let i in list) {
  //   if(
  //     list[i].date.getFullYear() === parseInt(year) &&
  //     (list[i].date.getMonth() + 1) === parseInt(month)
  //   ) {
  //     newList.push(list[i]);
  //   }
  // }

  // function written using the filter() method
  newList = list.filter((item) => (
    item.date.getFullYear() === parseInt(year) &&
    (item.date.getMonth() + 1) === parseInt(month)
  ))

  return newList;
}