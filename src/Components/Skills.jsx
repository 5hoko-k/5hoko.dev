import { skills } from "../Data";

function Skills() {
  return (
    <>
      <section id="skills" className="section-height">
        <h2>Skills</h2>
        <div className="container-fluid">
          <div>
            <h3 className="center p-bottom">Languages</h3>
            <div className="grid">
              {skills.languages.map((lan) => {
                return (
                  <div className="center">
                    <span data-tooltip={lan.name}>
                      <img
                        src={lan.logo}
                        alt={lan.name}
                        className="logo-icon-style"
                      />
                    </span>

                    {/* <p key={lan.name}>{lan.name}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
          <hgroup>
            <h3 className="center p-bottom">Frameworks</h3>
            <div className="grid">
              {skills.frameworks.map((framework) => {
                return (
                  <div className="center">
                    <span data-tooltip={framework.name}>
                      <img
                        src={framework.logo}
                        alt={framework.name}
                        className="logo-icon-style"
                      />
                    </span>
                    {/* <h5 key={framework.name}>{framework.name}</h5> */}
                  </div>
                );
              })}
            </div>
          </hgroup>
          <hgroup>
            <h3 className="center p-bottom">Databases</h3>
            <div className="grid">
              {skills.databases.map((database) => {
                return (
                  <div className="center">
                    <span data-tooltip={database.name}>
                      <img
                        src={database.logo}
                        alt={database.name}
                        className="logo-icon-style"
                      />
                      {/* <h5 key={database.name}>{database.name}</h5> */}
                    </span>
                  </div>
                );
              })}
            </div>
          </hgroup>
        </div>
      </section>
    </>
  );
}
export default Skills;
