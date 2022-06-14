import React from 'react';
import DoughnutChart from '../Charts/Doughnut/Doughnut';
import Todolist from '../Todo-list/TodoList';
import Userinfo from '../User-info/UserInfo';
import './rightside.css'

const Rightside = () => {
	return (
		<div className='rightside'>
			<Userinfo/>
			<Todolist/>
			<DoughnutChart/>
		</div>
	);
}

export default Rightside;
