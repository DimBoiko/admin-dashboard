import React,{useRef,useEffect} from 'react';
import './burger-menu.css'

const BurgerMenu = ({burgerState}) => {
	const burger = useRef(null)
	useEffect(()=>{
		if(burgerState){
			burger.current.classList.add('active-burger')
		}
		else{
			burger.current.classList.remove('active-burger')
		}
	},[burgerState])

	return (
		<div 
			ref={burger}
			className="sidebar__burger">
				<span></span>
				<span></span>
				<span></span>
		</div>
	);
}

export default BurgerMenu;
