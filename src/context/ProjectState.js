
import ProjectReducer from './ProjectReducer'
import ProjectContext from './ProjectContext'
import { useReducer } from 'react'

const ProjectState = props => {
    const initialState = {
        formulario : false 
    }

    // Dispatch para ejecutar las acciones 
    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    // funciones para el crud
    return(
        <ProjectContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
