import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set ,update,remove} from "firebase/database";

const todosSlice = createSlice({
	name:'todos',
	initialState:{
		todos:[],
	},
	reducers:{
		addTodo(state,action){
			const db = getDatabase()
			set(ref(db, `todos/${action.payload.date}`  + action.payload.id), {
				id:action.payload.id,
				body: action.payload.body,
				date: action.payload.date,
				completed: action.payload.completed,
			});
		},
		setTodos(state,action){
			if(Array.isArray(action.payload)){
				state.todos = [...action.payload]
				return 
			}
			if(typeof action.payload === "object"){
				state.todos.push(action.payload)
			}
			
		},
		completeTodo(state,action){
			const db = getDatabase();
			const updates = {
				completed: !action.payload.completed
			}
			update(ref(db,`/todos/${action.payload.date}` + action.payload.id),{completed:updates.completed})
			state.todos.forEach(todo => {
				if(todo.id === action.payload.id){
					todo.completed =  !todo.completed
				}
			})
		},
		removeTodo(state,action){
			const db = getDatabase();
			remove(ref(db,`/todos/${action.payload.date}` + action.payload.id))
			state.todos =  state.todos.filter((todo)=>{
				return todo.id !== action.payload.id
			})
		}
	},
})

export const {addTodo,setTodos,removeTodo,completeTodo} = todosSlice.actions
export default todosSlice.reducer