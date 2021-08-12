import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userAPI} from '../api/api';
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
    getBoards(state, {payload}) {},
    setBoards(state, {payload}) {
      const boardsData: Types.Board[] = Object.values(payload);
      state.boards = boardsData;
      console.log(boardsData);
    },
    addBoard(state, {payload}: PayloadAction<Types.NewBoard>) {
      const newBoard = {
        id: Date.now().toString(),
        title: payload.title,
        description: 'aboba',
        userId: '10',
      };
      state.boards.push(newBoard);
    },
  },
});

export const {addBoard, setBoards, getBoards} = boardsSlice.actions;

export default boardsSlice.reducer;
