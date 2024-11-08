import TodoItem from "./todoitem";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number, completed: boolean) => void;
}

function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
  return (
    <div className="w-full max-w-2xl mt-20 flex justify-center overflow-y-scroll">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-white sticky top-0">
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Completed</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center text-gray-500 py-4">
                No tasks yet!
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todoItem={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
