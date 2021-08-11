import ProjectReducer from './ProjectReducer'
import ProjectContext from './ProjectContext'
import { useReducer } from 'react'


import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, SHOW_ERR_FORM} from '../types'

const ProjectState = props => {

    const projectos = [
        { id: 1, nombre: 'tienda virtual' },
        { id:2, nombre: 'web personal' },
        { id:3, nombre :'intranet' },
        { id:4, nombre : 'ejemplo'}
    ]

    const initialState = {
        
        proyectos : [],
        formulario : false ,
        errorform: false
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

// agregar proyectos
    const addProyect = proyecto => {
        proyecto.id = Math.floor(Math.random() * 10000) + 1;
        // agregar projecto al state
        dispatch({
            type: ADD_PROJECT,
            payload : proyecto
        })
    }
// MOSTAR ERROR CUANDO EL FORM ESTA VACIO 
    const showError = () =>{
        dispatch({
            type: SHOW_ERR_FORM

        })
    }
    return(
        <ProjectContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario: state.formulario,
                errorform : state.errorform,
                showForm,
                getProjects,
                addProyect,
                showError
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
