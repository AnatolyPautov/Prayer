import {call, put} from 'redux-saga/effects';
import {addBoard, removeBoard, setBoards} from '../../store/boardsSlice';
import {
  requestCreateBoard,
  requestDeleteBoard,
  requestGetBoards,
} from '../requests/boards';
import * as Types from '../../types/types';
import {SagaIterator} from 'redux-saga';
import {PayloadAction} from '@reduxjs/toolkit';

export function* handleGetBoards(): SagaIterator {
  try {
    const response = yield call(requestGetBoards);
    const {data} = response;
    yield put(setBoards({...data}));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCreateBoard({
  payload,
}: PayloadAction<Types.NewBoard>): SagaIterator {
  try {
    const response = yield call(requestCreateBoard, payload);
    const data = response.data;
    yield put(addBoard(data));
  } catch (e) {
    console.log(e);
  }
}
export function* handleDeleteBoard({
  payload,
}: PayloadAction<number>): SagaIterator {
  try {
    yield call(requestDeleteBoard, payload);
    yield put(removeBoard(payload));
  } catch (e) {
    console.log(e);
  }
}
