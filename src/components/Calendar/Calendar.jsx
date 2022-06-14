import React, { useEffect, useState,useRef, } from 'react';
import { Calendar } from 'react-calendar';
import { useDispatch,useSelector} from 'react-redux';
import { selectDate } from '../../store/dateSlice';
import { icons } from '../../utils/icons';
import './calendar.css'

const Weekcalendar = () => { 
	const selectedDate = useSelector(state => state.date.dateSelected)
	const dispatch = useDispatch()
	const [date,setDate] = useState(selectedDate)
	const transformX = useRef(0)
	
	const transformDateRowForward = () =>{
		if(transformX.current < -3350){
			return
		}
		transformX.current -= 339
		const dateRow = document.querySelectorAll('.react-calendar__month-view__days button')
		dateRow.forEach((date) => {
			date.style.transform = `translateX(${transformX.current}%)`
		})
	}
	const transformDateRowBack = () =>{
		
		if(transformX.current === 0){
			return
		}
		const dateRow = document.querySelectorAll('.react-calendar__month-view__days button')
		transformX.current += 339
		dateRow.forEach((date) => {
			date.style.transform = `translateX(${transformX.current}%)`
		})
	}
	
	useEffect(()=>{
		const transfotmMultiplier = (Math.ceil(parseInt(String(date).split(' ')[2]) / 3) - 1)
		if(transfotmMultiplier > 0){
			transformX.current = 339 * transfotmMultiplier
			transformX.current = parseInt(`-${transformX.current}`)
			const dateRow = document.querySelectorAll('.react-calendar__month-view__days button')
			dateRow.forEach((date) => {
				date.style.transform = `translateX(${transformX.current}%)`
			})
		}
	},[])

	useEffect(()=>{
		dispatch(selectDate(date))
	},[date])
	

	return (
			<div className='week-calendar'>
			<icons.IoIosArrowBack 
			onClick={transformDateRowBack}
			className='arrow prev'/>
			<Calendar 
			className='calendar'
			showNavigation={false} 
			showNeighboringMonth={false} 
			defaultValue={date} 
			onChange={setDate} 
			value={date}
			activeStartDate={date}
			formatDay={(locale,date) => {
				const dayInfo = String(date).split(' ')
				const dayOfWeek = `${dayInfo[0]} ${dayInfo[2]}`  
				return dayOfWeek
			}}			
			/>
			<icons.IoIosArrowBack 
			onClick={transformDateRowForward}
			className='arrow next'/>
		</div>
	);
}


export default Weekcalendar;







