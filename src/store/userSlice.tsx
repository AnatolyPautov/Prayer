import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface UserSliceState {
  user: Types.User;
  isAuth: boolean;
}

const initialState: UserSliceState = {
  user: {
    name: '',
    email: '',
    password: '',
    token: '',
  },

  isAuth: false,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signUpRequest(state, {payload}) {},
    signUpSuccsecResponse(state, {payload}: any) {
      return payload.token && {user: {...payload}, isAuth: true};
    },
    signInRequest(state, {payload}) {},
    signInSuccsecRequest(state, {payload}: any) {
      return payload.token && {user: {...payload}, isAuth: true};
    },
  },
});

export const {
  signUpRequest,
  signUpSuccsecResponse,
  signInRequest,
  signInSuccsecRequest,
} = userSlice.actions;

export default userSlice.reducer;
