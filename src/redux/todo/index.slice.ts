import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    createTodo: state => {},
    updateTodo: state => {},
    deleteTodo: state => {},
  },
});

export const {createTodo, updateTodo, deleteTodo} = todoSlice.actions;
