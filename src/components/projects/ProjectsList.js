import React from 'react'
import Project from './Project'

const ProjectsList = () => {

    const proyectos = [
        {nombre: 'tienda virtual'},
        {nombre: 'web personal'},
        {nombre :'intranet'}
    ]
    return (
        <ul className='listado-proyectos'>
           {proyectos.map(proyecto => (
               <Project
                    proyecto={proyecto}
               />
           ))} 
        </ul>
    )
}

export default ProjectsList
