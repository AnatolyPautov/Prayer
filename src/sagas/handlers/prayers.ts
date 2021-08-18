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

export function* handleGetPrayers({payload}: any): SagaIterator {
  try {
    const response = yield call(requestGetPrayers);
    const {data} = response;
    yield put(setPrayers({...data}));
  } catch (e) {
    console.log(e);
  }
}
export function* handleCreatePrayer({payload}: any): SagaIterator {
  try {
    const response = yield call(requestCreatePrayer, payload);
    const data = response.data;
    yield put(addPrayer(data));
  } catch (e) {
    console.log(e);
  }
}
export function* handleDeletePrayer({payload}: any): SagaIterator {
  try {
    yield call(requestDeletePrayer, payload);
    yield put(removePrayer(payload));
  } catch (e) {
    console.log(e);
  }
}
export function* handleUpdatePrayer({payload}: any): SagaIterator {
  try {
    const response = yield call(requestUpdatePrayer, payload);
    const data = response.data;
    console.log(data);
    yield put(updatePrayer(data));
  } catch (e) {
    console.log(e);
  }
}
