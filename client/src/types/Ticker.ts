export interface Ticker {
  ticker: string;
  price: number;
  change: number;
  change_percent: number;
  dividend?: string;
  yield?: string;
  last_trade_time?: string; 
}

export interface RootState {
  ticker: TickerState;
}

export interface TickerState {
  tickerData: Ticker[];
  isLoading: boolean;
  prevTickerData: Ticker[];
}
