import { io } from 'socket.io-client';
import { updateTickerData, setLoading } from './tickerSlice';
import { Ticker } from '../types/Ticker';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from './store';
import { Action } from 'redux';

export type AppThunk = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;

export const fetchTickerData = (): AppThunk => (dispatch) => {
  dispatch(setLoading(true));

  const socket = io('http://localhost:4000');

  socket.on('ticker', (data: Ticker[]) => {
    dispatch(updateTickerData(data));
    dispatch(setLoading(false));
  });

  socket.emit('start');
};
