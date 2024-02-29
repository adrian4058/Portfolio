import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
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
import contactImage from "../../assets/contact.svg";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const notifySuccess = () => toast.success("¡Mensaje enviado con éxito!");
  const notifyError = () => toast.error("Error al enviar el mensaje.");

  const clearForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_prwagzq", "template_h5h6iyp", form.current, {
        publicKey: "UUeH-7dFWC_0DwtZK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notifySuccess();
          clearForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
          notifyError();
        }
      )
      .finally(() => {
        setIsSending(false);
      });
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
              <input required type="text" name="user_name" placeholder="Escribe tu nombre" />
            </FormInputLabel>
            <FormInputLabel>
              <label>Tu correo:</label>
              <input required type="email" name="user_email" placeholder="Escribe tu correo" />
            </FormInputLabel>
            <FormInputLabel>
              <label>Tu Mensaje:</label>
              <textarea required name="message" placeholder="Escribe tu mensaje aquí" />
            </FormInputLabel>
            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </FormContent>
          <ContactPersonalInfo>
            <img src={contactImage} alt="Contact" />
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
      <Toaster />
    </ContactSection>
  );
};

export default Contact;
