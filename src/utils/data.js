import { icons } from "./icons";


export const sideBarItems = [
	{
		name: 'Dashboard',
		icon:icons.AiOutlineDashboard,
		selected:true,
		link:''
	},
	{
		name: 'Chat',
		icon:icons.AiFillWechat,
		selected:false,
		link:'chat'
	},
	{
		name: 'Profile',
		icon:icons.AiOutlineUser,
		selected:false,
		link:'profile'
	},
	{
		name: 'Analysis',
		icon:icons.BiAnalyse,
		selected:false,
		link:'analysis'
	},
	{
		name: 'Projects',
		icon:icons.AiOutlineProject,
		selected:false,
		link:'projects'
	},
]

export const messages = [
	{
		user:{
			'user-name':'User name',
			'user-logo': '#fdbb07'
		},
		text:'Hi!',
		time:'15:20'
	},
]

export const tasks = [
	{
		taskDetails:'Lorem ipsum dolor sit amet',
		deadline:'09.05.2022, 6PM',
		priority: 'Normal',
		status:true
	},
	{
		taskDetails:'Lorem ipsum dolor sit amet',
		deadline:'11.05.2022, 3PM',
		priority: 'High',
		status:false
	},
	{
		taskDetails:'Lorem ipsum dolor sit amet',
		deadline:'12.05.2022, 2PM',
		priority: 'High',
		status:false
	},
]