import React from 'react';
import { useDispatch } from 'react-redux';
import { editSidebar } from '../../../store/sidebarSlice';
import './settings-sb-item.css'

const SettingsSbItem = ({item,index}) => {
	const dispatch = useDispatch()

	return (
		<div className ='settings__sidebar-item'>
			<input tabIndex={index + 1} onChange={()=>dispatch(editSidebar(item.name))} className='item-hidden-input' checked={!item.hidden} type="checkbox" name="settings-sidebar" id={item.name} />
			<span className='item-fake-input'></span>
			<label htmlFor={item.name}>{item.name}</label>
		</div>
	);
}

export default SettingsSbItem;
