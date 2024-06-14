import { defineAction, z } from 'astro:actions';
import { list } from '@/store/todoStore';

export const server = {
  addTask: defineAction({
    accept: 'form',
    input: z.object({
      task: z.string(),
    }),
    handler: async ({ task }) => {
      list.value.push(task);

      return list.value;
    },
  }),

  getTodos: defineAction({
    handler: async () => {
      return list.value;
    },
  }),

  deleteTask: defineAction({
    handler: async ({ index }) => {
      if (index === undefined) {
        list.value.pop();
      } else {
        list.value.splice(index as number, 1);
      }

      return list.value;
    },
  }),
};
