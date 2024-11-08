import { MdDeleteOutline } from "react-icons/md";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoItemProps {
  todoItem: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number, completed: boolean) => void;
}

function TodoItem({ todoItem: todoItem, deleteTodo, toggleTodo }: TodoItemProps) {
  return (
    <tr className={`bg-${todoItem.completed ? "green-100" : "white"}`}>
      <td className="py-2 px-4 border-b">
        <span
          onClick={() => toggleTodo(todoItem.id, todoItem.completed)}
          className={`cursor-pointer ${todoItem.completed ? "line-through text-gray-500" : ""}`}
        >
          {todoItem.todo}
        </span>
      </td>
      <td className="py-2 px-4 border-b text-center">
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={(e) => toggleTodo(todoItem.id, e.target.checked)}
        />
      </td>
      <td className="py-2 px-4 border-b text-center">
        <button
          onClick={() => deleteTodo(todoItem.id)}
          className="text-black-500 hover:text-red-700"
        >
          <MdDeleteOutline size={20}/>
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
