import { createSignal, For } from 'solid-js';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/solid';
import { list } from '@/store/todoStore';

export default function SolidList() {
  const $list = useStore(list);
  const [task, setTask] = createSignal('');
  const [solidList, setSolidList] = createSignal([]);
  console.log(solidList());
  console.log($list.value);

  const handleAddTask = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedTasks = await actions.addTask(formData);
    setSolidList(updatedTasks);
    console.log(solidList());
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
                class="ml-2 rounded-lg bg-highlight p-3"
              >
                delete
              </button>
            </div>
          )}
        </For>
      </form>
    </div>
  );
}
