import {call, put} from 'redux-saga/effects';
import {setPrayers} from '../../store/prayersSlice';
import {requestGetPrayers} from '../requests/prayers';

export function* handleGetPrayers({payload}: any): any {
  try {
    const response = yield call(requestGetPrayers);
    const {data} = response;
    yield put(setPrayers({...data}));
  } catch (e) {
    console.log(e);
  }
}
