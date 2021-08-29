import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';
import {createRoutine} from 'redux-saga-routines';

export const signInRoutine = createRoutine('SIGN_IN_ROUTINE');
export const signUpRoutine = createRoutine('SIGN_UP_ROUTINE');

interface UserSliceState {
  user: Types.User;
  isAuth: boolean;
  isFetching: boolean;
  errors: string;
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
  errors: '',
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    cleanErrors(state) {
      state.errors = '';
    },
    requestFailed(state, {payload}: PayloadAction<string>) {
      state.errors = payload;
      state.isFetching = false;
    },
  },
  extraReducers: {
    [signInRoutine.TRIGGER]: (state, action) => {
      return {...state, isFetching: true};
    },
    [signInRoutine.SUCCESS]: (state, {payload}) => {
      return (
        payload.token && {user: {...payload}, isAuth: true, isFetching: false}
      );
    },
    [signUpRoutine.TRIGGER]: (state, action) => {
      return {...state, isFetching: true};
    },
    [signUpRoutine.SUCCESS]: (state, {payload}) => {
      return (
        payload.token && {user: {...payload}, isAuth: true, isFetching: false}
      );
    },
  },
});

export const {requestFailed, cleanErrors} = userSlice.actions;

export default userSlice.reducer;
