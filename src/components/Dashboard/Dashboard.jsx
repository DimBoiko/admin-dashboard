import React from 'react';
import './dashboard.css'
import { icons } from '../../utils/icons';
import Cards from '../Cards/Cards';
import Accountingchart from '../Charts/Accounting-chart/AccountingChart';
import Multitypechart from '../Charts/Multitype-chart/MultitypeChart';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className="dashboard__header">
				<h2>Dashboard</h2>
				<div className="dashboard__searchbar">
					<input type="text" placeholder='Search'/>
					<div className="dashboard__searchbar-icon">
						<icons.AiOutlineSearch/>	
					</div>
				</div>
				<div className="dashboard__user-hello">
					<div className="dashboard__user-avatar">
						<icons.FaUserAlt/>
					</div>
					<div className="dashboard__user-info user">
						<h4>Hello,<span className='user_name'> User Name</span></h4>
						<p>Check your activities in this dashboard.</p>
					</div>
				</div>
			</div>
			<Cards/>
			<Multitypechart/>
		</div>
	);
}

export default Dashboard;
