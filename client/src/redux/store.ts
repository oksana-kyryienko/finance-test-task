import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tickerReducer from './tickerSlice';

const store = configureStore({
  reducer: {
    ticker: tickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
