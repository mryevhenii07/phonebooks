import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "../../interface/todos";

interface TodosState {
  list: ITodo[];
}

const initialState: TodosState = {
  list: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: any) => {
      state.list.push({
        id: Date.now(),
        completed: false,
        name: action.payload.name,
        phone: action.payload.phone,
      });
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const toggle = state.list.find((todo) => todo.id === action.payload);
      if (toggle) {
        toggle.completed = !toggle.completed;
      }
    },
    editTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo, toggleCompleted, editTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
