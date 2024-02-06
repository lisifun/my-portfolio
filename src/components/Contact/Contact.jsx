import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">Contact Me</div>
      <div className="contact-paragraph">
        {" "}
        Feel free to contact me by submitting the form below and I will get back
        to you as soon as possible
      </div>
      <div className="contact-form">
        <div className="input">
          <label className="name-label">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="name-input"
          ></input>
        </div>
        <div className="input">
          <label className="email-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          ></input>
        </div>
        <div className="input">
          <label className="message-label">Message</label>
          <textarea
            type="text"
            placeholder="Enter your message"
            className="message-input"
            cols="10"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="button-submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
