import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  function showSmallNavbar() {
    let theNavbar = document.getElementById("thenavbar");

    if (theNavbar.classList.contains("responsive")) {
      theNavbar.classList.remove("responsive");
    } else theNavbar.classList.add("responsive");

  }

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > prevScrollY && window.scrollY > 650) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setPrevScrollY(window.scrollY);

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav, prevScrollY]);

  return (
    <>
      <nav
        id="thenavbar"
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
        <ul id="nav-list">
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
        <ul id="repo-button">
          <li>
            <a href="https://github.com/5hoko-k/portfolio">
              <img src="/github-mark-white.png" alt="github-logo" />
            </a>
          </li>
        </ul>
        <i onClick={showSmallNavbar} className="nav-menu-button">
          <Bars3Icon className="nav-menu-button-icon" />
        </i>
      </nav>
    </>
  );
}
export default NavBar;
