import { createSlice } from "@reduxjs/toolkit";
import { icons } from "../utils/icons";

const sidebarSlice = createSlice({
	name:'sidebar',
	initialState:{
		sidebarItems:[
		{
			name: 'Dashboard',
			icon:icons.AiOutlineDashboard,
			selected:true,
			hidden:false,
			link:''
		},
		{
			name: 'Chat',
			icon:icons.AiFillWechat,
			selected:false,
			hidden:false,
			link:'chat'
		},
		{
			name: 'Profile',
			icon:icons.AiOutlineUser,
			selected:false,
			hidden:false,
			link:'profile'
		},
		{
			name: 'Analysis',
			icon:icons.BiAnalyse,
			selected:false,
			hidden:false,
			link:'analysis'
		},
		{
			name: 'Projects',
			icon:icons.AiOutlineProject,
			selected:false,
			hidden:false,
			link:'projects'
		},
		]
	},	
	reducers:{
		selectLink(state,action){
			localStorage.setItem('link',action.payload)
			state.sidebarItems = state.sidebarItems.map((sidebarItem)=>{
				if(sidebarItem.link === action.payload){
					return {...sidebarItem,selected : true}
				}
				return {...sidebarItem,selected : false}
			})	
		},
		editSidebar(state,action){
			state.sidebarItems = state.sidebarItems.map((item)=>{
				if(item.name === action.payload){
					return {...item,hidden:!item.hidden}
				}
				return item
			})
		},
		selectAll(state){
			state.sidebarItems = state.sidebarItems.map((item)=> {return {...item,hidden:false}})
		}
	}
})

export const {editSidebar,selectLink,selectAll} = sidebarSlice.actions
export default sidebarSlice.reducer