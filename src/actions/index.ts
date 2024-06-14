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
      return list.get();
    },
  }),

  deleteTask: defineAction({
    input: z.string(),
    handler: async (task) => {
      const index = list.get().indexOf(task);
      list.get().splice(index, 1);
      return list.get();
    },
  }),
};
