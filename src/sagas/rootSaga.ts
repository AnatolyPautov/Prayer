import {takeLatest} from 'redux-saga/effects';
import {createBoard, getBoards} from '../store/boardsSlice';
import {handleCreateBoard, handleGetBoards} from './handlers/boards';
import {
  createPrayer,
  getPrayers,
  removePrayerRequest,
  updatePrayerRequest,
} from '../store/prayersSlice';
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
import {
  createComment,
  getComments,
  removeCommentRequest,
} from '../store/commentsSlice';
import {signInRequest, signUpRequest} from '../store/userSlice';
import {signInRequestHandler, signUpRequestHandler} from './handlers/user';

export function* watcherSaga() {
  yield takeLatest(getBoards.type, handleGetBoards);
  yield takeLatest(getPrayers.type, handleGetPrayers);
  yield takeLatest(getComments.type, handleGetComments);

  yield takeLatest(createBoard.type, handleCreateBoard);
  yield takeLatest(createPrayer.type, handleCreatePrayer);
  yield takeLatest(createComment.type, handleCreateComment);

  yield takeLatest(removePrayerRequest.type, handleDeletePrayer);
  yield takeLatest(removeCommentRequest.type, handleDeleteComment);

  yield takeLatest(updatePrayerRequest.type, handleUpdatePrayer);

  yield takeLatest(signUpRequest.type, signUpRequestHandler);
  yield takeLatest(signInRequest.type, signInRequestHandler);
}
