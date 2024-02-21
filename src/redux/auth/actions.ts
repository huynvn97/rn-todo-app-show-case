import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  switchUser,
} from './index.slice';
import {User} from '../../types/user.types';

type UserLoginCredentials = {
  username: string;
  password: string;
};

export const loginAction = createAsyncThunk(
  'auth/login',
  (payload: UserLoginCredentials, thunkAPI) => {
    try {
      thunkAPI.dispatch(login());

      const user = AuthService.login(payload.username, payload.password);
      console.log(user);
      thunkAPI.dispatch(loginSuccess(user));
      payload.cb();
    } catch (e: any) {
      thunkAPI.dispatch(loginFailure(e?.message || 'Login error'));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'auth/logout',
  (payload: {user: User}, thunkAPI) => {
    thunkAPI.dispatch(logout());
  },
);

export const switchAction = createAsyncThunk(
  'auth/switch',
  (payload: {user: User; cb: () => void}, thunkAPI) => {
    thunkAPI.dispatch(switchUser(payload));
    payload.cb();
  },
);
