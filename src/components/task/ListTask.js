import React, {useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';

import Task from './Task'

const ListTask = () => {
    const projectsContext = useContext(ProjectContext);
    const { proyecto, deleteProject } = projectsContext; 


    // Si no hay proyecto seleccionado 
    if(!proyecto) return <h2> Selecciona un proyecto. </h2>
    // Array destructuring para otener el proyecto
    const [currentProject] = proyecto
    

    const listadoTareas = [
        {nombre: 'elegir plataforma', estado: true},
        {nombre: 'elegir colores', estado: false},
        {nombre: 'maquetado', estado: false},
        {nombre: 'elegir pago', estado: true},
    ]

    const onClickDelete = () =>{
        deleteProject(currentProject.id)
    }

    return (
        <>
            <h2> Proyecto: {currentProject.nombre}</h2>

            <ul className='listado-tareas'>
                {listadoTareas.length === 0
                ? <p className='tareas'> No hay tareas</p>
                : listadoTareas.map( tarea => (
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
