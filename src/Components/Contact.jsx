function Contact() {
    return (
        <>
        <h2>Contact</h2>
        
            {/* contact info */}
            <div className="grid">
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.22566732607!2d37.6019603888295!3d-6.780405602899364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185a5dc00cee7437%3A0xf0e8f2f705ae1dd1!2sMorogoro!5e0!3m2!1sen!2stz!4v1701260555907!5m2!1sen!2stz" width="550" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="grid">
                    <hgroup>
                        <h3>Adress</h3>
                        <h5>Some where</h5>
                    </hgroup>
                    <hgroup>
                        <h3>Email</h3>
                        <h5>Some email</h5>
                    </hgroup>
                    <hgroup>
                        <h3>Phone</h3>
                        <h5>Some number</h5>
                    </hgroup>
                </div>
            </div>

            {/* contact form */}
            <article>
                <form netlify name='contact-form' method="POST"> 
                    <div className="grid">
                        <div>
                            <label>
                                Name
                            </label>
                            <input type='text' name='name' placeholder="Your name" required/>
                        </div>
                        <div>
                            <label>
                                Email
                            </label>
                            <input type='text' name='email' placeholder="Email address" required/>
                            <small>We'll never share your email without concent</small>
                        </div>
                    </div>
                        <label>
                            Message
                        </label>
                        <textarea name="text-area"></textarea>
                        <button type='submit'>Submit</button>
                </form>
            </article>
        
        </>
    )
}
export default Contact;