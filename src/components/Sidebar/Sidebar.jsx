import React, { useEffect, useState, useRef } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { selectLink } from '../../store/sidebarSlice';
import { icons } from '../../utils/icons';
import { useFullScreen } from '../../hooks/useFullScreen';
import { Link } from 'react-router-dom';
import Settings from '../Settings/Settings';
import './sidebar.css'
import BurgerMenu from '../../UI/Burger-menu/BurgerMenu';


const Sidebar = () => {
	const [burgerState,setBurgerState] = useState(false)
	const dispatch = useDispatch()
	const sidebar = useRef(null)
	const sidebarModal = useRef(null)
	const sidebarItems = useSelector(state => state.sidebar.sidebarItems)
	const [settingsState,setSettingsState] = useState(false)
	const fullScreenHandle = useFullScreen()

	useEffect(()=>{
		const link = localStorage.getItem('link')
		if(link){
			dispatch(selectLink(link))
		}
	},[dispatch])

	const showSidebar = (burger) => {
		sidebar.current.classList.toggle('show-sidebar')
		sidebarModal.current.classList.toggle('show-modal')
		setBurgerState(!burgerState)
	}

	return (
		<div className='sidebar'>	
			<button 
			onClick={showSidebar}
			className="sidebar-burger">
				<BurgerMenu burgerState={burgerState} setBurgerState={setBurgerState}/>
			</button>
			<div
			ref={sidebarModal} 
			onClick={showSidebar}
			className="sidebar__modal"></div>
			<div ref={sidebar} className="sidebar__colum">
				<div className="siderbar__logo">
					<icons.BiAnalyse/>
					<h1>Admin Panel</h1>
				</div>
				<nav className='sidebar__nav'>
					{sidebarItems.map((sidebarItem,index)=>{
						if(sidebarItem.hidden){
							return
						}
						return(
							<Link 
							className='sidebar__name' key={index} to={`/${sidebarItem.link}`}
							>
							<div 
							onClick={()=>dispatch(selectLink(sidebarItem.link))}
							style={sidebarItem.selected 
							? {background: 'linear-gradient(90deg, rgba(241, 233, 8, 0.887) 0%,  rgba(255, 179, 0, 0.772) 100%)',borderRadius: '20px'}
							: {background : 'transparent'}
							}
							className='sidebar__item' >
								<sidebarItem.icon/>
								<span className='siderbar__item-name'>{sidebarItem.name}</span>
							</div>
							</Link>
						)
					})}
				</nav>
				<div className="siderbar__settings">
					<div className="siderbar__setting-item">
					 		<icons.BiLogOutCircle/>
						<button className='siderbar__exit'>Exit</button>
					</div>
					<div 
					onClick={()=> setSettingsState(true)}
					className="siderbar__setting-item">
						<icons.AiFillSetting/>
						<button 
						className='siderbar__settings-btn'>Settings</button>
					</div>
					<div 
					className="sidebar__fullscreen">
						<icons.BsArrowsFullscreen onClick={fullScreenHandle} />
						<button className='fullscreen-btn'/>
					</div>
				</div>
			</div>
			{settingsState
			? <Settings setSettingsState={setSettingsState}/>
			: ''
			}
		</div>
	);
}

export default Sidebar;
