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
        <nav className={showNav ? 'navbar-visible container-fluid navbar' : 'navbar-hidden container-fluid navbar'}>
            <ul>
                <li><strong>5HOKO</strong></li>
            </ul>
            <ul>
                <li><a href="#about" className="contrast no-decoration"><span className='nav-link'>About</span></a></li>
                <li><a href="#skills" className="contrast no-decoration"><span className='nav-link'>Skills</span></a></li>
                <li><a href="#projects" className="contrast no-decoration"><span className='nav-link'>Projects</span></a></li>
                <li><a href="#testimonials" className="contrast no-decoration"><span className='nav-link'>Testimonials</span></a></li>
                <li><a href="#contact" className="contrast no-decoration"><span className='nav-link'>Contact</span></a></li>
            </ul>
            <ul>
                <li><a href="https://github.com/5hoko-k/portfolio" className="site-repo-button">Site Repo</a></li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar;