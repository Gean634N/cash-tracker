import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const FilterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');
  console.log(year, month);
  console.log(list);
  
  
  // for(let i in list) {
  //   console.log(list[i].date.getFullYear());
  //   console.log(parseInt(year));
  //   console.log((list[i].date.getMonth() + 1));
  //   console.log(parseInt(month));
    
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
  console.log(newList);
  
  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;
