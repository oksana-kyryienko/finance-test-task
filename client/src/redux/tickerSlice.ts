import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticker, RootState, TickerState } from '../types/Ticker';

const initialState: TickerState = {
  tickerData: [],
  isLoading: false,
  prevTickerData: [],
};
const tickerSlice = createSlice({
  name: 'ticker',
  initialState,
  reducers: {
    updateTickerData: (state, action: PayloadAction<Ticker[]>) => {
      state.prevTickerData = state.tickerData;
      state.tickerData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateTickerData, setLoading } = tickerSlice.actions;

export const selectTickerData = (state: RootState) => state.ticker.tickerData;
export const selectLoading = (state: RootState) => state.ticker.isLoading;
export const selectPrevTickerData = (state: RootState) => state.ticker.prevTickerData;

export default tickerSlice.reducer;
