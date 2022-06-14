import React,{useState} from 'react';
import ReactTooltip from 'react-tooltip';
import EventChart from '../../Charts/Event-chart/EventChart';
import PolarChart from '../../Charts/Polar-chart/PolarChart';
import MapChart from '../../Charts/Map-chart/MapChart';
import './analysis-right.css'

const AnalysisRight = () => {
	const [content, setContent] = useState("");

	return (
		<div className='analysis-right-colum' style={{}}>
			<EventChart/>
			<PolarChart/>
			<MapChart setTooltipContent={setContent} />
   		<ReactTooltip>{content}</ReactTooltip>
		</div>
	);
}

export default AnalysisRight;
