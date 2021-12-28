import React, {useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';
import TaskContext from '../../context/task/TaskContext'

import Task from './Task'

const ListTask = () => {
    const projectsContext = useContext(ProjectContext);
    const { proyecto, deleteProject } = projectsContext; 

    const tasksContext = useContext(TaskContext)
    const {tasksproject} = tasksContext


    // Si no hay proyecto seleccionado 
    if(!proyecto) return <h2> Selecciona un proyecto. </h2>
    // Array destructuring para otener el proyecto
    const [currentProject] = proyecto

    const onClickDelete = () =>{
        deleteProject(currentProject.id)
    }

    return (
        <>
            <h2> Proyecto: {currentProject.nombre}</h2>

            <ul className='listado-tareas'>
                {tasksproject.length === 0
                ? <p className='tareas'> No hay tareas</p>
                : tasksproject.map( tarea => (
                    <Task tarea={tarea}/>
                ))}
            </ul> 
            <button
                type='button'
                className='btn-small btn-edit'
                onClick={onClickDelete}
            >Eliminar Proyecto &times;</button>
        </>
    )
}

export default ListTask
