import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DeviceTrafficChart() {
  const devices = ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'];
  
  const data = {
    labels: devices,
    datasets: [
      {
        data: [15, 20, 15, 25, 20, 10],
        backgroundColor: (context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return label === 'Android' ? '#1976d2' : '#e0e0e0';
        },
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
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            if (context.label === 'Android') {
              return '24.5K';
            }
            return '';
          }
        }
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
    <div className="device-chart">
      <Bar data={data} options={options} height={200} />
    </div>
  );
}

export default DeviceTrafficChart;