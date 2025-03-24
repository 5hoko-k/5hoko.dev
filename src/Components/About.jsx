import Particulars from "./Particulars";

function About() {
  return (
    <>
      <section id="about" className="container-2">
        <div className="header-flex">
          <div className="flex-item">
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
          <div className="my-pfp-image flex-item">
            <img className="image-shape" src="/5hoko.jpg" alt="Shoko-pfp" />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
