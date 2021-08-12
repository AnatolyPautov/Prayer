import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import boardsSlice from './boardsSlice';
import commentsSlice from './commentsSlice';
import prayersSlice from './prayersSlice';
import userSlice from './userSlice';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    boards: boardsSlice,
    prayers: prayersSlice,
    comments: commentsSlice,
    user: userSlice,
  },
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const getBoards = (state: RootState) => state.boards.boards;

export const getPrayers = (state: RootState) => state.prayers.prayers;
export const getPrayersById = (columnId: string) => (state: RootState) => {
  return state.prayers.prayers.filter(prayer => prayer.columnId === columnId);
};
export const getPrayersChecked = (columnId: string) => (state: RootState) => {
  return state.prayers.prayers.filter(
    prayer => prayer.columnId === columnId && prayer.checked === true,
  );
};
export const getPrayersUnchecked = (columnId: string) => (state: RootState) => {
  return state.prayers.prayers.filter(
    prayer => prayer.columnId === columnId && prayer.checked === false,
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
