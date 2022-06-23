import { createSlice } from "@reduxjs/toolkit";

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const initialState = {
  todos: getLocalItmes(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      if (!payload.text || /^\s*$/.test(payload.text)) {
        return;
      }
      const newTodos = [payload, ...state.todos];
      state.todos = newTodos;
    },
    updateTodo: (state, { payload }) => {
      if (!payload.value.text || /^\s*$/.test(payload.value.text)) {
        return;
      }

      state.todos = state.todos.map((item) =>
        item.id === payload.id ? payload.value : item
      );
    },
    removeTodo: (state, { payload }) => {
      const removedArr = [...state.todos].filter((todo) => todo.id !== payload);

      state.todos = removedArr;
    },
    completeTodo: (state, { payload }) => {
      let updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      state.todos = updatedTodos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, removeTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
