export default function Contact() {
  return (
    <main className="container contact-container">
      <h1>Contact</h1>

      <form className="contact-form" action="">
        <div className="contact-form__name">
          <div className="contact-form__group">
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="First Name *"
            />
          </div>
          <div className="contact-form__group">
            <input id="last-name" type="text" placeholder="Last Name *" />
          </div>
        </div>

        <div className="contact-form__contact">
          <div className="contact-form__group">
            <input
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
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject *"
            />
          </div>
        </div>

        <div className="contact-form__textarea">
          <textarea
            id="message"
            name="message"
            placeholder="Message *"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="btn--link" type="submit">
          Send message
        </button>
      </form>
    </main>
  );
}
