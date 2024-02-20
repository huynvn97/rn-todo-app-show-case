import {configureStore} from '@reduxjs/toolkit';
import {todoSlice} from './todo/index.slice';
import {authSlice} from './auth/index.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
