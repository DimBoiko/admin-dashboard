import React,{useState} from 'react';
import Analysis from '../components/Analysis/Analysis';
import Sidebar from '../components/Sidebar/Sidebar';
import AnalysisRight from '../components/Analysis/Analysis-right-colum/AnalysisRight';

const AnlysisPage = () => {

	return (
		<>
			<Sidebar/>
			<Analysis/>
			<AnalysisRight/>
		</>
	);
}

export default AnlysisPage;
