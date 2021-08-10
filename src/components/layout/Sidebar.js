import React from 'react'
import NewProjects from '../projects/NewProjects'
import ProjectsList from '../projects/ProjectsList'

const Sidebar = () => {
    return (
        <aside>
            <h1>Adm<span>Task</span></h1>
                <NewProjects/>

            <div className='proyectos'>
                <h2>Tus proyectos</h2>

                <ProjectsList/>
            </div>
        </aside>
    )
}

export default Sidebar
