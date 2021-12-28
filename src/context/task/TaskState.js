import { useReducer } from 'react'
import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'

import {
    TASKS_PROJECT
} from '../../types/'

const TaskState = props => {
    const initialState = {
        tasks: [
            {nombre: 'elegir plataforma', estado: true, projectId: 1},
            {nombre: 'elegir colores', estado: false, projectId: 2},
            {nombre: 'maquetado', estado: false, projectId: 3},
            {nombre: 'elegir pago', estado: true, projectId: 4},
            {nombre: 'elegir plataforma', estado: true, projectId: 1},
            {nombre: 'elegir colores', estado: false, projectId: 2},
            {nombre: 'maquetado', estado: false, projectId: 3},
            {nombre: 'elegir plataforma', estado: true, projectId: 4},
            {nombre: 'elegir colores', estado: false, projectId: 2},
            {nombre: 'maquetado', estado: false, projectId: 1},
            {nombre: 'elegir plataforma', estado: true, projectId: 4},
            {nombre: 'elegir colores', estado: false, projectId: 2},
            {nombre: 'maquetado', estado: false, projectId: 3},
        ],
        tasksproject: null
    } 

    // crear dispatch y state 
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    //Fn
    // ontener tareas
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState