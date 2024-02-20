import {createSlice} from '@reduxjs/toolkit';
import {Todo, TodoPriority, TodoStatus} from '../../types/todo.types';
import CONFIGS from '../../configs';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: '1',
        ownerId: CONFIGS.fakeUsers[0].id,
        title: 'Todo 1',
        description: 'Todo description long text here',
        createdDate: new Date(),
        updatedDate: new Date(),
        status: TodoStatus.CREATED,
        priority: TodoPriority.HIGH,
      },
      {
        id: '2',
        ownerId: CONFIGS.fakeUsers[0].id,
        title: 'Todo 2',
        description: 'Todo description long text here',
        createdDate: new Date(),
        updatedDate: new Date(),
        status: TodoStatus.CREATED,
        priority: TodoPriority.HIGH,
      },
    ] as Todo[],
  },
  reducers: {
    createTodo: (state, action) => {
      state.todos = [
        {
          ...action.payload,
          id: new Date().getTime(),
          createdDate: new Date(),
          updatedDate: new Date(),
          status: TodoStatus.CREATED,
        },
        ...state.todos,
      ];
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(i =>
        i.id === action.payload.id
          ? {
              ...i,
              ...action.payload,
              updatedDate: new Date(),
            }
          : i,
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(i => i.id !== action.payload.id)
    },
  },
});

export const {createTodo, updateTodo, deleteTodo} = todoSlice.actions;
