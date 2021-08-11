
import ProjectReducer from './ProjectReducer'
import ProjectContext from './ProjectContext'
import { useReducer } from 'react'
import {FORM_PROJECT} from '../types'

const ProjectState = props => {
    const initialState = {
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


    return(
        <ProjectContext.Provider
            value={{
                formulario: state.formulario,
                showForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
