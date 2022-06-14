import React from 'react';
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
 } from 'chart.js';
 import { Chart } from 'react-chartjs-2';
 import './multitype-chart.css'


const Multitypechart = () => {
	const dataSetOne = [160,200,200,100,200,500,455,410]
	const dataSetTwo =  [100,200,500,100,200,360,362]
	const dataSetThree =  [100,200,500,100,200,300,545]
	
	ChartJS.register(
		LinearScale,
		CategoryScale,
		BarElement,
		PointElement,
		LineElement,
		Legend,
		Tooltip
	 );
	 
	 const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	 
	  const data = {
		labels,
		datasets: [
		  {
			 type: 'line' ,
			 label: 'Dataset 1',
			 backgroundColor: 'rgb(255, 99, 132)',
			 borderColor: 'rgb(255, 99, 132)',
			 borderWidth: 2,
			 fill: false,
			 data: labels.map((e,index) => dataSetOne[index] ),
		  },
		  {
			 type: 'bar',
			 label: 'Dataset 2',
			 backgroundColor: 'rgb(75, 192, 192)',
			 data: labels.map((e,index) => dataSetTwo[index]),
		  },
		  {
			 type: 'bar' ,
			 label: 'Dataset 3',
			 backgroundColor: 'rgb(53, 162, 235)',
			 data: labels.map((e,index) => dataSetThree[index]),
		  },
		],
	 };
	return (
		<div className='multitype'>
			<Chart className='multitype-chart' type='bar' data={data} />
		</div>
	);
}

export default Multitypechart;
