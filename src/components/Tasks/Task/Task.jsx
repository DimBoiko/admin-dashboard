import React from 'react';
import {useDispatch} from 'react-redux'
import { removeTask } from '../../../store/tasksSlice';
import './task.css'

const Task = ({task}) => {
	const dispatch = useDispatch()

	let taskPriority = ''
	switch (task.priority.toLowerCase()) {
		case 'normal':
			taskPriority = 'green'
			break;
		case 'high':
			taskPriority = '#ca5252'
			break;
		default:
			taskPriority = 'black'
			break;
	}
	
	return (
		<div className='task'>
				<div className="task__info">
					{task.taskDetails}
				</div>
				<div className="task__deadline">
					{task.deadline}
				</div>
				<div 
				style={{color:taskPriority,boxShadow: `0px 0px 25px 1px ${taskPriority}`}}
				className="task__priority">
					{task.priority}
				<span 
				onClick={()=>dispatch(removeTask(task.id))}
				className='task-remove'>
					&times;
				</span>
				</div>
		</div>
	);
}

export default Task;
