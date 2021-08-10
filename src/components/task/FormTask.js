import React, {useState} from 'react'

const FormTask = () => {

    const [task, newTask] = useState({
        nombre:'' 
    })
    const {nombre} = task

    const onChangeTask = e => {
        newTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitTask = e =>{
        e.preventDefault()
    }
    return (
        <div className='formulario'>
            <form onSubmit={onSubmitTask}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        name='nombre'
                        placeholder='Nombre de tarea'
                        value={nombre}
                        onChange={onChangeTask}
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
        </div>
    )
}

export default FormTask
