import {takeLatest} from 'redux-saga/effects';
import {
  handleCreateBoard,
  handleDeleteBoard,
  handleGetBoards,
} from './handlers/boards';
import {
  handleCreatePrayer,
  handleDeletePrayer,
  handleGetPrayers,
  handleUpdatePrayer,
} from './handlers/prayers';
import {
  handleCreateComment,
  handleDeleteComment,
  handleGetComments,
} from './handlers/comments';
import {signInRequest, signUpRequest} from '../store/userSlice';
import {signInRequestHandler, signUpRequestHandler} from './handlers/user';

export function* watcherSaga() {
  yield takeLatest('GET-BOARDS', handleGetBoards);
  yield takeLatest('GET-PRAYERS', handleGetPrayers);
  yield takeLatest('GET-COMMENTS', handleGetComments);

  yield takeLatest('ADD-BOARD', handleCreateBoard);
  yield takeLatest('ADD-PRAYER', handleCreatePrayer);
  yield takeLatest('ADD-COMMENT', handleCreateComment);

  yield takeLatest('REMOVE-BOARD', handleDeleteBoard);
  yield takeLatest('REMOVE-PRAYER', handleDeletePrayer);
  yield takeLatest('REMOVE-COMMENT', handleDeleteComment);

  yield takeLatest('UPDATE-PRAYER', handleUpdatePrayer);

  yield takeLatest(signUpRequest.type, signUpRequestHandler);
  yield takeLatest(signInRequest.type, signInRequestHandler);
}
