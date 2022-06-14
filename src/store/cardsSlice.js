import { createSlice} from "@reduxjs/toolkit";
import { icons } from "../utils/icons";

const initialState = {
	cards:[
		{
			icon:icons.MdDriveFileRenameOutline,
			name:'Ongoing',
			result:'03',
			interest:'+10.80%',
			show:false
		},
		{
			icon:icons.RiMoneyDollarBoxFill,
			name:'Total Earning',
			result:'$22k',
			interest:'+10.80%',
			show:false
		},
		{
			icon:icons.BsCashCoin,
			name:'Withdraw',
			result:'$10k',
			interest:'+05.80%',
			show:false
		},
		{
			icon:icons.AiOutlineFundProjectionScreen,
			name:'Total Projects',
			result:'15',
			interest:'+10.80%',
			show:false
		},
	
	]
}

const cardsSlice = createSlice({
	name:'cardsSlice',
	initialState,
	reducers:{
		toggleCard(state,action){
			state.cards = state.cards.map((card,index)=>{
				if(index === action.payload){
					return {...card,show: !card.show} 					
				}
				return card
			})
		}
	}
})

export const {toggleCard} = cardsSlice.actions
export default cardsSlice.reducer

