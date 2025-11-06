export { default as Cover } from "./Cover/Cover";
export { default as Themes } from "./Theme/Themes";
import booksproject from "../assets/booksproject.png";
import gestoria from "../assets/gestoria.png";
import pokeproject from "../assets/pokeproject.png";
import mivete from "../assets/mivete.png";
import muchiutti from "../assets/muchiutti.png";
import n8nbot from "../assets/n8nbot.png"; // Placeholder - reemplazar con imagen real

export const educationInfo = [
  {
    profession: "Técnico Electromecánico",
    institution: "Escuela Educacion Tecnico Profesional 279",
    since: "2013 - 2021",
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
    position: "Desarrollador Web",
    since: "Oct. 2024 - Actualidad",
    company: "EasyLife Marketing",
    location: "Canarias, España • En remoto",
    detail:
      "Trabajo en el desarrollo y mantenimiento de sitios web utilizando WordPress, HubSpot y CSS. Participo en reuniones diarias bajo la metodología ágil Scrum, colaborando en la optimización de estrategias de marketing digital y automatización de procesos.",
  },
  {
    position: "Desarrollador Full-Stack",
    since: "Mar. 2024 - Ago. 2024",
    company: "Smart Air",
    location: "Hong Kong SAR, China • En remoto",
    detail:
      "Colaboré en el desarrollo Full Stack utilizando Next.js, Python con Django y componentes de MUI en el entorno de Smart Air. Utilicé la plataforma Qinping para el monitoreo de calidad del aire y las aplicaciones de eWeLink y SmartThings para el control remoto de los dispositivos. Además, implementé un sistema de geolocalización y mapeo interactivo para visualizar la ubicación de los purificadores en tiempo real, entre otros.",
  },
  {
    position: "Desarrollador Full-Stack",
    since: "Oct. 2023 - Mar. 2024",
    company: "Escrito Space",
    location: "En remoto",
    detail:
      "Colaboración estrecha en equipo de dos personas, utilizando Next.js, Python con Django, ANT Design para los estilos y servicios de AWS. Responsable del desarrollo de la plataforma web, implementando nuevas funcionalidades y mejoras. Reuniones semanales de seguimiento para revisar progreso y coordinar esfuerzos.",
  },
  {
    position: "Desarrollador Front-End",
    since: "Ago. 2023 - Oct. 2023",
    company: "iCreativa Digital",
    location: "Bogotá, Colombia • En remoto",
    detail:
      "Parte del equipo de desarrollo, enfocado en diseño de aplicación web con React, CSS y GSAP. Participación en reuniones diarias para revisar progreso y superar desafíos.",
  },
  {
    position: "Desarrollador de Software",
    since: "May. 2023 - Feb. 2024",
    company: "Alas Empresa Junior",
    location: "Santa Fe, Argentina • En remoto",
    detail:
      "Trabajo en organización sin fines de lucro en TIC, brindando soluciones informáticas, soporte web y gestión de correo.",
  },
];

export const projectsInfo = [
  {
    title: "Bot WhatsApp con n8n + IA",
    detail:
      "Sistema de automatización inteligente para gestión de hamburgueserías usando n8n. Bot conversacional de WhatsApp que procesa pedidos, reservas y consultas automáticamente. Integrado con IA para respuestas naturales y backend robusto multi-tenant. Proyecto en desarrollo activo.",
    technologies: ["n8n", "IA", "WhatsApp Business API", "Spring Boot", "PostgreSQL", "WebSocket", "JWT"],
    category: "En Desarrollo",
    linkcode: null,
    linkdemo: "https://drive.google.com/file/d/1QCL9yDUWUdp0xZGWiUGwwNYZVsPnYvhP/view?usp=sharing",
    img: n8nbot,
    features: [
      "Bot conversacional con IA integrada",
      "Automatización de pedidos via WhatsApp",
      "Sistema de reservas inteligente",
      "Asignación automática de repartidores",
      "Backend multi-tenant con Spring Boot",
      "Notificaciones en tiempo real (WebSocket)",
      "Sistema de planes de suscripción",
      "Integración con webhooks e impresoras",
    ],
  },
  {
    title: "Muchiutti Representaciones",
    detail:
      "SPA corporativa para mostrar servicios de la empresa, descargar catálogos en PDF y facilitar el contacto. Incluye formulario de contacto con EmailJS, popup sticky para WhatsApp y generación de código QR.",
    technologies: ["React", "Bootstrap", "EmailJS", "React Slick"],
    category: "Freelance",
    linkcode: null,
    linkdemo: "https://muchiutti-representaciones.com",
    img: muchiutti,
    features: [
      "Formulario de contacto funcional",
      "Popup sticky para WhatsApp",
      "Descarga de catálogos PDF",
      "Código QR para acceso rápido",
    ],
  },
  {
    title: "Mi Vete",
    detail:
      "Sistema de recompensas para veterinarias con gestión de estado moderna usando Zustand. Permite a clientes acumular puntos (10% del total en compras) convertibles en descuentos para consultas. Registro manual o desde panel admin con notificaciones SMS integradas. Actualmente cuenta con 500+ clientes registrados y procesa 300+ interacciones mensuales.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MUI", "Twilio", "Zustand"],
    category: "Freelance",
    linkcode: null,
    linkdemo:
      "https://www.linkedin.com/posts/adrian4058_buenas-gente-como-andan-hoy-les-quiero-activity-7233837580595720192-7qtg?utm_source=share&utm_medium=member_desktop",
    img: mivete,
    features: [
      "Sistema de puntos y recompensas",
      "Panel administrativo completo",
      "Gestión de estado con Zustand",
      "Notificaciones SMS con Twilio",
      "500+ clientes activos registrados",
      "300+ interacciones mensuales",
      "Interfaz amigable para adultos mayores",
    ],
  },
  {
    title: "BooksStore",
    detail:
      "E-commerce completo de libros físicos y digitales desarrollado bajo metodología SCRUM. Implementa Redux para gestión de estado global, autenticación con Auth0, pasarela de pagos con MercadoPago, sistema de reseñas y panel administrativo completo.",
    technologies: ["React", "Node.js", "Redux", "Redux Toolkit", "SQL", "CSS", "Auth0", "MercadoPago", "Nodemailer"],
    category: "Proyecto Grupal",
    linkcode: "https://github.com/adrian4058/Books",
    linkdemo:
      "https://www.linkedin.com/posts/adrian4058_react-javascript-node-activity-7087177762955784193-3w1E?utm_source=share&utm_medium=member_desktop",
    img: booksproject,
    features: [
      "E-commerce completo con carrito de compras",
      "Gestión de estado global con Redux",
      "Autenticación y autorización con Auth0",
      "Pagos integrados con MercadoPago",
      "Sistema de reseñas y calificaciones",
      "Panel administrativo avanzado",
      "ChatBot de soporte integrado",
    ],
  },
  {
    title: "Gestoría Adriana",
    detail:
      "SPA responsiva para consultoría de gestoría del automotor. Integra mapas interactivos con React Leaflet para ubicar oficinas y sistema de consultas de presupuestos vía EmailJS.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "EmailJS", "React Leaflet"],
    category: "Freelance",
    linkcode: "https://github.com/adrian4058/Gestoria",
    linkdemo: "https://gestoriaadriana.netlify.app",
    img: gestoria,
    features: ["Diseño totalmente responsivo", "Mapas interactivos", "Consulta de presupuestos", "Optimización SEO"],
  },
  {
    title: "Pokemon App",
    detail:
      "Aplicación didáctica para explorar el mundo Pokémon con arquitectura Redux para manejo de estado complejo. API REST propia consumiendo PokeApi, con funcionalidades avanzadas de búsqueda, filtrado, ordenamiento y creación de personajes personalizados.",
    technologies: ["React", "Node.js", "Redux", "Redux Toolkit", "SQL", "CSS"],
    category: "Proyecto Individual",
    linkcode: "https://github.com/adrian4058/ProyectoPokemon",
    linkdemo:
      "https://www.linkedin.com/posts/adrian4058_javascript-react-redux-activity-7047231593916043264-phlf?utm_source=share&utm_medium=member_desktop",
    img: pokeproject,
    features: [
      "Arquitectura Redux para estado global",
      "API REST propia consumiendo PokeApi",
      "Búsqueda y filtros avanzados",
      "Creación y edición de personajes",
      "Formularios controlados y validaciones",
      "Persistencia de datos en base de datos",
    ],
  },
];
