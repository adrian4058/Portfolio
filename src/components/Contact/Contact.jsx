import React, { useRef, useState } from "react";
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
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import contactImage from "../../assets/contact.svg";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const notifySuccess = () => toast.success("¡Redirigiendo a WhatsApp!");

  const clearForm = () => {
    form.current.reset();
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");

    const whatsappMessage = `Hola, soy ${userName}\nEmail: ${userEmail}\n\nMensaje: ${message}`;
    const whatsappURL = `https://wa.me/5493493665512?text=${encodeURIComponent(whatsappMessage)}`;

    notifySuccess();
    clearForm();
    setIsSending(false);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 500);
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
          <FormContent ref={form} onSubmit={sendWhatsApp}>
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
              <a href="tel:+5493493665512">
                <BsTelephone /> +54 9 3493 665512
              </a>
              <a href="https://wa.me/5493493665512" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
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
