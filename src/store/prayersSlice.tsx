import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types/types';

interface PrayersSliceState {
  prayers: Types.Prayer[];
}

const initialState: PrayersSliceState = {
  prayers: [],
};

export const boardsSlice = createSlice({
  name: 'Prayers',
  initialState,
  reducers: {
    getPrayers(state, {payload}) {},
    setPrayers(state, {payload}) {
      const prayersData: Types.Prayer[] = Object.values(payload);
      state.prayers = prayersData;
      console.log(state.prayers);
    },
    addPrayer(state, {payload}: PayloadAction<Types.NewPrayer>) {
      const newPrayer = {
        id: Date.now().toString(),
        title: payload.title,
        columnId: payload.columnId,
        checked: payload.checked,
        totalCountPrayed: payload.totalCountPrayed,
        myCountPrayed: payload.myCountPrayed,
        othersCountPrayed: payload.othersCountPrayed,
        author: payload.author,
      };
      state.prayers.push(newPrayer);
    },
    checkedPrayer(state, {payload}) {
      state.prayers.map(prayer => {
        if (prayer.id === payload.id) {
          prayer.checked = payload.newValue;
        }
      });
    },
    removePrayer(state, {payload}: PayloadAction<string>) {
      state.prayers = [
        ...state.prayers.filter(prayer => prayer.id !== payload),
      ];
    },
    addPrayedCount(state, {payload}) {
      state.prayers.map(prayer => {
        if (prayer.id === payload.id) {
          ++prayer.totalCountPrayed;
          prayer.author === payload.userName
            ? ++prayer.myCountPrayed
            : ++prayer.othersCountPrayed;
        }
      });
    },
  },
});

export const {
  addPrayer,
  removePrayer,
  checkedPrayer,
  addPrayedCount,
  setPrayers,
  getPrayers,
} = boardsSlice.actions;

export default boardsSlice.reducer;
