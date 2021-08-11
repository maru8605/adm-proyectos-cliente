import React, {useState, useContext} from 'react'
import ProjectContext from '../../context/ProjectContext';

const NewProjects = () => {

    const projectContext = useContext(ProjectContext);
    const {formulario,errorform , showForm, addProyect , showError} = projectContext

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
        if(nombre.length === 0) {
            showError()
            return
        }; 
        // add to state
        addProyect(project)
        // reset form
        saveProject({
            nombre: ''
        })

    }
    const onClickProject = ()=> {
        showForm()
    }
    return (
        <>
          <button
            type='button'
            className='btn btn-block btn-primario'
            onClick={onClickProject}
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

            {errorform ? <p className='error mensaje'> El Nombre del proyecto es obligatorio.</p> : null}
        </>
    )
}

export default NewProjects
