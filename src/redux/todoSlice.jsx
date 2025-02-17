import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        status: "Pending",
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) todo.text = text;
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) todo.status = status;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
