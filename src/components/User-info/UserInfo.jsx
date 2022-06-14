import React from 'react';
import { icons } from '../../utils/icons';
import { useDispatch } from 'react-redux';
import { selectLink } from '../../store/sidebarSlice';
import { useNavigate } from 'react-router-dom';
import './user-info.css'

const Userinfo = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const navigateTo = () =>{
		navigate('/profile')
		dispatch(selectLink('profile'))
	}

	return (
		<div
		onClick={navigateTo} 
		className='user-info'>
			<div className="user-info__logo">
				<icons.FaUserAlt/>
				<span className='user-info__status'/>
			</div>
			<div className="user-info__info">
				<span className="user-info__fullname">
					User name
				</span>
				<span className="user-info__profession">
					Frontend developer
				</span>
			</div>

			<div className="user-info__message-info">
				<icons.AiOutlineBell/>
				<span className='message-count'><span className='count-message'>3</span></span>
			</div>
		</div>
	);
}

export default Userinfo;
