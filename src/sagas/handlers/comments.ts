import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {
  addComment,
  removeComment,
  setComments,
} from '../../store/commentsSlice';
import {
  requestCreateComment,
  requestDeleteComment,
  requestGetComments,
} from '../requests/comments';

export function* handleGetComments({payload}: any): SagaIterator {
  try {
    const response = yield call(requestGetComments);
    const {data} = response;
    yield put(setComments({...data}));
  } catch (e) {
    console.log(e);
  }
}

export function* handleCreateComment({payload}: any): SagaIterator {
  try {
    const response = yield call(requestCreateComment, payload);
    const data = response.data;
    yield put(addComment(data));
  } catch (e) {
    console.log(e);
  }
}

export function* handleDeleteComment({payload}: any): SagaIterator {
  try {
    yield call(requestDeleteComment, payload);
    yield put(removeComment(payload));
  } catch (e) {
    console.log(e);
  }
}
