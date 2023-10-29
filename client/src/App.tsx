import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { selectLoading, selectTickerData } from './redux/tickerSlice';
import { fetchTickerData } from './redux/tickerThunks';
import { TickerList } from './components/TickerList/TickerList';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const tickerData = useAppSelector(selectTickerData);
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTickerData());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="header">Ticker Data</h1>
      {isLoading ? (
        <p className="loading">Loading data...</p>
      ) : (
        <TickerList tickerData={tickerData} />
      )}
    </div>
  );
}

export default App;
