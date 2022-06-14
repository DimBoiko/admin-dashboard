import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set ,update,remove} from "firebase/database";


const tasksSlice = createSlice({
	name:'tasks',
	initialState:{
		tasks:[
	
		]
	},
	reducers:{
		setTasks(state,action){
			if(Array.isArray(action.payload)){
				state.tasks = [...action.payload]
			}else{
				const db = getDatabase()
				set(ref(db,'tasks/' + action.payload.id),action.payload)
				state.tasks.push(action.payload)
			}
		},
		removeTask(state,action){
			const db = getDatabase() 
			remove(ref(db,'tasks/' + action.payload))
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
		}
	}
})

export const {setTasks,removeTask} = tasksSlice.actions
export default tasksSlice.reducer