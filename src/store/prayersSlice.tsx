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
    getPrayersRequest(state, {payload}) {},
    setPrayers(state, {payload}) {
      const prayersData: Types.Prayer[] = Object.values(payload);
      state.prayers = prayersData;
      console.log(state.prayers);
    },
    createPrayer(state, {payload}) {},
    addPrayer(state, {payload}: PayloadAction<Types.Prayer>) {
      state.prayers.push(payload);
    },
    removePrayerRequest(state, {payload}) {},
    removePrayer(state, {payload}: PayloadAction<number>) {
      state.prayers = [
        ...state.prayers.filter(prayer => prayer.id !== payload),
      ];
    },
    updatePrayerRequest(state, {payload}) {},
    updatePrayer(state, {payload}: PayloadAction<Types.Prayer>) {
      state.prayers.map(prayer => {
        if (prayer.id === payload.id) {
          prayer.checked = payload.checked;
        }
      });
    },
    /* addPrayedCount(state, {payload}: PayloadAction<Types.PrayedCount>) {
      state.prayers.map(prayer => {
        if (prayer.id === payload.id) {
          ++prayer.totalCountPrayed;
          console.log(prayer.totalCountPrayed);
          prayer.author === payload.author
            ? ++prayer.myCountPrayed
            : ++prayer.othersCountPrayed;
        }
      });
    }, */
  },
});

export const {
  createPrayer,
  addPrayer,
  removePrayer,
  removePrayerRequest,
  updatePrayerRequest,
  updatePrayer,
  setPrayers,
  getPrayersRequest,
} = boardsSlice.actions;

export default boardsSlice.reducer;
