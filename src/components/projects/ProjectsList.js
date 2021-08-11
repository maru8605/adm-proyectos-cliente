import React, {useContext, useEffect} from 'react'
import ProjectContext from '../../context/ProjectContext';
import Project from './Project'

const ProjectsList = () => {
    // extraer proyectos de State Inicial
    const projectContext = useContext(ProjectContext);
    const {proyectos, getProjects} = projectContext;

    useEffect(() => {
       getProjects()
    }, [])


    // revisar si proyectos tiene contenido
    if(proyectos.lenght === 0) return null
    
    return (
        <ul className='listado-proyectos'>
           {proyectos.map(proyecto => (
               <Project
                    id={proyecto.id}
                    proyecto={proyecto}
               />
           ))} 
        </ul>
    )
}

export default ProjectsList
