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
    getBoardsRequest(state, {payload}) {},
    setBoards(state, {payload}) {
      const boardsData: Types.Board[] = Object.values(payload);
      state.boards = boardsData;
      console.log(boardsData);
    },
    createBoard(state, {payload}) {},
    addBoard(state, {payload}: PayloadAction<Types.Board>) {
      state.boards.push(payload);
    },
    removeBoardRequest(state, {payload}) {},
    removeBoard(state, {payload}: PayloadAction<number>) {
      state.boards = [...state.boards.filter(board => board.id !== payload)];
    },
  },
});

export const {
  addBoard,
  setBoards,
  getBoardsRequest,
  createBoard,
  removeBoardRequest,
  removeBoard,
} = boardsSlice.actions;

export default boardsSlice.reducer;
