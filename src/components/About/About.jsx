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

const About = () => {
  return (
    <AboutSection>
      <AboutContent>
        <AboutMe id="about">
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
            Actualmente, combino mis estudios en la Tecnicatura Informática aplicada al Diseño Multimedia y de Sitios
            web de la UNL con un trabajo remoto a tiempo parcial para <u>Smart Air</u> utilizando{" "}
            <span>TypeScript, Django, Next JS y MUI Components</span>. Desde que me sumergí en el mundo de la tecnología, he
            descubierto que las herramientas y tecnologías que utilizamos están en constante evolución. Esto me
            entusiasma a seguir aprendiendo cada día para mantenerme actualizado y aprovechar al máximo las nuevas
            oportunidades que surgen.
          </p>
        </AboutMe>
        <AboutEducation>
          <Experience>
            <h3>Experiencia profesional:</h3>
            <div>
              <ul>
                {experienceInfo.map((experience, index) => (
                  <li key={index}>
                    {experience.position}
                    <span>
                      <u>{experience.company}</u>
                      <p>{experience.detail}</p>
                      <span>{experience.since}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Experience>
          <Education>
            <h3>Educación:</h3>
            <div>
              <ul>
                {educationInfo.map((education, index) => (
                  <li key={index}>
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
          <Technologies>
            <h3>Tecnologías: </h3>
            <SliderComponent />
          </Technologies>
        </AboutEducation>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
