import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
	name:'dateSlice',
	initialState:{
		dateSelected : new Date(), 
		dateNow: new Date(),

	},
	reducers:{
		selectDate(state,action){
			state.dateSelected = action.payload
		},
		

	}
})

export const {selectDate,setTransformX} = dateSlice.actions
export default dateSlice.reducer