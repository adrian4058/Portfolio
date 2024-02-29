import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContent,
  ContactData,
  ContactPersonalInfo,
  ContactSection,
  ContactTitle,
  FormContent,
  FormInputLabel,
  ContactSocialMedia,
  FormAndContactInfo,
} from "./Contact.elements";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_prwagzq", "template_h5h6iyp", form.current, {
        publicKey: "UUeH-7dFWC_0DwtZK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <ContactSection id="contact">
      <ContactContent>
        <ContactTitle>
          <h2>
            Contacto<span>.</span>
          </h2>
          <p>Si querés saber más sobre mí, enviame un mensaje 😁.</p>
        </ContactTitle>
        <FormAndContactInfo>
          <FormContent ref={form} onSubmit={sendEmail}>
            <FormInputLabel>
              <label>Tu nombre:</label>
              <input type="text" name="user_name" placeholder="Escribe tu nombre" />
            </FormInputLabel>
            <FormInputLabel>
              <label>Tu correo:</label>
              <input type="email" name="user_email" placeholder="Escribe tu correo" />
            </FormInputLabel>
            <FormInputLabel>
              <label>Tu Mensaje:</label>
              <textarea name="message" placeholder="Escribe tu mensaje aquí" />
            </FormInputLabel>
            <button type="submit" value="Send">
              Enviar
            </button>
          </FormContent>
          <ContactPersonalInfo>
            <img src="/src/assets/contact.svg"></img>
            <ContactData>
              <a href="mailto:adrian_2016_@outlook.es">
                <MdOutlineEmail /> adrian_2016_@outlook.es
              </a>
              <p>
                <CiLocationOn /> Sunchales - Santa Fe, 🇦🇷
              </p>
            </ContactData>
            <ContactSocialMedia>
              <a href="https://github.com/adrian4058/" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/adrian4058" target="_blank">
                <FaLinkedin />
              </a>
            </ContactSocialMedia>
          </ContactPersonalInfo>
        </FormAndContactInfo>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
