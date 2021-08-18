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
import * as Types from '../../types/types';
import {PayloadAction} from '@reduxjs/toolkit';

export function* handleGetComments(): SagaIterator {
  try {
    const response = yield call(requestGetComments);
    const {data} = response;
    yield put(setComments({...data}));
  } catch (e) {
    console.log(e);
  }
}

export function* handleCreateComment({
  payload,
}: PayloadAction<Types.NewComment>): SagaIterator {
  try {
    const response = yield call(requestCreateComment, payload);
    const data = response.data;
    yield put(addComment(data));
  } catch (e) {
    console.log(e);
  }
}

export function* handleDeleteComment({
  payload,
}: PayloadAction<number>): SagaIterator {
  try {
    yield call(requestDeleteComment, payload);
    yield put(removeComment(payload));
  } catch (e) {
    console.log(e);
  }
}
