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
    setPrayers(state, {payload}) {
      const prayersData: Types.Prayer[] = Object.values(payload);
      state.prayers = prayersData;
      console.log(state.prayers);
    },
    addPrayer(state, {payload}: PayloadAction<Types.Prayer>) {
      state.prayers.push(payload);
    },
    removePrayer(state, {payload}: PayloadAction<number>) {
      state.prayers = [
        ...state.prayers.filter(prayer => prayer.id !== payload),
      ];
    },
    updatePrayer(state, {payload}: PayloadAction<Types.Prayer>) {
      state.prayers.map(prayer => {
        if (prayer.id === payload.id) {
          prayer.checked = payload.checked;
        }
      });
    },
  },
});

export const {addPrayer, removePrayer, updatePrayer, setPrayers} =
  boardsSlice.actions;

export default boardsSlice.reducer;
