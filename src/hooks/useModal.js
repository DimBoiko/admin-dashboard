import { useCallback } from "react"

export const useModal = () => {
	return useCallback((state,stateHandler,event = null,target)=>{
		if(event){
			event.stopPropagation()
			event.target.className === target && stateHandler(!state)
		}
	},[])
}