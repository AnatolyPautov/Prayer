import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface UserSliceState {
  user: Types.User;
  isAuth: boolean;
  isFetching: boolean;
  errors: string[];
}

const initialState: UserSliceState = {
  user: {
    name: '',
    email: '',
    password: '',
    token: '',
  },
  isAuth: false,
  isFetching: false,
  errors: [],
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signUpRequest(state, {payload}) {
      state.isFetching = true;
    },
    signUpSuccsecResponse(state, {payload}: any) {
      return (
        payload.token && {user: {...payload}, isAuth: true, isFetching: false}
      );
    },
    signInRequest(state, {payload}) {
      state.isFetching = true;
    },
    signInSuccsecRequest(state, {payload}: any) {
      return (
        payload.token && {user: {...payload}, isAuth: true, isFetching: false}
      );
    },
    requestFailed(state, {payload}: PayloadAction<string>) {
      state.errors.push(payload);
      state.isFetching = false;
    },
    cleanErrors(state) {
      state.errors = [];
    },
  },
});

export const {
  signUpRequest,
  signUpSuccsecResponse,
  signInRequest,
  signInSuccsecRequest,
  requestFailed,
  cleanErrors,
} = userSlice.actions;

export default userSlice.reducer;
