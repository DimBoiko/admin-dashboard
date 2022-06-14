import React, { useEffect, useRef, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import TodoItems  from './Todo-list-items/TodoItems';
import TodoModal from './todo-modal/TodoModal';
import { useDispatch,useSelector } from 'react-redux';
import {setTodos} from '../../store/todosSlice';
import { icons } from '../../utils/icons';
import { getData } from '../../utils/getData';
import './todolist.css'

const Todolist = () => {
	const [todoModal,setTodoModal] = useState(false) 
	const [todosTransition,setTodosTransition] = useState(false)
	const dispatch = useDispatch()
	const date = useSelector(state => state.date.dateSelected)
	const todos = useSelector(state => state.todos.todos)
	const dayInfo = String(date).split(' ')
	const dayOfWeek = `${dayInfo[0]} ${dayInfo[2]}`
	useEffect(()=>{
		const getTodos = async (promise) =>{
			setTodosTransition(false)
			const todos = await promise
			if(todos){
				const sortedTodos = todos.filter((todo)=>{
					return todo.date === String(date).split(' ').slice(0,4).join(' ')
				})
				dispatch(setTodos(sortedTodos))
				setTodosTransition(true)
			}
		}
		const promise = getData('todos')
		const todos = getTodos(promise)
	},[date])
	

	return (
		<div className='todolist'>
			<div className='todolist__colum'>
				<div className="todolist__today-block">
					<span><icons.AiOutlineCalendar/></span>
					<h4 className='todolist__title'>{dayOfWeek}</h4>
				</div>
				<Calendar/>
				<TodoItems 
				todos={todos} 
				todosTransition={todosTransition}
				/>
				<div className="todolist__create-todo">
					<button onClick={()=>setTodoModal(!todoModal)} className='create-todo-btn'>Create todo</button>
				</div>
			</div>
			{todoModal ? <TodoModal todoModal={todoModal} setTodoModal={setTodoModal} /> : ''}
		</div>
	);
}

export default Todolist;
