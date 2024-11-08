import { useState, useEffect } from "react";
import TodoList from "./todolist";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    try {
      fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTodos(data.todos);
      });
    } catch (error) {
      console.error("Error fetching todos:", error);
    } 
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      id: todos.length + 1,
      todo: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    setShowInput(false);
  };

  const deleteTodo = async (id: number) => {
    try {
      fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  
  const toggleTodo = async (id: number, completed: boolean) => {
    try {
      fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: completed,
        })
      })
      .then(res => res.json())
      .then(console.log);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <button className="flex bg-bgButton p-2 m-5 text-white absolute bottom-0 right-0"
      onClick={() => setShowInput(!showInput)}
      >Add More Todo</button>

      {showInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg z-20">
            <h2 className="text-xl font-semibold mb-4">Add Todo</h2>
            <small className="font-semibold">Todo:</small>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter new todo"
              className="p-2 border rounded-lg border-gray-300 focus:outline-none mb-4 w-full"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md w-full"
            >
              Add Todo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todos;
