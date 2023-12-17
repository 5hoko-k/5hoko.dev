import { skills } from "../Data";

function Skills() {
  return (
    <>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="container-fluid">
          <div>
            <h3 className="center">Languages</h3>
            <div className="grid">
              {skills.languages.map((lan) => {
                return (
                    <div className="center">
                    <img src={lan.logo} alt={lan.name} className="logo-icon-style"/>
                    {/* <p key={lan.name}>{lan.name}</p> */}
                    </div>
                )
              })}
            </div>
          </div>
          <hgroup>
            <h3 className="center">Frameworks</h3>
            <div className="grid">
              {skills.frameworks.map((framework) => {
                return (
                  <div className="center">
                  <img src={framework.logo} alt={framework.name} className="logo-icon-style"/>
                  {/* <h5 key={framework.name}>{framework.name}</h5> */}
                  </div>
              )
              })}
            </div>
          </hgroup>
          <hgroup>
            <h3 className="center">Databases</h3>
            <div className="grid">
              {skills.databases.map((database) => {
                return (
                  <div className="center">
                  <img src={database.logo} alt={database.name} className="logo-icon-style"/>
                  {/* <h5 key={database.name}>{database.name}</h5> */}
                  </div>
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
