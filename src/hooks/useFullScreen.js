import { useRef,useCallback} from "react"

export const useFullScreen = () => {
	const fullscreenEnable = useRef(false)

	return useCallback(()=>{
		if(!fullscreenEnable.current){
			document.documentElement.requestFullscreen()
			fullscreenEnable.current = true
			return
		}
		if(fullscreenEnable.current){
			document.exitFullscreen()
			fullscreenEnable.current = false
			return
		}
	},[])
}