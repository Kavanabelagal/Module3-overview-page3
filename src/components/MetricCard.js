import React from 'react';

function MetricCard({ title, value, change, positive, color }) {
  return (
    <div className={`metric-card ${color}`}>
      <div className="metric-header">
        <h3>{title}</h3>
        <span className="chart-icon">{color === 'blue' ? '📈' : '📊'}</span>
      </div>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${positive ? 'positive' : 'negative'}`}>
        {change}
      </div>
    </div>
  );
}

export default MetricCard;