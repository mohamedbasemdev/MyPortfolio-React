import { useState } from "react";

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // نفس لوجيك الـ main.js: فاليديشن وبعدين فتح واتساب
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (name.trim() === "") {
      newErrors.name = "Please Enter Your Name";
      valid = false;
    }
    if (email.trim() === "") {
      newErrors.email = "Please Enter Your Email";
      valid = false;
    } else if (!validateEmail(email.trim())) {
      newErrors.email = "Please Enter a Valid Email";
      valid = false;
    }
    if (message.trim() === "") {
      newErrors.message = "Please Enter Your Message";
      valid = false;
    }
    setErrors(newErrors);

    if (valid) {
      let whatsAppMsg = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      let whatsAppUrl = `https://wa.me/201223828067?text=${whatsAppMsg}`;
      window.open(whatsAppUrl, "_blank");
    }
  }

  return (
    <div id="contact" className="contact pt-4 pb-4 ">
      <div className="container reveul">
        <h2 className="special text-center mb-4">
          <p>Contact Me</p>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="error-message" id="name-error">
              {errors.name}
            </span>
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error-message" id="email-error">
              {errors.email}
            </span>
          </div>
          <div className="form-group mb-3">
            <textarea
              id="message"
              placeholder="Your Message"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span className="error-message" id="message-error">
              {errors.message}
            </span>
          </div>
          <div className="buttons text-end">
            <a href="">
              <button className="btn main-btn d-inline-flex align-items-center justify-content-center first work">
                Send Message
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
