import { projects } from "../Data";

function Projects() {
    return (
        <>
        <section id='projects' className="section">
            
            <h1>Projects</h1>
            <div className="grid">
                {projects.map(({ title, description, link, image }) => {
                    return (
                        <article key={title}>
                            Project Image
                            <footer>
                                <h5>{title}</h5>
                                <p>{description}</p>
                            </footer>
                        </article>
                    )
                })}
            </div>

        </section>
        </>
    )
}
export default Projects;