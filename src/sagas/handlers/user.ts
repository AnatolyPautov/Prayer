import {signIn, signUp} from './../requests/user';
import {call, put} from 'redux-saga/effects';
import * as Types from '../../types/types';
import {SagaIterator} from 'redux-saga';
import {
  signInSuccsecRequest,
  signUpSuccsecResponse,
} from '../../store/userSlice';

export function* signUpRequestHandler({payload}: any): SagaIterator {
  try {
    const {data} = yield call(signUp, {...payload});
    yield put(signUpSuccsecResponse({...data}));
  } catch (e) {
    console.log(e);
  }
}
export function* signInRequestHandler({payload}: any): SagaIterator {
  try {
    const {data} = yield call(signIn, {...payload});
    yield put(signInSuccsecRequest({...data}));
  } catch (e) {
    console.log(e);
  }
}
