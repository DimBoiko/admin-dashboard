import React,{useEffect,useState,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { toggleCard } from '../../../store/cardsSlice';
import Transition from 'react-transition-group/cjs/Transition';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
 } from 'chart.js';
 import { Bar } from 'react-chartjs-2';
 import './accountingChart.css'


const Accountingchart = ({indexCard,showCard}) => {
	const dispatch = useDispatch()

	const dataSetOne = [100,200,200,100,200]
	const dataSetTwo =  [100,200,500,100,200]
	ChartJS.register(
	  CategoryScale,
	  LinearScale,
	  BarElement,
	  Title,
	  Tooltip,
	  Legend
	);
	const options = {
	  responsive: true,
	  plugins: {
		 legend: {
			position: 'top',
		 },
		 title: {
			display: true,
			text: 'Title',
		 },
	  },
	};
	const labels = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5',];
	const data = {
	  labels,
	  datasets: [
		 {
			label: 'Dataset 1',
			data: labels.map((e, index) => dataSetOne[index]),
			backgroundColor: 'rgba(255, 99, 132, 1)',
		 },
		 {
			label: 'Dataset 2',
			data: labels.map((e,index) => dataSetTwo[index]),
			backgroundColor: 'rgba(53, 162, 235, 1)',
		 },
	  ],
	};

	const closeChart = (indexCard,event) =>{
		if(event){
			event.stopPropagation()
			event.target.className === 'chart__modal' && dispatch(toggleCard(indexCard))
			return
		}
		dispatch(toggleCard(indexCard))
	}

	return (
		showCard ? 
		<Transition in={showCard} timeout={200}>
		{state => {return (
			<div onClick={(e)=>closeChart(indexCard,e)} className={`chart__modal`}>
				<div className={`accounting-chart ${state}`}>
					<span 
					onClick={()=>closeChart(indexCard)}
					className='accounting-chart__close'>&times;</span>
					<Bar className='accounting-chart__item' options={options} data={data} />
				</div>
			</div>
		)}}
		</Transition>
		: ''
	);
}

export default Accountingchart;
