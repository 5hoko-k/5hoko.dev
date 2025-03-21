import Particulars from "./Particulars";

function About() {
  return (
    <>
      <section id="about" className="section-height container-2">
        <div className="grid">
          <div className="container-fluid vertical-margin-auto">
            <Particulars />
            <div className="container-fluid">
              <nav>
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/"
                      role="button"
                      className="secondary"
                    >
                      Work with me
                    </a>
                  </li>
                  <li>
                    <a href="#projects" role="button" className="contrast">
                      See my past work
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="my-pfp-image">
            <img src="/5hoko.jpg" alt="Shoko-pfp" />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
