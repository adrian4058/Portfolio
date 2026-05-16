import React from "react";
import {
  AboutContent,
  AboutEducation,
  AboutMe,
  AboutSection,
  Education,
  Experience,
  Technologies,
} from "./About.elements";
import { educationInfo, experienceInfo } from "..";
import SliderComponent from "../Slider/SliderComponent";
import { FaBriefcase, FaCode, FaWordpress, FaUsers } from "react-icons/fa";

const About = () => {
  const getExperienceIcon = (company) => {
    switch (company) {
      case "EasyLife Marketing":
        return <FaWordpress />;
      case "Mi Vete":
        return <FaCode />;
      case "iCreativa Digital":
        return <FaUsers />;
      case "Alas Empresa Junior":
        return <FaBriefcase />;
      default:
        return <FaBriefcase />;
    }
  };

  return (
    <AboutSection>
      <AboutContent>
        <AboutMe id="about" data-aos="fade-up">
          <h2>
            Acerca de mí
            <span>.</span>
          </h2>
          <p>
            La curiosidad me llevó desde chico a desarmar dispositivos electrónicos, explorar circuitos y entender cómo
            funcionan las cosas. Esa misma curiosidad me encontró frente a mis primeros programas en PLC durante mi
            formación como Técnico Electromecánico, marcando el inicio de mi camino en el desarrollo de software.
          </p>
          <br />
          <p>
            Hoy me especializo en <span>sistemas conversacionales con IA</span> — pipelines que integran modelos de
            lenguaje, automatización y canales reales como WhatsApp, Instagram y Messenger. Como co-fundador de{" "}
            <span>Pierini IA</span>, lideré la construcción de una plataforma SaaS multi-tenant con 10 clientes activos
            que procesa ~10.000 mensajes por mes. También he trabajado en proyectos internacionales (Hong Kong, España,
            Colombia), siempre con el mismo enfoque: entender el negocio antes de escribir código y construir productos
            con impacto concreto.
          </p>
        </AboutMe>
        <AboutEducation>
          <Experience data-aos="fade-up" data-aos-delay="100">
            <h3>Experiencia profesional:</h3>
            <div>
              <ul>
                {experienceInfo.map((experience, index) => (
                  <li key={index} data-aos="fade-left" data-aos-delay={200 + index * 150}>
                    <div className="experience-header">
                      {getExperienceIcon(experience.company)}
                      <h4 className="experience-title">{experience.position}</h4>
                    </div>
                    <span>
                      <u>{experience.company}</u>
                      <div className="experience-date">{experience.since}</div>
                      {experience.location && <div className="experience-location">{experience.location}</div>}
                      <p>{experience.detail}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Experience>
          <Education data-aos="fade-up" data-aos-delay="300">
            <h3>Educación:</h3>
            <div>
              <ul>
                {educationInfo.map((education, index) => (
                  <li key={index} data-aos="fade-right" data-aos-delay={400 + index * 150}>
                    {education.profession}
                    <span>
                      {education.institution}
                      <span>{education.since}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Education>
          <Technologies data-aos="fade-up" data-aos-delay="500">
            <h3>Tecnologías: </h3>
            <SliderComponent />
          </Technologies>
        </AboutEducation>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
