import React, {useState, useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';
import TaskContext from '../../context/task/TaskContext';

const FormTask = () => {

    const projectsContext = useContext(ProjectContext);
    const {proyecto} = projectsContext; 

    const tasksContext = useContext(TaskContext)
    const {errortask, addTask, errorFormTask, getTasks} = tasksContext

    const [task, saveTask] = useState({
        nombre:'' 
    })
    const {nombre} = task

    // Si no hay proyecto seleccionado 
    if(!proyecto) return null

    // Array destructuring para otener el proyecto
    const [currentProject] = proyecto

    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        // validar
        if(nombre.trim() === ''){
            errorFormTask()
            return
        }

        //agregar tarea al state de tarea
        task.projectId = currentProject.id
        task.estado= false
        addTask(task)

        //obtener tareas filtradas
        getTasks(currentProject.id)

        //reiniciar el form
        saveTask({
            nombre:''
        })
    }
    return (
        <div className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        name='nombre'
                        placeholder='Nombre de tarea'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div >

                <div className='contenedor-input'>
                    <input
                        type='submit'
                        value='Agregar Tarea'
                        className='btn btn-block btn-primario btn-submit'
                    />
                </div>
            </form>
            {errortask ? <p className='mensaje error'>En nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}

export default FormTask
