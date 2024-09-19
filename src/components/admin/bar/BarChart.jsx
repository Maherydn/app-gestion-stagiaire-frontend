import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Nombre de Stagiaires',
      data: [12, 19, 3, 5, 2, 10, 12, 19, 3, 5, 2, 10],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Nombre: ${tooltipItem.raw}`,
      },
    },
  },
};

const BarChart = () => {
  return (
    <div>
      <h2 className='text-lg text-blue-500 font-bold underline'>Nombre de Stagiaires par Mois :</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
