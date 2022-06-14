import React from 'react';
import SettingsSbItem from './Settings-sidebar-item/SettingsSbItem';
import {useModal} from '../../hooks/useModal'
import { selectAll } from '../../store/sidebarSlice';
import { useSelector,useDispatch} from 'react-redux';
import './settings.css'

const Settings = ({setSettingsState}) => {
	const dispatch = useDispatch()
	const modalHandler = useModal()
	const sidebarItems = useSelector(state => state.sidebar.sidebarItems)

	return (
		<div className='settings' onClick={(e)=> modalHandler(true,setSettingsState,e,'settings')}>
			<div className="settings__body">
				<div className="settings__title">
					<h4>Settings</h4>
				</div>
				<div className="settings__sidebar">
					<h4 >Navigation settings</h4>
					{sidebarItems.map((item,index)=>{
						return(
							<SettingsSbItem index={index} key={item.name} item={item}/>
						)
					})}
				</div>
				<span 
				onClick={()=>setSettingsState(false)}
				className='close-settings'>&times;
				</span>
				<div 
				onClick={()=>dispatch(selectAll())}
				className="check-all-btn">
					Select all
				</div>
			</div>
		</div>
	);
}

export default Settings;
