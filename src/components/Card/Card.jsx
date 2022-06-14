import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleCard } from '../../store/cardsSlice';
import Accountingchart from '../Charts/Accounting-chart/AccountingChart';
import './card.css'

const Card = ({name,Icon,result,interest,showCard,indexCard}) => {
	const dispatch = useDispatch()
	
	return (		
		<div className='card'>
			<div 
				onClick={()=>dispatch(toggleCard(indexCard))}
				className="card__container">
			<div className="card__icon">
				<Icon/>
			</div>
				<div className="card__info">
					<span className='card__name'>{name}</span>
					<span className='card__result'>{result}</span>
					<span className='card__interest'>{interest}</span>
				</div>
			</div>
				<Accountingchart 
				showCard={showCard} 
				indexCard={indexCard}/>
		</div>	
		
	);
}

export default Card;
