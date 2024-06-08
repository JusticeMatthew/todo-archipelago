import { atom } from 'nanostores';

export const list = atom([]);

export const addTask = (task) => {
  list.value.push(task);
  console.log(task);
  console.log(list.value);
};
