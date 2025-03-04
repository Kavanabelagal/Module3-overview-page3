import React from 'react';
import { Bar } from 'react-chartjs-2';

function ProductTrafficChart() {
  // Generate 30 days of data
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  
  const data = {
    labels: days,
    datasets: [
      {
        // All traffic - black bars
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 60),
        backgroundColor: '#000',
        barThickness: 2,
        categoryPercentage: 0.3,
        barPercentage: 0.5,
      },
      {
        // SnowUI traffic - blue bars (hidden in the chart for simplicity)
        data: Array.from({ length: 30 }, () => 0),
        backgroundColor: '#1976d2',
        barThickness: 2,
        categoryPercentage: 0.3,
        barPercentage: 0.5,
      },
      {
        // Dashboard traffic - red bars
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 30),
        backgroundColor: '#f44336',
        barThickness: 2,
        categoryPercentage: 0.3,
        barPercentage: 0.5,
      }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        display: false
      }
    }
  };
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="product-chart">
      <Bar data={data} options={options} height={200} />
      <div className="month-labels">
        {months.map(month => (
          <div key={month} className="month-label">{month}</div>
        ))}
      </div>
    </div>
  );
}

export default ProductTrafficChart;