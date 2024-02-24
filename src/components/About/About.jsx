import React from "react";
import { AboutContent, AboutEducation, AboutMe, AboutSection, Education, Technologies } from "./About.elements";

const About = () => {
  return (
    <AboutSection>
      <AboutContent >
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
            web de la UNL con un trabajo remoto a tiempo parcial para Escrito Space utilizando{" "}
            <span>Django, Next JS y Ant Design</span>. Desde que me sumergí en el mundo de la tecnología, he descubierto
            que las herramientas y tecnologías que utilizamos están en constante evolución. Esto me entusiasma a seguir
            aprendiendo cada día para mantenerme actualizado y aprovechar al máximo las nuevas oportunidades que surgen.
          </p>
        </AboutMe>
        <AboutEducation>
          <Education>
            <h3>Educación:</h3>
            <div>
              <ul>
                <li>
                  Tecnico Electromecánico
                  <span>
                    Escuela Educacion Tecnico Profesional 279<span>2013 - 2021</span>
                  </span>
                </li>
                <li>
                  Full Stack Web Developer
                  <span>
                    Soy Henry<span>2022-2023</span>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  Ingeniería en informática
                  <span>
                    UNL<span>2022-2024</span>
                  </span>
                </li>
                <li>
                  Tecnicatura Informática aplicada al Diseño Multimedia y de Sitios web
                  <span>
                    UNL<span>2024 - actualidad</span>
                  </span>
                </li>
              </ul>
            </div>
          </Education>
          <Technologies>
            <h3></h3>
          </Technologies>
        </AboutEducation>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
