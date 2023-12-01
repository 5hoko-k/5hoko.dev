import Particulars from './Particulars'

function About() {
    return (
        <>
            <section id='about'>
                <div className='grid'>
                    <div className='container-fluid'>
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
                    
                    <figure>
                        <img src="/5hoko.jpg" alt='Shoko' />
                    </figure>
                </div>
            </section>
        </>
    )
}
export default About;