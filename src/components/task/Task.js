import React,{useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';
import TaskContext from '../../context/task/TaskContext';

const Task = ({tarea}) => {
    
    const projectsContext = useContext(ProjectContext);
    const {proyecto} = projectsContext; 

    const tasksContext = useContext(TaskContext)
    const {deleteTask, getTasks} = tasksContext

    const [currentProject] = proyecto
    //Fn para eliminar x btn 
    const taskDelete = id =>{
        deleteTask(id)
        getTasks(currentProject.id)
    }
    return (
        <li className='tarea sombra'>
            <p> {tarea.nombre}</p>

            <div className='tarea-estado'>
              {tarea.estado ? (
                    <button
                        type='button'
                        className='completo'
                    >Completo</button>
              ) : (
                    <button
                    type='button'
                    className='incompleto'
                    >Incompleto</button>
              )}  
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-edit'
                >Editar</button>
                <button
                    type='button'
                    className='btn incompleto'
                    onClick={() => taskDelete(tarea.id)}
                >Eliminar</button>
            </div>
             
        </li>
    )
}

export default Task
