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
    addComment(state, {payload}: PayloadAction<Types.NewComment>) {
      const newComment = {
        id: Date.now().toString(),
        text: payload.text,
        prayerId: payload.prayerId,
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

export const {addComment, removeComment} = boardsSlice.actions;

export default boardsSlice.reducer;
