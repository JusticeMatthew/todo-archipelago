import { useStore } from '@nanostores/solid';
import { list, addTask } from '@/store/todoStore.js';

export default function SolidList() {
  const $list = useStore(list);

  const handleAddTask = (e) => {
    const task = e.target[0].value;
    addTask(task);
    console.log(list.value);
  };

  return (
    <div class="list-base">
      <p class="text-subtitle">
        Your <span class="framework decoration-solid">Solid</span> todo list
      </p>
      <form onSubmit={handleAddTask} class="add-form">
        <input
          id="task"
          required
          autocomplete="off"
          name="task"
          placeholder="add new task..."
          class="add-input focus:outline-solid"
        />
        <button class="add-button hover:bg-solid">Add</button>
      </form>
    </div>
  );
}
