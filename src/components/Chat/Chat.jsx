import React, { useState } from 'react';
import Messages from '../Messages/Messages';
import { useDispatch } from 'react-redux';
import { newMessage } from '../../store/chatSlice';
import { icons } from '../../utils/icons';
import './chat.css'

const Chat = () => {
	const [messageText,setMessageText] = useState('')
	const dispatch = useDispatch()

	const createNewMessage = () =>{
		if(messageText.length < 3){return}
		const time = String(new Date()).split(' ')[4].slice(0,5)
		const message = {
				user:{
					'user-name':'User name',
					'user-logo': '#fdbb07'
				},
				text:messageText,
				time:time
		}
		dispatch(newMessage(message))
		setMessageText('')
	}

	return (
		<div className='chat'>
			<div className="chat__container">
				<div className="chat__user">
					<div className="user-logo">
						<icons.FaUserAlt/>
					</div>
					<div className="chat__user-info">
						<span className='user-name'>User name</span>
						<span className='user-position'>Frontend developer</span>
					</div>
				</div>
				<Messages/>
			</div>
			<div className="chat__input">
				<div className='chat__input-container'>
					<input
					value={messageText}
					onChange={(e)=>setMessageText(e.target.value)}
					type="text"
					placeholder='Write a message...' />
					<span onClick={createNewMessage}><icons.AiOutlineSend/></span>
				</div>
			</div>
		</div>
	);
}

export default Chat;
