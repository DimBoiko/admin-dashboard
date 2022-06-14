import React from 'react';
import Tasks from '../Tasks/Tasks';
import { icons } from '../../utils/icons';
import './profile.css'

const Profile = () => {
	return (
		<div className='profile'>
			<div className="profile__container">
				<div className="profile__user">
					<div className="profile__user-logo">
						<icons.FaUserAlt/>
					</div>
					<div className="profile__user-info">
						<span className='profile__user-name'>User name</span>
						<span className='profile__user-position'>Frontend developer</span>
						<div className="profile__user-status">
							<div className='status-online'></div>
							<span>Online</span>
						</div>
					</div>
				</div>
				<Tasks/>
			</div>
		</div>
	);
}

export default Profile;
