import React from 'react'
import NewProjects from '../projects/NewProjects'
const Sidebar = () => {
    return (
        <aside>
            <h1>Adm<span>Task</span></h1>
                <NewProjects/>
            <div className='proyectos'>
                <h2>Tus proyectos</h2>
            </div>
        </aside>
    )
}

export default Sidebar
