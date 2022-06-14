import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './linechart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};

const dataSetOne = [100,200,200,100,200]
const dataSetTwo =  [100,200,500,100,200]

const labels = [ 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map((e,i) => dataSetOne[i]),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
    },
    {
      label: 'Dataset 2',
      data: labels.map((e,i) => dataSetTwo[i]),
      borderColor: '#fb7938c8',
      backgroundColor: '#fb7938c8',
    },
  ],
};

 function LineChart() {
  return <div className='line-chart'><Line options={options} data={data} /></div>;
}

export default LineChart;
