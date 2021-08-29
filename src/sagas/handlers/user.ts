import {signIn, signUp} from './../requests/user';
import {call, put} from 'redux-saga/effects';
import * as Types from '../../types/types';
import {SagaIterator} from 'redux-saga';
import {
  requestFailed,
  signInRoutine,
  signUpRoutine,
} from '../../store/userSlice';
import {PayloadAction} from '@reduxjs/toolkit';

export function* signUpRequestHandler({
  payload,
}: PayloadAction<Types.Registration>): SagaIterator {
  try {
    const {data, ...responseInfo} = yield call(signUp, {...payload});
    if (responseInfo.status !== 200 && data.message) {
      console.log({data, ...responseInfo});
      yield put(requestFailed(data.message));
      return;
    }
    console.log('sdfsd');
    yield put(signUpRoutine.success({...data}));
  } catch (e) {
    console.log(e);
  }
}
export function* signInRequestHandler({
  payload,
}: PayloadAction<Types.Login>): SagaIterator {
  try {
    const {data, ...responseInfo} = yield call(signIn, {...payload});
    if (responseInfo.status !== 200 && data.message) {
      console.log({data, ...responseInfo});
      yield put(requestFailed(data.message));
      return;
    }
    yield put(signInRoutine.success({...data}));
  } catch (e) {
    console.log(e);
  }
}
