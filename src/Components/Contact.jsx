function Contact() {
    return (
        <>
        <h2>Contact</h2>
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
        <form>
            <label>
                Name
            </label>
            <input />
            <label>
                Email
            </label>
            <input />
            <label>
                Message
            </label>
            <input />

        </form>
        
        </>
    )
}
export default Contact;