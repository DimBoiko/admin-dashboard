import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './doughnut.css';



const DoughnutChart = () => {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const data = {
		labels: [ 'Purple','Orange','blue'],
		datasets: [
		  {
			 label: '# of Votes',
			 data: [68, 22, 10,],
			 backgroundColor: [
				 'rgb(180, 90, 180,0.9)',
				 'rgb(203, 53, 19,0.9)',
				 'rgb(55, 102, 242,0.9)'
			 ],
			 borderColor: [
				 
			 ],
			 borderWidth: 1,
		  },
		],
	 };

	return (
		<div className='doughnut'>
			<Doughnut data={data}/>
		</div>
	);
}

export default DoughnutChart;
