import React from 'react';
import { icons } from '../../../utils/icons';
import './project.css'

const Project = ({project,selectProject}) => {
	return (
		<div onClick={()=>selectProject(project)} className='project'>
			<div className="project__container">
				<div className="project__title"><span className='pr-icon'><icons.AiOutlineProject/></span><h4>{project.title}</h4></div>
				<span className="project__body">
					<span className='project__desrp'>Description: </span>Click to see...
				</span>
				<span className="project__deadline"><span className='project__dln'>
					Deadline: </span>{project.deadline}</span>
			</div>
		</div>
	);
}

export default Project;
