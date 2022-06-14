import React,{useRef,useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setProjects } from '../../store/projectsSlice';
import { getData } from '../../utils/getData';
import { useModal } from '../../hooks/useModal';
import { icons } from '../../utils/icons';
import CreateProjectModal from './Project-modal/CreateProjectModal';
import Project from './Project/Project'
import SelectedPr from './Selected-project/SelectedPr';
import './projects.css'

const Projects = () => {
	const dispatch = useDispatch()
	const projects = useSelector(state => state.projects.projects)

	const [projectTrans,setProjectTrans] = useState(true)
	const [fetchData,setFetchData] = useState(false)
	const [modalState,setModalState] = useState(false)
	const [selectedProject,setSelectedProject] = useState(false)
	const projectInfo = useRef(null)

	const modalHandler = useModal()

	useEffect(()=>{
		const getProjects = async () =>{
			const promise = getData('projects')
			const data = await promise
			dispatch(setProjects(data))
		}
		getProjects()
	},[dispatch])


	const toggleInfo = () =>{
		projectInfo.current.classList.contains('show-pr-info')  
		? projectInfo.current.classList.remove('show-pr-info')
		: projectInfo.current.classList.add('show-pr-info')
	}

	const updateProjects = (e) => {
		setFetchData(!fetchData)
	}	

	const selectProject = (project) =>{
		setSelectedProject(project)
	}

	return (
		<div 
			onClick={(e)=>modalHandler(modalState,setModalState,e,'project-modal')} className='projects'>
			<h2 className='projects__title'><icons.BsListTask/>Projects</h2>
			<div className="project-items">
				{projects.map((project)=>{
					return <Project 
					selectProject={selectProject}
					project={project}
					key={project.id}/>
				})}
			</div>
			<div className="project__create">
				<div ref={projectInfo} className="project__create-info">Create project</div>
				<button
				className='pr-create-btn'
				onMouseLeave={toggleInfo}
				onMouseEnter={toggleInfo} 
				onClick={(e)=>modalHandler(modalState,setModalState,e,'pr-create-btn')}
				type='button'>+</button>
			</div>
			{modalState 
			?<CreateProjectModal updateProjects={updateProjects} modalState={modalState} setModalState={setModalState}/>
			:''
			}
			{selectedProject
			? <SelectedPr updateProjects={updateProjects} projectTrans={projectTrans} setSelectedProject={setSelectedProject} project={selectedProject}/>
			:''
			}
			
		</div>
	);
}

export default Projects;
