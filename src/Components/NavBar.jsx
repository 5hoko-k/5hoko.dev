import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  function showSmallNavbar() {
    let theNavbar = document.getElementById('thenavbar')
    let ul1 = theNavbar.children[1]
    let ul2 = theNavbar.children[2]

    console.log(theNavbar)

    if (ul1.className === '' || ul2.className === '') {
        ul1.className = 'showSmallNav'
        ul2.className = 'showSmallNav'
    } else {
        ul1.className = ''
        ul2.className = ''
    }

  }

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll Y" + window.scrollY);
      // console.log('page Y Offset' + window.pageYOffset)

      if (window.scrollY > prevScrollY && window.scrollY > 650) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setPrevScrollY(window.scrollY);

      console.log(showNav);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav, prevScrollY]);

  return (
    <>
      <nav id='thenavbar'
        className={
          showNav
            ? "navbar-visible container-fluid navbar"
            : "navbar-hidden container-fluid navbar"
        }
      >
        <ul>
          <li>
            <strong>5HOKO</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#about" className="contrast no-decoration">
              <span className="nav-link">About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="contrast no-decoration">
              <span className="nav-link">Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="contrast no-decoration">
              <span className="nav-link">Projects</span>
            </a>
          </li>
          <li>
            <a href="#testimonials" className="contrast no-decoration">
              <span className="nav-link">Testimonials</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="contrast no-decoration">
              <span className="nav-link">Contact</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/5hoko-k/portfolio"
              className="site-repo-button"
            >
              Site Repo
            </a>
          </li>
        </ul>
        <button onClick={showSmallNavbar} className="nav-menu-button" >
          <Bars3Icon className="nav-menu-button-icon" />
        </button>
      </nav>
    </>
  );
}
export default NavBar;
