import React from 'react';
import { useSelector } from 'react-redux';
import { icons } from '../../utils/icons';
import './messages.css'

const Messages = () => {
	const messages = useSelector(state => state.chat.messages)

	return (
		<div className='messages'>
			{messages.map((message,index)=>{
				return (
					<div key={index} className="message">
						<div className='message-user-info'>
							<div style={{backgroundColor:`${message.user['user-logo']}`}} 
							 	className='massage-user-logo'>
								<icons.FaUserAlt/>
							</div>
						{message.user['user-name']}
						</div>
						<div className="message-body">
							<span className='message-text'>{message.text}</span>
							<span className='message-time'>{message.time}</span>
						</div>
					</div>
				)
			})}
		</div>
	);
}

export default Messages;
