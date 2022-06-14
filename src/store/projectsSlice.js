import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set ,update,remove} from "firebase/database";

const projectsSlice = createSlice({
	name:'projects',
	initialState:{
		projects:[]
	},
	reducers:{
		addProject(state,action){
			const db = getDatabase()
			set(ref(db, `projects/`  + action.payload.id), {
				id:action.payload.id,
				title: action.payload.title,
				body: action.payload.body,
				deadline: action.payload.deadline.split('-').reverse().join('.'),
				completed: action.payload.completed,
			});
			state.projects = [...state.projects,action.payload]
		},
		setProjects(state,action){
			if(action.payload){
				state.projects = [...action.payload]
			}
		},
		editProject(state,action){
			const db = getDatabase()
			update(ref(db,'projects/' + action.payload.id),{
				title: action.payload.title,
				body: action.payload.body,
				deadline: action.payload.deadline.split('-').reverse().join('.'),
			})
			state.projects = state.projects.map((project)=>{
				if(project.id === action.payload.id){
					return {...project,title:action.payload.title,body:action.payload.body, deadline: action.payload.deadline}
				}
				return project
				
			})
		},
		removeProject(state,action){
			const db = getDatabase()
			remove(ref(db,'projects/' + action.payload))
			state.projects = state.projects.filter((project)=> project.id !== action.payload)
		}

	}
})

export const {removeProject,addProject,setProjects,editProject} = projectsSlice.actions
export default projectsSlice.reducer