import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import {login, loginFailure, loginSuccess} from './index.slice';

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
    } catch (e: any) {
      thunkAPI.dispatch(loginFailure(e?.message || 'Login error'));
    }
  },
);
