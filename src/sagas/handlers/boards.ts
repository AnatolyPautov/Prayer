import {call, put} from 'redux-saga/effects';
import {setBoards} from '../../store/boardsSlice';
import {requestGetBoards} from '../requests/boards';

export function* handleGetBoards({payload}: any): any {
  try {
    const response = yield call(requestGetBoards);
    const {data} = response;
    yield put(setBoards({...data}));
  } catch (e) {
    console.log(e);
  }
}
