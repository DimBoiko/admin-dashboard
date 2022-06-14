import React from 'react';
import { icons } from '../../../utils/icons';
import { useDispatch } from 'react-redux';
import { completeTodo,removeTodo} from '../../../store/todosSlice';
import './todo-item.css'

const TodoItem = ({todo}) => {
	const dispatch = useDispatch()

	const deleteTodo = (e) => {
		e.stopPropagation()
		dispatch(removeTodo(todo))
	}

	return (
		<li 
		onClick={()=>dispatch(completeTodo(todo))} 
		style={todo.completed ? {backgroundColor: 'rgb(180, 252, 125)'} : {backgroundColor: 'rgb(255, 255, 255)'}} className='todolist__item'>
			<div className='todolist__item-body'>{todo.completed ? <span className='todo-complete'><icons.AiOutlineCheck/></span> : ''} {todo.body}</div>
			<span 
			onClick={(e)=> deleteTodo(e)}
			className='remove__item'>&times;</span>
		</li>
	);
}

export default TodoItem;
