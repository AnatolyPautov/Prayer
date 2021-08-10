import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import boardsSlice from './boardsSlice';
import commentsSlice from './commentsSlice';
import prayersSlice from './prayersSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    boards: boardsSlice,
    prayers: prayersSlice,
    comments: commentsSlice,
    user: userSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const getBoards = (state: RootState) => state.boards.boards;

export const getPrayers = (state: RootState) => state.prayers.prayers;
export const getPrayersById = (boardId: string) => (state: RootState) => {
  return state.prayers.prayers.filter(prayer => prayer.boardId === boardId);
};
export const getPrayersChecked = (boardId: string) => (state: RootState) => {
  return state.prayers.prayers.filter(
    prayer => prayer.boardId === boardId && prayer.checked === true,
  );
};
export const getPrayersUnchecked = (boardId: string) => (state: RootState) => {
  return state.prayers.prayers.filter(
    prayer => prayer.boardId === boardId && prayer.checked === false,
  );
};

export const getComments = (state: RootState) => state.comments.comments;
export const getCommentsById = (prayerId: string) => (state: RootState) => {
  return state.comments.comments.filter(
    comment => comment.prayerId === prayerId,
  );
};

export const getUser = (state: RootState) => state.user;

export default store;
