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
};
