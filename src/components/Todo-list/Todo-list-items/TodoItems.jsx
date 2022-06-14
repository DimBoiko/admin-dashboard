import React from 'react';
import TodoItem from '../todo-list-item/TodoItem';
import { Transition } from 'react-transition-group';
import './todo-items.css'

const TodoItems = ({todos,todosTransition}) => {
	return (
		<Transition in={todosTransition} timeout={10}>
			{state => 
			{return (	
				<ul className={`todolist__items ` + state}>
				{todos.map((todo,index)=>{
					return <TodoItem state={state} key={index} todo={todo} />
				})}
			</ul>
			)}}
		</Transition>
	);
}

export default TodoItems;
