import {call, put} from 'redux-saga/effects';
import {addBoard, setBoards} from '../../store/boardsSlice';
import {requestCreateBoard, requestGetBoards} from '../requests/boards';
import * as Types from '../../types/types';
import {SagaIterator} from 'redux-saga';

export function* handleGetBoards({payload}: any): SagaIterator {
  try {
    const response = yield call(requestGetBoards);
    const {data} = response;
    yield put(setBoards({...data}));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCreateBoard({payload}: any): SagaIterator {
  try {
    const response = yield call(requestCreateBoard, payload);
    const data = response.data;
    yield put(addBoard(data));
  } catch (e) {
    console.log(e);
  }
}
