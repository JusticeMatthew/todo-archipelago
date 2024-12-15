import { defineAction } from 'astro:actions';
import { z } from 'astro:schema'
import { list } from '@/store/todoStore';

export const server = {
  getTodos: defineAction({
    handler: async () => {
      return list.get();
    },
  }),

  addTask: defineAction({
    accept: 'form',
    input: z.object({
      task: z.string(),
    }),
    handler: async ({ task }) => {
      list.set([...list.get(), task]);
      return list.get();
    },
  }),

  deleteTask: defineAction({
    input: z.object({
      todo: z.string(),
    }),
    handler: async ({ todo }) => {
      const index = list.get().indexOf(todo);
      list.get().splice(index, 1);
      return list.get();
    },
  }),
};
