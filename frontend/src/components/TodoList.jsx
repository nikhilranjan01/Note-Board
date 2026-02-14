import { useEffect, useState } from "react";
import api from "../api/axios";

export default function TodoList({ boardId }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!boardId) return;

    api.get(`/todos/${boardId}`).then(res => setTodos(res.data));
  }, [boardId]);

  const addTodo = async () => {
    if (!title.trim()) return;

    const res = await api.post("/todos", { title, boardId });
    setTodos([...todos, res.data]);
    setTitle("");
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Todos</h3>

      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="New todo"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={addTodo}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {todos.length === 0 && (
        <p className="text-gray-500">No todos yet</p>
      )}

      {todos.map(todo => (
        <div
          key={todo._id}
          className="border rounded p-3 mb-2 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{todo.title}</p>
            <p className="text-xs text-gray-500">
              Created: {formatDate(todo.createdAt)}
            </p>
          </div>

          <button
            onClick={() => deleteTodo(todo._id)}
            className="text-red-500 hover:text-red-700"
          >

          </button>
        </div>
      ))}
    </div>
  );
}
