import React, {useState, useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';

const NewProjects = () => {

    const projectContext = useContext(ProjectContext);
    const {formulario, showForm} = projectContext

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
    const onClick = ()=> {
        showForm()
    }
    return (
        <>
          <button
            type='button'
            className='btn btn-block btn-primario'
            onClick={onClick}
          >Nuevo Proyecto</button>  

          { formulario ? 
            (
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

            ) : null  }
        </>
    )
}

export default NewProjects
