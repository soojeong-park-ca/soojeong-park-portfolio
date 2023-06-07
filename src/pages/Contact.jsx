import ContactForm from "../components/ContactForm";

export default function Contact() {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm("service_9ef2o2i", "template_dcbemia", e.target);
  // }

  return (
    <main className="container contact-container">
      <h1>Contact</h1>

      <ContactForm />
    </main>
  );
}
