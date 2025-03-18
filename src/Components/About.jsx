import Particulars from './Particulars'

function About() {
    return (
        <>
            <section id='about' className="section">
                <div className='grid'>
                    <div className='container-fluid my-auto'>
                        <Particulars />
                        <div className='container-fluid'>
                            <nav>
                                <ul>
                                    <li><a href='https://www.google.com/' role='button' className='secondary'>Work with me</a></li>
                                    <li><a href='https://www.google.com/' role='button' className='contrast'>See my past work</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                        <div className='my-image'><img src='/5hoko.jpg' alt='Shoko-pfp' /></div>
                </div>
            </section>
        </>
    )
}
export default About;