import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const data = {
    labels: months,
    datasets: [
      {
        data: [180, 240, 190, 220, 280, 250],
        borderColor: '#9c27b0',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#9c27b0',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
      }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
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
    <div className="line-chart">
      <Line data={data} options={options} height={200} />
    </div>
  );
}

export default LineChart;