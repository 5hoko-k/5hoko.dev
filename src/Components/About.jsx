import Particulars from './Particulars'

function About() {
    return (
        <>
            <section>
                <Particulars />
                <div className='container-fluid'>
                    <nav>
                        <ul>
                            <li><a href='#' role='button' className='secondary'>Work with me</a></li>
                            <li><a href='#' role='button' className='contrast'>See my past work</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}
export default About;