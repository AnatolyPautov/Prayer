import {takeLatest} from 'redux-saga/effects';
import {getBoards} from '../store/boardsSlice';
import {handleGetBoards} from './handlers/boards';
import {getPrayers} from '../store/prayersSlice';
import {handleGetPrayers} from './handlers/prayers';
import {handleGetComments} from './handlers/comments';
import {getComments} from '../store/commentsSlice';

export function* watcherSaga() {
  yield takeLatest(getBoards.type, handleGetBoards);
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(getComments.type, handleGetComments);
}
