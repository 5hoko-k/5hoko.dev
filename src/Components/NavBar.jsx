import React, { useEffect, useState } from 'react';

function NavBar() {
    const [showNav, setShowNav] = useState(true)
    const [prevScrollY, setPrevScrollY] = useState(0)
    
    useEffect(() => {
        const handleScroll = () => {
            console.log('scroll Y' + window.scrollY)
            // console.log('page Y Offset' + window.pageYOffset)
    
            if (window.scrollY > prevScrollY && window.scrollY > 650){
                setShowNav(false)
            }else {
                setShowNav(true)
            }
            setPrevScrollY(window.scrollY)
    
            console.log(showNav)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [showNav, prevScrollY]);

    return (
        <>
        <nav className={showNav ? 'sticky-navbar container-fluid navbar' : 'navbar-hidden container-fluid navbar'}>
            <ul>
                <li><strong>5HOKO</strong></li>
            </ul>
            <ul>
                <li><a href="#about" className="contrast nav-link">About</a></li>
                <li><a href="#skills" className="contrast nav-link">Skills</a></li>
                <li><a href="#projects" className="contrast nav-link">Projects</a></li>
                <li><a href="#testimonials" className="contrast nav-link">Testimonials</a></li>
                <li><a href="#contact" className="contrast nav-link">Contact</a></li>
            </ul>
            <ul>
                <li><a href="https://github.com/5hoko-k/portfolio" className="site-repo-button">Site Repo</a></li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar;