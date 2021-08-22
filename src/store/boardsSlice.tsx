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
    setBoards(state, {payload}) {
      const boardsData: Types.Board[] = Object.values(payload);
      state.boards = boardsData;
      console.log(boardsData);
    },
    addBoard(state, {payload}: PayloadAction<Types.Board>) {
      state.boards.push(payload);
    },
    removeBoard(state, {payload}: PayloadAction<number>) {
      state.boards = [...state.boards.filter(board => board.id !== payload)];
    },
  },
});

export const {addBoard, setBoards, removeBoard} = boardsSlice.actions;

export default boardsSlice.reducer;
