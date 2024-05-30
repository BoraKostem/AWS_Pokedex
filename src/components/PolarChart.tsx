// PolarChartComponent.tsx
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface Props {
  speed: number;
  health: number;
  attack: number;
  defense: number;
}

const PolarChartComponent: React.FC<Props> = ({ speed, health, attack, defense }) => {
  const data: ChartData<'polarArea'> = {
    labels: ['Speed', 'Health', 'Attack', 'Defense'],
    datasets: [{
      label: 'Stats',
      data: [speed, health, attack, defense],
      backgroundColor: [
        'rgb(54, 162, 235)', // Blue
        'rgb(255, 99, 132)', // Red
        'rgb(255, 205, 86)', // Yellow
        'rgb(75, 192, 192)'  // Green
      ]
    }]
  };

  const options: ChartOptions<'polarArea'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Polar Chart'
      }
    }
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarChartComponent;