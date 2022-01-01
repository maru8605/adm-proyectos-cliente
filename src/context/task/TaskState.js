import { useReducer } from 'react'
import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'

import {
    TASKS_PROJECT,
    ADD_TASK,
    ERR_FORM_TASK,
    DELETE_TASK
} from '../../types/'

const TaskState = props => {
    const initialState = {
        tasks: [
            {id:0, nombre: 'elegir plataforma', estado: true, projectId: 1},
            {id:1, nombre: 'elegir colores', estado: false, projectId: 2},
            {id:2, nombre: 'maquetado', estado: false, projectId: 3},
            {id:3, nombre: 'elegir pago', estado: true, projectId: 4},
            {id:4, nombre: 'elegir plataforma', estado: true, projectId: 1},
            {id:5, nombre: 'elegir colores', estado: false, projectId: 2},
            {id:6, nombre: 'maquetado', estado: false, projectId: 3},
            {id:7, nombre: 'elegir plataforma', estado: true, projectId: 4},
            {id:8, nombre: 'elegir colores', estado: false, projectId: 2},
            {id:9, nombre: 'maquetado', estado: false, projectId: 1},
            {id:10, nombre: 'elegir plataforma', estado: true, projectId: 4},
            {id:11, nombre: 'elegir colores', estado: false, projectId: 2},
            {id:12, nombre: 'maquetado', estado: false, projectId: 3},
        ],
        tasksproject: null,
        errortask: false,
    } 

    // crear dispatch y state 
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    //Fn
    // obtener tareas
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }
    // agregar tareas
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const errorFormTask = () =>{
        dispatch({
            type: ERR_FORM_TASK
        })
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask : state.errortask,
                getTasks,
                addTask,
                errorFormTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState