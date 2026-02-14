import { useEffect, useState } from "react";
import api from "../api/axios";
import TodoList from "./TodoList";

export default function BoardList() {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    api.get("/boards").then(res => setBoards(res.data));
  }, []);

  const createBoard = async () => {
    if (!title.trim()) return;
    const res = await api.post("/boards", { title });
    setBoards([...boards, res.data]);
    setTitle("");
  };

  const deleteBoard = async (id) => {
    await api.delete(`/boards/${id}`);
    setBoards(boards.filter(b => b._id !== id));
    if (selectedBoard === id) setSelectedBoard(null);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      
      {/* LEFT: BOARDS */}
      <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Boards</h2>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded px-3 py-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="New board name"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={createBoard}
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {boards.map(board => (
            <div
              key={board._id}
              className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                selectedBoard === board._id
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedBoard(board._id)}
            >
              <span className="font-medium">{board.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBoard(board._id);
                }}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: TODOS */}
      <div className="col-span-12 md:col-span-8 bg-white p-4 rounded-lg shadow">
        {selectedBoard ? (
          <TodoList boardId={selectedBoard} />
        ) : (
          <p className="text-gray-500 text-center mt-10">
            Select a board to view todos
          </p>
        )}
      </div>
    </div>
  );
}
