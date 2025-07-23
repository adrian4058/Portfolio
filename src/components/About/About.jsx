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
            Por curiosidad a prueba y error desde chico me llevó a explorar la electrónica, electricidad e informática.
            Aprendí resolviendo problemas en dispositivos electrónicos y me apasioné por todo lo que tenga que ver con
            una computadora de por medio. Durante mi formación como Técnico Electromecánico, descubrí mi interés por la
            programación al trabajar con Controladores Lógicos Programables (PLC) en la materia de Automatización. Este
            momento marcó el inicio de mi camino en la programación.
          </p>
          <br />
          <p>
            Combino mis estudios en la Tecnicatura Informática aplicada al Diseño Multimedia y de Sitios Web de la UNL
            con la experiencia adquirida durante mi trabajo en <u>EasyLife Marketing</u>, donde participo en reuniones
            diarias bajo la metodología ágil Scrum y trabajo diariamente con <span>WordPress, HubSpot y CSS</span>.
            Desde que me sumergí en el mundo de la tecnología, descubrí que las herramientas y tecnologías que
            utilizamos están en constante evolución. Esto me motiva a seguir aprendiendo cada día para mantenerme
            actualizado y aprovechar al máximo las nuevas oportunidades.
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
                      {experience.location && (
                        <div className="experience-location">{experience.location}</div>
                      )}
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
