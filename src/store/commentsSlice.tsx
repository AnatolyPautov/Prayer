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
    getComments(state, {payload}) {},
    setComments(state, {payload}) {
      const commentsData: Types.Comment[] = Object.values(payload);
      state.comments = commentsData;
      console.log(state.comments);
    },
    addComment(state, {payload}: PayloadAction<Types.NewComment>) {
      const newComment = {
        id: Date.now().toString(),
        body: payload.body,
        prayerId: payload.prayerId,
        created: 'sdsads',
        author: payload.author,
      };
      state.comments.push(newComment);
    },
    removeComment(state, {payload}: PayloadAction<string>) {
      state.comments = [
        ...state.comments.filter(comment => comment.id !== payload),
      ];
    },
  },
});

export const {addComment, removeComment, setComments, getComments} =
  boardsSlice.actions;

export default boardsSlice.reducer;
