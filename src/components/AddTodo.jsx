import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Todo</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          className="border p-2 flex-grow"
          placeholder="Enter task..."
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
