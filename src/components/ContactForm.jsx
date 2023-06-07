import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);

  const form = useRef(null);

  const formSubmitErrorEl = (
    <>
      <div
        className={`popup-overlay--${popupOpen}`}
        onClick={() => setPopupOpen(false)}
      ></div>
      <div className="form-submit--result form-submit--error">
        <button
          className="form-submit-close"
          onClick={() => setPopupOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="form-submit-content">
          <div className="form-submit-icon">
            <i className="fa-regular fa-thumbs-down"></i>
          </div>
          <div className="form-submit-title">Something went wrong!</div>
          <p className="form-submit-message">
            Please contact me via my social links or send me an email at
            soojeong.park.ca@gmail.com
          </p>
        </div>
      </div>
    </>
  );

  const formSubmitSuccessEl = (
    <>
      <div
        className={`popup-overlay--${popupOpen}`}
        onClick={() => setPopupOpen(false)}
      ></div>
      <div className="form-submit--result  form-submit--success">
        <button
          className="form-submit-close"
          onClick={() => setPopupOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="form-submit-content">
          <div>
            <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <div className="form-submit-title">Message Sent</div>
          <p className="form-submit-message">
            Your message has been sent.
            <br />I will get back to you as soon as possible!
          </p>
        </div>
      </div>
    </>
  );

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_JS_USER
      )
      .then(
        response => {
          console.log(response.status, response.text);
          if (response.status === 200) {
            setError(false);
            setFormSubmitted(true);
            setPopupOpen(true);
          }
        },
        error => {
          console.log(error);
          setError(true);
          setFormSubmitted(false);
          setPopupOpen(true);
        }
      );
  };

  console.log(error, formSubmitted);

  return (
    <>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-form__name">
          <div className="contact-form__group">
            <input
              required
              id="first-name"
              name="first-name"
              type="text"
              placeholder="First Name *"
            />
          </div>

          <div className="contact-form__group">
            <input
              required
              id="last-name"
              name="last-name"
              type="text"
              placeholder="Last Name *"
            />
          </div>
        </div>

        <div className="contact-form__contact">
          <div className="contact-form__group">
            <input
              required
              id="email"
              name="user-email"
              type="email"
              placeholder="Email *"
            />
          </div>
        </div>

        <div className="contact-form__subject">
          <div className="contact-form__group">
            <input
              required
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject *"
            />
          </div>
        </div>

        <div className="contact-form__textarea">
          <textarea
            required
            id="message"
            name="message"
            placeholder="Message *"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button
          className="btn--link"
          type="submit"
          onClick={window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          Send message
        </button>
      </form>

      {error && popupOpen && formSubmitErrorEl}
      {formSubmitted && popupOpen && formSubmitSuccessEl}
    </>
  );
}
