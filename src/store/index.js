import { configureStore ,} from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import dateSlice from "./dateSlice";
import todosSlice from "./todosSlice";
import chatSlice from "./chatSlice";
import sidebarSlice from "./sidebarSlice";
import projectsSlice from "./projectsSlice";
import tasksSlice from "./tasksSlice";

const store = configureStore({
	reducer:{
		cards:cardsSlice,
		date:dateSlice,
		todos:todosSlice,
		chat:chatSlice,
		sidebar:sidebarSlice,
		projects:projectsSlice,
		tasks:tasksSlice
	},
	middleware:(getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		 }),	
	
})

export default store