import React from 'react';
import { colors } from '../../colors/colors';
import './TickerItem.css';
import { Ticker } from '../../types/Ticker';
import { useAppSelector } from '../../redux/hook';
import { selectPrevTickerData } from '../../redux/tickerSlice';

interface TickerItemProps {
  ticker: Ticker;
  index: number;
}

const UP_ARROW = '▲';
const DOWN_ARROW = '▼';

export const TickerItem: React.FC<TickerItemProps> = ({ ticker, index }) => {
  const textColor = colors[index % colors.length];
  const prevPrice =
    useAppSelector(selectPrevTickerData)?.find(
      (prevTicker) => prevTicker.ticker === ticker.ticker
    )?.price ?? 0;

  const priceChangeClass = prevPrice
    ? ticker.price > prevPrice
      ? 'positive'
      : ticker.price < prevPrice
        ? 'negative'
        : ''
    : '';

  const arrow =
    ticker.price > prevPrice
      ? UP_ARROW
      : ticker.price < prevPrice
        ? DOWN_ARROW
        : '';

  return (
    <li className={`ticker ${priceChangeClass}`} key={ticker.ticker}>
      <p className="ticker-ticker" style={{ color: textColor }}>
        {ticker.ticker}
      </p>
      <p className={`price ${priceChangeClass}`}>
        {ticker.price}
        <span className="arrow">{arrow}</span>
      </p>
      <p> {ticker.change}</p>
      <p>{ticker.change_percent}</p>
    </li>
  );
};
