import React from 'react';
import { TickerTableHeader } from '../TickerTableHeader';
import { TickerItem } from '../TickerItem';
import { Ticker } from '../../types/Ticker';

import './TickerList.css';

interface TickerListProps {
  tickerData: Ticker[];
}

export function TickerList({ tickerData }: TickerListProps) {
  return (
    <>
      <ul className="ticker-list">
        <TickerTableHeader />
        {tickerData.map((ticker, index) => (
          <TickerItem key={ticker.ticker} ticker={ticker} index={index} />
        ))}
      </ul>
    </>
  );
}
