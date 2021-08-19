import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface CommentsSliceState {
  comments: Types.Comment[];
}

const initialState: CommentsSliceState = {
  comments: [],
};

export const boardsSlice = createSlice({
  name: 'Comments',
  initialState,
  reducers: {
    getCommentsRequest(state, {payload}) {},
    setComments(state, {payload}) {
      const commentsData: Types.Comment[] = Object.values(payload);
      state.comments = commentsData;
      console.log(state.comments);
    },
    createComment(state, {payload}) {},
    addComment(state, {payload}: PayloadAction<Types.Comment>) {
      state.comments.push(payload);
    },
    removeCommentRequest(state, {payload}) {},
    removeComment(state, {payload}: PayloadAction<number>) {
      state.comments = [
        ...state.comments.filter(comment => comment.id !== payload),
      ];
    },
  },
});

export const {
  createComment,
  addComment,
  removeCommentRequest,
  removeComment,
  setComments,
  getCommentsRequest,
} = boardsSlice.actions;

export default boardsSlice.reducer;
