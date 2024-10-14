import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const statistics = () => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        label: 'Percentage',
        data: [40, 30, 30], // Percentage values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Max value for percentages
        ticks: {
          callback: function (value) {
            return value + '%'; // Add percentage symbol to y-axis labels
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Percentage Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};


export default statistics;