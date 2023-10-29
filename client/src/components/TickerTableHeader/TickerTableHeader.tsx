import React from 'react';
import './TickerTableHeader.css';

export const TickerTableHeader: React.FC = () => {
  return (
    <li className="ticker-header">
      <h3 className="ticker-title">Ticker</h3>
      <h3 className="ticker-title">Price</h3>
      <h3 className="ticker-title">Change</h3>
      <h3 className="ticker-title">Change_Percent</h3>
    </li>
  );
};