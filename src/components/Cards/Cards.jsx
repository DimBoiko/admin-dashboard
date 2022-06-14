import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card'
import './cards.css'

const Cards = () => {
	const cardInfo = useSelector(state => state.cards.cards)
	return (
		<div className='cards'>
			{cardInfo.map((cardInfo,index)=>{
				return (
					<Card 
					key={index} 
					name={cardInfo.name}
					result={cardInfo.result} 
					interest={cardInfo.interest} 
					Icon={cardInfo.icon}
					showCard={cardInfo.show}
					indexCard={index}
					/>
				)
			})}
		</div>
	);
}

export default Cards;
