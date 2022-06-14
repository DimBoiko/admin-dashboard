import React, { useEffect, useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setTasks } from '../../store/tasksSlice';
import { getData } from '../../utils/getData';
import { Transition } from 'react-transition-group';
import Task from './Task/Task';
import './tasks.css'


const Tasks = () => {
	const dispatch = useDispatch()
	const tasks = useSelector(state => state.tasks.tasks)

	const [createTask,setCreateTask] = useState(false)
	const [createBtnState,setCreateBtnState] = useState(false)
	const [newTask,setNewTask] = useState({
		taskDetails:'',
		deadline:'',
		priority:''
	})

	useEffect(()=>{
		if(newTask.priority.length && newTask.deadline.length > 0 && newTask.taskDetails.length > 3){
			setCreateBtnState(true)
		}else{
			setCreateBtnState(false)
		}
	},[newTask])

	useEffect(()=>{
		const getTasks = async () => {
			const tasks = await getData('tasks')
			dispatch(setTasks(tasks))
		}
		getTasks()
	},[])

	const createNewTask = () => {
		const task = {...newTask,id:Date.now(),deadline:newTask.deadline.split('-').reverse().join('.')}
		dispatch(setTasks(task)) 
		setCreateTask(false)
		setNewTask({
			taskDetails:'',
			deadline:'',
			priority:''
		})
	}

	const cancelCreating = () => {
		setCreateTask(false)
		setNewTask({
			taskDetails:'',
			deadline:'',
			priority:''
		})
	}

	return (
		<div className='tasks'>
			<div className="tasks__info">
				<span>Task</span>
				<span>Deadline</span>
				<span>Priority</span>
			</div>
			{tasks.map((task,index)=>{
				return (
					<Task key={index} task={task}/>
				)
			})}
			{createTask
			? <div className="new-task">
					<div className="new-task__info">
						<input 
						onChange={(e)=>setNewTask({...newTask,taskDetails:e.target.value})}
						type="text" />
					</div>
					<div className="new-task__deadline">
						<input 
						onChange={(e)=>setNewTask({...newTask,deadline:e.target.value})}
						type="date" />
					</div>
					<div className="new-task__priority">
						<div className='new-task-label' htmlFor="Normal">
							<input type="radio" 
							className='custom-radio'
							onChange={(e)=> setNewTask({...newTask,priority:e.target.id})} 
							name="priority" id="Normal"/>
							<span className='fake-radio'></span>
							<label style={{color: 'green'}} className='priority-label' htmlFor="Normal">Normal</label>
						</div>
						<div className='new-task-label'>
							<input 
							className='custom-radio' 
							onChange={(e)=> setNewTask({...newTask,priority:e.target.id})}
							type="radio" name="priority" id="High"/>
							<span className='fake-radio'></span>
							<label style={{color: 'rgb(202, 82, 82)'}} className='priority-label' htmlFor="High">High</label>
						</div>  
					</div>
					{createBtnState 
					? <Transition in={createBtnState} timeout={0}>
							{(state) => <div className={`new-task__create-btn ${state}`}>
								<button onClick={createNewTask}>+</button>
					   	</div>}
						</Transition>
					: <Transition in={createBtnState} timeout={0}>
							{(state) => <div className={`new-task__cancel-btn ${state}`}>
								<button onClick={()=>cancelCreating(false)}>Cancel</button>
							</div>}
						</Transition>
					}
					
				</div>
			: <div className="tasks__create-task">
					<button onClick={()=> setCreateTask(true)}>+</button>
				</div>
			}
			
		</div>
	);
}

export default Tasks;
