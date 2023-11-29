function Contact() {
    return (
        <>
        <h2>Contact</h2>
        
            {/* contact info */}
            <div className="grid">
                <div>
                    <iframe></iframe>
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
                <form netlify name='contact-form'> 
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