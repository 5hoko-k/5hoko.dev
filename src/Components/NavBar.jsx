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
        <nav className={showNav ? 'sticky-navbar container-fluid' : 'navbar-hidden container-fluid'}>
            <ul>
                <li><strong>5HOKO</strong></li>
            </ul>
            <ul>
                <li><a href="#about" className="contrast">About</a></li>
                <li><a href="#skills" className="contrast">Skills</a></li>
                <li><a href="#projects" className="contrast">Projects</a></li>
                <li><a href="#testimonials" className="contrast">Testimonials</a></li>
                <li><a href="#contact" className="contrast">Contact</a></li>
            </ul>
            <ul>
                <li><a href="#contact" role="button" className="fund-me-button">fund me</a></li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar;