import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo, changeStatus } from "../redux/todoSlice";
import { useState } from "react";

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      {todos.length === 0 && <p className="text-gray-500">No tasks added.</p>}
      {todos.map(todo => (
        <div key={todo.id} className="flex justify-between items-center border-b py-2">
          {editId === todo.id ? (
            <input
              className="border px-2 py-1 w-full"
              value={newText}
              onChange={e => setNewText(e.target.value)}
            />
          ) : (
            <span className="text-lg">{todo.text}</span>
          )}

          <div className="flex space-x-2">
            {editId === todo.id ? (
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => {
                  dispatch(updateTodo({ id: todo.id, text: newText }));
                  setEditId(null);
                }}
              >
                Save
              </button>
            ) : (
              <>
                <select
                  className="border p-1"
                  value={todo.status}
                  onChange={e => dispatch(changeStatus({ id: todo.id, status: e.target.value }))}
                >
                  <option value="Pending" >Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setEditId(todo.id);
                    setNewText(todo.text);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
