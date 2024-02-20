import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/user.types';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    login: {
      error: '',
      loading: false,
    },
  } as {
    user: User | null;
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
    },
    loginFailure: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload;
    },

    logout: state => {},
  },
});

export const {login, loginSuccess, loginFailure, logout} = authSlice.actions;
