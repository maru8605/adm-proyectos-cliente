
import React,{useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';

const Project = ( {proyecto} ) => {

    const projectsContext = useContext(ProjectContext);
    const {currentProject} = projectsContext; 

    // const selectProject = id =>  {
    //     currentProject(id)
    // }

    return (
        <li>
            <button 
            className='btn btn-blank'
            onClick={ () => currentProject(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

export default Project
