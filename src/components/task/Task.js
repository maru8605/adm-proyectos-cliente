import React from 'react'

const Task = ({tarea}) => {
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
                >Eliminar</button>
            </div>
             
        </li>
    )
}

export default Task
