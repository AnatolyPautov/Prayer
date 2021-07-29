import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import prayerSlice from './prayerSlice';

const store = configureStore({
  reducer: prayerSlice,
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const getBoards = (state: RootState) => state.boards;
export const getPrayers = (state: RootState) => state.prayers;
export const getComments = (state: RootState) => state.comments;

export default store;
