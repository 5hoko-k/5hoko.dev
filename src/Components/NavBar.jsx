function NavBar() {
    return (
        <>
        <nav>
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