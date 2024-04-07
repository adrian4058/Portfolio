export { default as Cover } from "./Cover/Cover";
export { default as Themes } from "./Theme/Themes";
import booksproject from "../assets/booksproject.png";
import gestoria from "../assets/gestoria.png";
import pokeproject from "../assets/pokeproject.png";

export const educationInfo = [
  {
    profession: "Técnico Electromecánico",
    institution: "Escuela Educacion Tecnico Profesional 279",
    since: "2013 - 2021",
  },
  {
    profession: "Full Stack Web Developer",
    institution: "Soy Henry",
    since: "2022-2023",
  },
  {
    profession: "Ingeniería en informática",
    institution: "UNL",
    since: "2022-2024",
  },
  {
    profession: "Tecnicatura Informática aplicada al Diseño Multimedia y de Sitios web",
    institution: "UNL",
    since: "2024 - Presente",
  },
];

export const experienceInfo = [
  {
    position: "Desarrollador Full-Stack - Tiempo Parcial",
    since: "Feb. 2024 - Presente",
    company: "Smart Air",
    detail: "Colaboro en el desarrollo Full Stack utilizando Next.js, Python con Django y componentes de MUI en el entorno de Smart Air."
  },
  {
    position: "Desarrollador Full-Stack - Tiempo Parcial",
    since: "Oct. 2023 - Mar. 2024",
    company: "Escrito Space",
    detail:
      "Colaboración estrecha en equipo de dos personas, utilizando Next.js, Python con Django y servicios de AWS. Responsable del desarrollo de la plataforma web, implementando nuevas funcionalidades y mejoras. Reuniones semanales de seguimiento para revisar progreso y coordinar esfuerzos.",
  },
  {
    position: "Desarrollador Front-End - Contrato temporal",
    since: "Ago. 23 - Sep. 23",
    company: "iCreativa Digital",
    detail:
      "Parte del equipo de desarrollo, enfocado en diseño de aplicación web con React, CSS y GSAP. Participación en reuniones diarias para revisar progreso y superar desafíos.",
  },
  {
    position: "Desarrollador Front-End",
    since: "May. 23 - Feb. 2024",
    company: "Alas Empresa Junior",
    detail:
      "Trabajo en organización sin fines de lucro en TIC, brindando soluciones informáticas, soporte web y gestión de correo.",
  },
];

export const projectsInfo = [
  {
    title: "BooksStore",
    detail: "App bajo metodología SCRUM, construida con Node.js, React.js y CSS",
    linkcode: "https://github.com/adrian4058/HenryBooks",
    linkdemo:
      "https://www.linkedin.com/posts/adrian4058_react-javascript-node-activity-7087177762955784193-3w1E?utm_source=share&utm_medium=member_desktop",
    img: booksproject,
  },
  {
    title: "Gestoría Adriana",
    detail: "Single Page Application hecha de manera freelance, construida con TypesSript, React y Tailwind",
    linkcode: "https://github.com/adrian4058/Gestoria",
    linkdemo:
      "https://www.linkedin.com/posts/adrian4058_freelance-softwaredelevoper-netlify-activity-7092197262260396032-VQVB?utm_source=share&utm_medium=member_desktop",
    img: gestoria,
  },
  {
    title: "Pokemon App",
    detail: "Single Page Application, construida con Node.js, React.js y CSS",
    linkcode: "https://github.com/adrian4058/ProyectoPokemon",
    linkdemo:
      "https://www.linkedin.com/posts/adrian4058_javascript-react-redux-activity-7047231593916043264-phlf?utm_source=share&utm_medium=member_desktop",
    img: pokeproject,
  },
];
