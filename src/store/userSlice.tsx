import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface UserSliceState {
  userName: string;
  isAuth: boolean;
}

const initialState: UserSliceState = {
  userName: '',
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser(state, {payload}) {
      state.userName = payload;
      state.isAuth = true;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
