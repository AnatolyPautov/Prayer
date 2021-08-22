import {requestUpdatePrayer} from './../requests/prayers';
import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {
  addPrayer,
  removePrayer,
  setPrayers,
  updatePrayer,
} from '../../store/prayersSlice';
import {
  requestCreatePrayer,
  requestDeletePrayer,
  requestGetPrayers,
} from '../requests/prayers';
import * as Types from '../../types/types';
import {PayloadAction} from '@reduxjs/toolkit';

export function* handleGetPrayers(): SagaIterator {
  try {
    const response = yield call(requestGetPrayers);
    const {data} = response;
    yield put(setPrayers({...data}));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCreatePrayer({
  payload,
}: PayloadAction<Types.NewPrayer>): SagaIterator {
  try {
    const response = yield call(requestCreatePrayer, payload);
    const data = response.data;
    yield put(addPrayer(data));
  } catch (e) {
    console.log(e);
  }
}
export function* handleDeletePrayer({
  payload,
}: PayloadAction<number>): SagaIterator {
  console.log(payload);
  try {
    yield call(requestDeletePrayer, payload);
    yield put(removePrayer(payload));
  } catch (e) {
    console.log(e);
  }
}
export function* handleUpdatePrayer({
  payload,
}: PayloadAction<Types.UpdatePrayer>): SagaIterator {
  try {
    const response = yield call(requestUpdatePrayer, payload);
    const data = response.data;
    yield put(updatePrayer(data));
  } catch (e) {
    console.log(e);
  }
}
