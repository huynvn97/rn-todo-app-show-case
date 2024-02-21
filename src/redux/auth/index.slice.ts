import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/user.types';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loggedUsers: [],
    login: {
      error: '',
      loading: false,
    },
  } as {
    user: User | null;
    loggedUsers: User[];
    login: {
      error: string;
      loading: boolean;
    };
  },
  reducers: {
    login: state => {
      state.login.loading = true;
      state.login.error = '';
    },
    loginSuccess: (state, action) => {
      state.login.loading = false;
      state.login.error = '';
      state.user = action.payload;
      state.loggedUsers = [
        ...state.loggedUsers.filter(u => u.id !== action.payload.id),
        action.payload,
      ];
    },
    loginFailure: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload;
    },

    logout: state => {
      const currentUser = state.user;
      state.loggedUsers = state.loggedUsers.filter(
        u => u.id !== currentUser?.id,
      );

      state.user = null;
      state.login.error = '';
    },

    switchUser: (state, action) => {
      state.user = action.payload.user;
      state.login.error = '';
    },
  },
});

export const {login, loginSuccess, loginFailure, logout, switchUser} =
  authSlice.actions;
