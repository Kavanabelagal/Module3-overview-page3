import React from 'react';
import { Bar } from 'react-chartjs-2';

function LocationTrafficChart() {
  const locations = ['US', 'Canada', 'Mexico', 'China', 'Japan', 'Australia'];
  
  const data = {
    labels: locations,
    datasets: [
      {
        data: [20, 25, 20, 15, 30, 20],
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        borderSkipped: false,
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
  
  return (
    <div className="location-chart">
      <Bar data={data} options={options} height={200} />
    </div>
  );
}

export default LocationTrafficChart;