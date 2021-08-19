import {takeLatest} from 'redux-saga/effects';
import {
  createBoard,
  getBoardsRequest,
  removeBoardRequest,
} from '../store/boardsSlice';
import {
  handleCreateBoard,
  handleDeleteBoard,
  handleGetBoards,
} from './handlers/boards';
import {
  createPrayer,
  getPrayersRequest,
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
  getCommentsRequest,
  removeCommentRequest,
} from '../store/commentsSlice';
import {signInRequest, signUpRequest} from '../store/userSlice';
import {signInRequestHandler, signUpRequestHandler} from './handlers/user';

export function* watcherSaga() {
  yield takeLatest(getBoardsRequest.type, handleGetBoards);
  yield takeLatest(getPrayersRequest.type, handleGetPrayers);
  yield takeLatest(getCommentsRequest.type, handleGetComments);

  yield takeLatest(createBoard.type, handleCreateBoard);
  yield takeLatest(createPrayer.type, handleCreatePrayer);
  yield takeLatest(createComment.type, handleCreateComment);

  yield takeLatest(removeBoardRequest.type, handleDeleteBoard);
  yield takeLatest(removePrayerRequest.type, handleDeletePrayer);
  yield takeLatest(removeCommentRequest.type, handleDeleteComment);

  yield takeLatest(updatePrayerRequest.type, handleUpdatePrayer);

  yield takeLatest(signUpRequest.type, signUpRequestHandler);
  yield takeLatest(signInRequest.type, signInRequestHandler);
}
