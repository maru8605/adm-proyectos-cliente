import React, {useState} from 'react'

const NewProjects = () => {

    const [project, saveProject] = useState({
        nombre: ''
    })
    const {nombre} = project;
// lee el imput
    const onChangeProject = e =>{
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }
// al dar submit
    const onSubmitProject = e => {
        e.preventDefault();
        // validation 

        // add to state

        // reset form

    }

    return (
        <>
          <button
            type='button'
            className='btn btn-block btn-primario'
          >Nuevo Proyecto</button>  

          <form
           className='formulario-nuevo-proyecto'
           onSubmit={onSubmitProject}
           >
            <input
                type='text'
                name='nombre'
                className='input-text'
                placeholder='Nombre de Proyecto'
                onChange={onChangeProject}
                value={nombre}
            />
            <input
                type='submit'
                className='btn btn-block btn-primario'
                placeholder='Agregar Proyecto'
            />
          </form>
        </>
    )
}

export default NewProjects
