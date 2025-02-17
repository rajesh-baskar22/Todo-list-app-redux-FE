import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-violet-300 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
