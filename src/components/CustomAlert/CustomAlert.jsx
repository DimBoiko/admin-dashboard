import React,{useState} from 'react';
import './custom-alert.css'

const CustomAlert = () => {
	const [alert,setAlert] = useState(false)
	let alertState = ''
	alert ? alertState = 'none' : alertState = 'block' 

	return (
		<div style={{display:alertState}} className='custom-alert'>
			<div className="custom-alert__body">
				
			</div>
		</div>
	);
}

export default CustomAlert;
