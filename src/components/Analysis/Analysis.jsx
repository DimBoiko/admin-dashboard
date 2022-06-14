import React,{useState} from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from '../Charts/Map-chart/MapChart';
import './analysis.css';
import MultitypeChart from '../Charts/Multitype-chart/MultitypeChart'
import DoughnutChart from '../Charts/Doughnut/Doughnut';
import Accountingchart from '../Charts/Accounting-chart/AccountingChart';
import LineChart from '../Charts/Line-chart/LineChart';
import MobileAnalysis from './Mobile-analysis/MobileAnalysis';

const Analysis = () => {
	const [content, setContent] = useState("");
 		return (
   	 <div className="analysis">
			 <div className="analysis__desktop">
			 	<h2>Analysis</h2>
				 <MultitypeChart />
				 <div className='analysis__charts-row'>
					 <DoughnutChart/>
					 <LineChart/>
				 </div>
			 </div>
			 <div className="analysis__mobile">
				 <MobileAnalysis/>
			 </div>
		 </div>
		);
}

export default Analysis;
