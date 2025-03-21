import { useState } from "react";

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  };
  return (
    <>
      <section id="contact" className="section">
        <h2>Contact</h2>

        {/* contact info */}

        <div className="grid">
          <hgroup>
            <h3>Adress</h3>
            <h5>Morogoro, Tanzania</h5>
            <h5>Modeco B, Mazimbu</h5>
          </hgroup>
          <hgroup>
            <h3>Email</h3>
            <h5>shokokimera@gmail.com</h5>
          </hgroup>
          <hgroup>
            <h3>Phone</h3>
            <h5>+255-743-519-510</h5>
          </hgroup>
        </div>

        {/* contact form */}
        <article>
          <form netlify name="contact-form" onSubmit={handleSubmit}>
            <div className="grid">
              <div>
                <input type="hidden" name="form-name" value="contact-form" />
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small>We'll never share your email without concent</small>
              </div>
            </div>
            <label>Message</label>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </article>
        <button>test button</button>
      </section>
    </>
  );
}
export default Contact;
