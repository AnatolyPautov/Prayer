import {call, put} from 'redux-saga/effects';
import {setComments} from '../../store/commentsSlice';
import {requestGetComments} from '../requests/comments';

export function* handleGetComments({payload}: any): any {
  try {
    const response = yield call(requestGetComments);
    const {data} = response;
    yield put(setComments({...data}));
  } catch (e) {
    console.log(e);
  }
}
