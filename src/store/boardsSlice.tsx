import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface BoardsSliceState {
  boards: Types.Board[];
}

const initialState: BoardsSliceState = {
  boards: [],
};

export const boardsSlice = createSlice({
  name: 'Boards',
  initialState,
  reducers: {
    addBoard(state, {payload}: PayloadAction<Types.NewBoard>) {
      const newBoard = {
        id: Date.now().toString(),
        text: payload.text,
      };
      state.boards.push(newBoard);
    },
  },
});

export const {addBoard} = boardsSlice.actions;

export default boardsSlice.reducer;
