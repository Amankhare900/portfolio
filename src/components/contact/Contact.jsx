import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6unk5do",
        "template_q331uub",
        form.current,
        "ObjGa6oRTEQnceOre"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>amankhare900@gmail.com</h5>
            <a href="mailto:amankhare900@gamil.com" target="_black">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Aman Deep Khare</h5>
            <a href="https://m.me/amam.khare.5/" target="_black">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GrLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Aman Deep Khare</h5>
            <a
              href="https://lnk.your-hyperise.com/aman-khare-9b3a3b166/"
              target="_black"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
