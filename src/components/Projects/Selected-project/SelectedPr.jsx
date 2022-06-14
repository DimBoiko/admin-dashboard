import React,{useState,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';
import {icons} from '../../../utils/icons'
import { useModal } from '../../../hooks/useModal';
import { editProject } from '../../../store/projectsSlice';
import { removeProject } from '../../../store/projectsSlice';
import './selectedpr.css'

const SelectedPr = ({updateProjects,projectTrans,project,setSelectedProject}) => {
	const dispatch = useDispatch()
	const [edit,setEdit] = useState(false)
	const [editedProject,setEditedProject] = useState(project) 
	const modalHandler = useModal()
	const projectTitle = useRef(null)
	const projectBody = useRef(null)
	const projectDeadline = useRef(null)

	const deleteProject = (id) => {
		dispatch(removeProject(id))
		setSelectedProject(false)
		updateProjects()
	}

	const setEditProject = () => {
		editedProject.title.length < 3 
		?  projectTitle.current.classList.add('pr-error') 
		:  projectTitle.current.classList.remove('pr-error')
		
		editedProject.body.length < 8 
		?   projectBody.current.classList.add('pr-error') 
		:  projectBody.current.classList.remove('pr-error')  

		!editedProject.deadline.length 
		? projectDeadline.current.classList.add('pr-error') 
		:  projectDeadline.current.classList.remove('pr-error')

		if(editedProject.title.length > 3 && editedProject.body.length > 8 && editedProject.deadline.length){
			const newProject = {}
			newProject.id = editedProject.id
			newProject.title = editedProject.title
			newProject.body = editedProject.body
			newProject.deadline = editedProject.deadline
			newProject.completed = editedProject.completed
			dispatch(editProject(newProject))
			setSelectedProject(false)
		}
	}

	return (
		edit 
		? <div onClick={(e)=>modalHandler(true,setSelectedProject,e,'selected-pr')} className={`selected-pr`}>
				<div className={`selected-pr__container`}>
					<div className="selected-pr__instruments">
						<span style={{color:'#fb7938c8'}}><icons.MdDriveFileRenameOutline onClick={()=>setEdit(!edit)} title='Edit project' role='img' /></span>
						<span><icons.AiFillDelete onClick={()=>deleteProject(project.id)} title='Delete project' role='img'/></span>
						<span onClick={()=>setSelectedProject(false)} className='selected-pr__close'>&times;</span>
					</div> 
					<h4 className="selected-pr__title"> <span className='sel-pr-icon'><icons.AiOutlineProject/></span>
						<input type="text" 
						ref={projectTitle}
						autoFocus={true}
						className='selected-pr__title-input'
						value={editedProject.title} 
						onChange={(e)=> setEditedProject({...editedProject,title : e.target.value})}/>
					</h4>
					<h4 className="selected-pr__author"><icons.BiUserCircle/> Author:<span>User name</span></h4>
					<div className="selected-pr__descrition"><span className='selected-pr__descrition-subtitle'><icons.MdDescription/> Description: </span>
					<textarea
						ref={projectBody}
						className='selected-pr__textarea'
						type="text" 
						value={editedProject.body} 
						onChange={(e)=> setEditedProject({...editedProject,body : e.target.value})}/>
					</div>
					<div className="selected-pr__deadline">
						<span className='selected-pr__deadline-subtitle'><icons.MdDateRange/> Deadline: </span>
						<input 
						ref={projectDeadline}
						className='selected-pr__deadline-input'
						onChange={(e)=>setEditedProject({...editedProject,deadline:e.target.value})} 
						type='date' />
					</div>
					<div className="selected-pr__save-btn">
						<button onClick={setEditProject}>Save</button>
					</div>
				</div>
			</div>

		: <Transition in={projectTrans} timeout={500}> 
			{(state) => <div onClick={(e)=>modalHandler(true,setSelectedProject,e,'selected-pr')} className={`selected-pr`}>
				<div className={`selected-pr__container ${state}`}>
					<div className="selected-pr__instruments">
						<span><icons.MdDriveFileRenameOutline title='Edit project' role='img' onClick={()=>setEdit(!edit)}/></span>
						<span><icons.AiFillDelete onClick={()=>deleteProject(project.id)} title='Delete project' role='img'/></span>
						<span onClick={()=>setSelectedProject(false)} className='selected-pr__close'>&times;</span>
					</div> 
					<h4 className="selected-pr__title"> <span className='sel-pr-icon'><icons.AiOutlineProject/></span>{project.title}</h4>
					<h4 className="selected-pr__author"><icons.BiUserCircle/> Author:<span>User name</span></h4>
					<div className="selected-pr__descrition"><span className='selected-pr__descrition-subtitle'><icons.MdDescription/> Description: </span>
						<p>{project.body}</p>
					</div>
					<div className="selected-pr__deadline"><span><span className='selected-pr__deadline-subtitle'><icons.MdDateRange/> Deadline: </span></span>{project.deadline}</div>
				</div>
			</div>}
		  </Transition>
	);
}

export default SelectedPr;
