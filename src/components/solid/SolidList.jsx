import { createSignal, For, createEffect } from 'solid-js';
import { actions } from 'astro:actions';

export default function SolidList() {
  const [task, setTask] = createSignal('');
  const [solidList, setSolidList] = createSignal([]);

  createEffect(async () => {
    const todos = await actions.getTodos();
    setSolidList(todos);
  });

  const handleAddTask = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedTasks = await actions.addTask(formData);
    setSolidList(updatedTasks);
  };

  return (
    <div class="list-base">
      <p class="text-subtitle">
        Your <span class="framework decoration-solid">Solid</span> todo list
      </p>
      <form onSubmit={handleAddTask} class="add-form" method="POST">
        <input
          id="task"
          required
          autocomplete="off"
          value={task()}
          name="task"
          placeholder="add new task..."
          class="add-input focus:outline-solid"
          onChange={(e) => setTask(e.currentTarget.value)}
        />
        <button class="add-button hover:bg-solid">Add</button>
      </form>
      <form class={solidList().length > 0 ? 'mt-6' : 'mt-0'}>
        <For each={solidList()}>
          {(todo, idx) => (
            <div class="flex flex-row items-center">
              <p class="my-1 w-full rounded-lg bg-highlight px-3 py-2">
                {todo}
              </p>
              <input id={todo} value={idx} name="checked" class="sr-only" />
              <button
                data-delete-button
                aria-label="delete button"
                class="delete-button"
              >
                X
              </button>
            </div>
          )}
        </For>
      </form>
    </div>
  );
}
