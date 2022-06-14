import React, { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';	
import { useModal } from '../../../hooks/useModal';
import { addTodo ,setTodos} from '../../../store/todosSlice';
import './todo-modal.css';


const TodoModal = ({todoModal,setTodoModal}) => {
	const dispatch = useDispatch()
	const todoDate = useSelector(state => state.date.dateSelected)
	const [todoBody, setTodoBody] = useState('')
	const modalHandler = useModal()
	const createTodo = () =>{
		const todo = {
			id: Date.now(),
			body:todoBody,
			date: String(todoDate).split(' ').slice(0,4).join(' '),
			completed:false
		}
		dispatch(addTodo(todo))
		dispatch(setTodos(todo))
		setTodoModal(false)
	}

	return (
		<div className='todo-modal' onClick={(e)=> modalHandler(todoModal,setTodoModal,e,'todo-modal')}>
			<div className="todo-modal__body">
				<h4>Create new todo</h4>
				<input onChange={(e) => setTodoBody(e.target.value)} value={todoBody} placeholder='Name' type="text"/>
				<button onClick={createTodo} >Create</button>
				<span onClick={()=> setTodoModal(false)} className='close-modal'>&times;</span>
			</div>
		</div>
	);
}

export default TodoModal;
