import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface PrayerSliceState {
  boards: Types.Board[];
  prayers: Types.Prayer[];
  comments: Types.Comment[];
}

const initialState: PrayerSliceState = {
  boards: [],
  prayers: [],
  comments: [],
};

export const pryerSlice = createSlice({
  name: 'Prayer',
  initialState,
  reducers: {
    addBoard(state, {payload}: PayloadAction<Types.NewBoard>) {
      const newBoard = {
        id: Date.now().toString(),
        text: payload.text,
        description: '',
      };
      state.boards.push(newBoard);
    },
    addPrayer(state, {payload}: PayloadAction<Types.NewPrayer>) {
      const newPrayer = {
        id: Date.now().toString(),
        text: payload.text,
        boardId: payload.boardId,
      };
      state.prayers.push(newPrayer);
    },
    removePrayer(state, {payload}: PayloadAction<string>) {
      state.prayers = [
        ...state.prayers.filter(prayer => prayer.id !== payload),
      ];
    },
    addComment(state, {payload}: PayloadAction<Types.NewComment>) {
      const newComment = {
        id: Date.now().toString(),
        text: payload.text,
        prayerId: payload.prayerId,
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

export const {addBoard, addPrayer, removePrayer, addComment, removeComment} =
  pryerSlice.actions;

export default pryerSlice.reducer;
