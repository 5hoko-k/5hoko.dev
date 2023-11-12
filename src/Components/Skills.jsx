import { skills } from "../Data";

function Skills() {
    return (
        <>
        <section className="">
            <h2>Skills</h2>
            <div className="container-fluid">
                <hgroup>
                    <h3>Languages</h3>
                    <div className="grid">
                        {skills.languages.map((lan) => {
                        return <h5 key={lan}>{lan}</h5>
                        })}
                    </div>
                </hgroup>
                <hgroup>
                    <h3>Frameworks</h3>
                    <div className="grid">
                        {skills.frameworks.map((framework) => {
                        return <h5 key={framework}>{framework}</h5>
                        })}
                    </div>
                </hgroup>
                <hgroup>
                    <h3>Databases</h3>
                    <div className="grid">
                        {skills.databases.map((database) => {
                        return <h5 key={database}>{database}</h5>
                        })}
                    </div>
                </hgroup>
            </div>


        </section>
        </>
    )
}
export default Skills;