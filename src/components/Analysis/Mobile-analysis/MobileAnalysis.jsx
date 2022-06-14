import React from 'react'
import Multitypechart from '../../Charts/Multitype-chart/MultitypeChart'
import DoughnutChart from '../../Charts/Doughnut/Doughnut'
import PolarChart from '../../Charts/Polar-chart/PolarChart'
import EventChart from '../../Charts/Event-chart/EventChart'
import LineChart from '../../Charts/Line-chart/LineChart'
import './mobile-analysis.css'

const MobileAnalysis = () => {
	return (
		<div className="mobile-analysis__colum">
			<h2>Analysis</h2>
			<Multitypechart/>
			<div className="mobile-analysis__row">
				<DoughnutChart/>
				<PolarChart/>
			</div>
			<EventChart/>
			<LineChart/>
		</div>
	)
}

export default MobileAnalysis