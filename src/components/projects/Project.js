
import React,{useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';
import TaskContext from '../../context/task/TaskContext';

const Project = ( {proyecto} ) => {

    const projectsContext = useContext(ProjectContext);
    const {currentProject} = projectsContext; 

// obtrener fn del context de tareas
    const tasksContext = useContext(TaskContext)
    const {getTasks} = tasksContext

//funcion para seleccionar el proyecto actual
    const selectProject = id => {
        currentProject(id)//fijar proyecto actual
        getTasks(id) // filtrar cuando se de click
    }

    return (
        <li>
            <button 
            className='btn btn-blank'
            onClick={ () => selectProject(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

export default Project
