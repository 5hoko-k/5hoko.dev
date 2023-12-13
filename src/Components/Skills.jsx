import { skills } from "../Data";

function Skills() {
  return (
    <>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="container-fluid">
          <hgroup>
            <h3>Languages</h3>
            <div className="grid">
              {skills.languages.map((lan) => {
                return (
                    <>
                    <img src={lan.logo} alt={lan.name} />
                    <h5 key={lan.name}>{lan.name}</h5>
                    </>
                )
              })}
            </div>
          </hgroup>
          <hgroup>
            <h3>Frameworks</h3>
            <div className="grid">
              {skills.frameworks.map((framework) => {
                return (
                  <>
                  <img src={framework.logo} alt={framework.name} />
                  <h5 key={framework.name}>{framework.name}</h5>
                  </>
              )
              })}
            </div>
          </hgroup>
          <hgroup>
            <h3>Databases</h3>
            <div className="grid">
              {skills.databases.map((database) => {
                return (
                  <>
                  <img src={database.logo} alt={database.name} />
                  <h5 key={database.name}>{database.name}</h5>
                  </>
              )
              })}
            </div>
          </hgroup>
        </div>
      </section>
    </>
  );
}
export default Skills;
