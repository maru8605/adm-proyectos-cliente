import React, {useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';

import Task from './Task'

const ListTask = () => {
    const projectsContext = useContext(ProjectContext);
    const {proyecto} = projectsContext; 

    const listadoTareas = [
        {nombre: 'elegir plataforma', estado: true},
        {nombre: 'elegir colores', estado: false},
        {nombre: 'maquetado', estado: false},
        {nombre: 'elegir pago', estado: true},
    ]
    return (
        <>
            <h2>Lista de Tareas</h2>

            <ul className='listado-tareas'>
                {listadoTareas.length === 0
                ? <p className='tareas'> No hay tareas</p>
                : listadoTareas.map( tarea => (
                    <Task tarea={tarea}/>
                ))}
            </ul> 
            <button
                type='button'
                className='btn btn-eliminar'
            >Eliminar Proyecto &times;</button>
        </>
    )
}

export default ListTask
