import React, { useState,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../../../store/projectsSlice';
import { Transition } from 'react-transition-group';
import './createprojectmodal.css'

const CreateProjectModal = ({modalState,updateProjects,setModalState}) => {
	const dispatch = useDispatch()

	const [project,setProject] = useState({
		title:'',
		body:'',
		deadline:''
	})
	const projectTitle = useRef(null)
	const projectBody = useRef(null)
	const projectDeadline = useRef(null)
	
	const createProject = () => {
		project.title.length < 3 
		?  projectTitle.current.classList.add('pr-error') 
		:  projectTitle.current.classList.remove('pr-error')

		project.body.length < 8 
		?   projectBody.current.classList.add('pr-error') 
		:  projectBody.current.classList.remove('pr-error') 

		!project.deadline.length 
		? projectDeadline.current.classList.add('pr-error') 
		:  projectDeadline.current.classList.remove('pr-error')
		
		if(project.title.length > 3 && project.body.length > 8 && project.deadline.length){
			const newProject = {}
			newProject.id = Date.now()
			newProject.title = project.title
			newProject.body = project.body
			newProject.deadline = project.deadline
			newProject.completed = false
			dispatch(addProject(newProject))
			setProject({
				title:'',
				body:'',
				deadline:''
			})
			setModalState(false)
			updateProjects()
		}
	}

	return (
		<Transition in={modalState} timeout={500}>
			{(state) => <div className='project-modal'>
				<div className={`project-modal__body ${state}`}>
					<h4>Create project</h4>
					<div className="project-modal__body-inputs" >
						<input 
						ref={projectTitle}
						value={project.title} 
						onChange={(e)=>setProject({...project,title : e.target.value})} 
						placeholder='Title' 
						type="text"/>
						<input 
						ref={projectDeadline}
						value={project.deadline} 
						onChange={(e)=>setProject({...project,deadline : e.target.value})}
						type="date"/>
					</div>
					<h5>Describe project</h5>
					<textarea
					ref={projectBody}
					onChange={(e)=>setProject({...project,body : e.target.value})} 
					placeholder='Describe...' 
					type="text"/>
					<button onClick={createProject}>Create</button>
					<span onClick={()=>setModalState(false)}>&times;</span>
				</div>
			</div>}
		</Transition>
	);
}

export default CreateProjectModal;
