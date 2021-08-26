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
import {
  GET_BOARDS,
  GET_COMMENTS,
  GET_PRAYERS,
  ADD_BOARD,
  ADD_PRAYER,
  ADD_COMMENT,
  REMOVE_BOARD,
  REMOVE_PRAYER,
  REMOVE_COMMENT,
  UPDATE_PRAYER,
} from '../store/sagasActions';

export function* watcherSaga() {
  yield takeLatest(GET_BOARDS, handleGetBoards);
  yield takeLatest(GET_PRAYERS, handleGetPrayers);
  yield takeLatest(GET_COMMENTS, handleGetComments);

  yield takeLatest(ADD_BOARD, handleCreateBoard);
  yield takeLatest(ADD_PRAYER, handleCreatePrayer);
  yield takeLatest(ADD_COMMENT, handleCreateComment);

  yield takeLatest(REMOVE_BOARD, handleDeleteBoard);
  yield takeLatest(REMOVE_PRAYER, handleDeletePrayer);
  yield takeLatest(REMOVE_COMMENT, handleDeleteComment);

  yield takeLatest(UPDATE_PRAYER, handleUpdatePrayer);

  yield takeLatest(signUpRequest.type, signUpRequestHandler);
  yield takeLatest(signInRequest.type, signInRequestHandler);
}
