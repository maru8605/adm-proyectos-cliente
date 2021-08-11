
import ProjectReducer from './ProjectReducer'
import ProjectContext from './ProjectContext'
import { useReducer } from 'react'
import {FORM_PROJECT, GET_PROJECTS} from '../types'

const ProjectState = props => {

    const projectos = [
        { id: 1, nombre: 'tienda virtual' },
        { id:2, nombre: 'web personal' },
        { id:3, nombre :'intranet' },
        { id:4, nombre : 'ejemplo'}
    ]

    const initialState = {
        
        proyectos : [],
        formulario : false 
    }

    // Dispatch para ejecutar las acciones 
    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    // funciones para el crud
    const showForm =()=>{
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projectos
        })
    }


    return(
        <ProjectContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario: state.formulario,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
