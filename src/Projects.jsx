import { useState } from 'react'

export default function Projects () {
    const [projects, showProjects] = useState(false)
    return (
        <>
        <div className="buttonWrapper">
            <button onClick ={() => showProjects(!projects) }>Projects</button>
            {projects && <a href="https://adamdparkinson.co.uk/project1/" target="_blank">Gazetteer</a>}
        </div>
        </>
    )
}