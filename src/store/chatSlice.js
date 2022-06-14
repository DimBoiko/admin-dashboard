import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
	name:'chat',
	initialState:{
		messages:[
			{
				user:{
					'user-name':'User name',
					'user-logo': '#fdbb07'
				},
				text:'Hi!',
				time:'15:20'
			},
		]
	},
	reducers:{
		newMessage(state,action){
			state.messages.push(action.payload)
		}
	}
})

export const {newMessage} = chatSlice.actions
export default chatSlice.reducer