export { default as Cover } from "./Cover/Cover";
export { default as Themes } from "./Theme/Themes";
import mivete from "../assets/mivete.png";
import muchiutti from "../assets/muchiutti.png";
import n8nbot from "../assets/n8nbot.png";

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
    since: "2024 - Esperado: Fines de Agosto 2026",
  },
];
export const experienceInfo = [
  {
    position: "Co-fundador & Full Stack Developer",
    since: "Dic. 2025 - Actualidad",
    company: "Pierini IA",
    location: "Santa Fe, Argentina • En remoto",
    detail:
      "Plataforma SaaS multi-tenant de chatbots con IA para inmobiliarias y concesionarias (10 clientes activos, ~10.000 mensajes/mes). Lideré la migración desde N8N hacia una arquitectura backend propia. Diseñé el pipeline conversacional completo (sesiones, historial, enrutado de intención, herramientas IA y envío multicanal), la arquitectura multi-tenant con aislamiento por cliente, las integraciones con WhatsApp Business, Instagram y Messenger, y el panel operativo con asignación de vendedores y modo embed.",
  },
  {
    position: "Desarrollador Web",
    since: "Oct. 2024 - May. 2026",
    company: "EasyLife Marketing",
    location: "Canarias, España • En remoto",
    detail:
      "Desarrollé y mantuve sitios web con WordPress, HubSpot y CSS. Participé en reuniones diarias bajo Scrum, contribuyendo en estrategias de marketing digital y automatización de procesos.",
  },
  {
    position: "Desarrollador Full-Stack",
    since: "Mar. 2024 - Ago. 2024",
    company: "Smart Air",
    location: "Hong Kong SAR, China • En remoto",
    detail:
      "Desarrollé features Full Stack con Next.js, Django y MUI. Implementé geolocalización en tiempo real de purificadores de aire e integré plataformas IoT (Qinping, eWeLink, SmartThings) para monitoreo ambiental y control remoto de dispositivos. Metodología SCRUM.",
  },
  {
    position: "Desarrollador Full-Stack",
    since: "Oct. 2023 - Mar. 2024",
    company: "Escrito Space",
    location: "En remoto",
    detail:
      "Desarrollé la plataforma web en equipo reducido (dos personas) con Next.js, Django, Ant Design y AWS. Responsable de nuevas funcionalidades y mejoras continuas, con reuniones semanales de seguimiento y coordinación.",
  },
  {
    position: "Desarrollador Front-End",
    since: "Ago. 2023 - Sep. 2023",
    company: "iCreativa Digital",
    location: "Bogotá, Colombia • En remoto",
    detail:
      "Desarrollé interfaces web con React, CSS y GSAP, implementando animaciones y componentes interactivos en un equipo ágil con reuniones diarias.",
  },
  {
    position: "Desarrollador de Software",
    since: "May. 2023 - Feb. 2024",
    company: "Alas Empresa Junior",
    location: "Santa Fe, Argentina • En remoto",
    detail:
      "Brindé soluciones informáticas, soporte web y gestión de plataformas en una organización sin fines de lucro del sector TIC.",
  },
];

export const projectsInfo = [
  {
    title: "Plataforma Pierini IA",
    detail:
      "Plataforma SaaS multi-tenant que centraliza el backend y panel operativo para atención multicanal con IA. Orientada a inmobiliarias y concesionarias, con soporte de WhatsApp, Instagram, Messenger y comentarios. Opera con 10 clientes activos procesando ~10.000 mensajes/mes.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "OpenAI", "Meta Business API", "Next.js", "Tailwind CSS", "Radix UI"],
    category: "Co-fundador",
    linkcode: null,
    linkdemo: "https://api.whatsapp.com/send/?phone=5493492697716&text=Hola,%20busco%20un%20departamento%20de%202%20dormitorios",
    img: n8nbot,
    features: [
      "Arquitectura multi-tenant con aislamiento por cliente",
      "Pipeline conversacional: sesiones, historial, enrutado de intención y herramientas IA",
      "Integraciones con WhatsApp Business, Instagram y Messenger (Meta Business API)",
      "Motor de herramientas por vertical (inmobiliaria / concesionaria)",
      "CRM integrado con Tokko + handoff automático por intención comercial",
      "Panel operativo: lectura colaborativa, asignación de vendedores y reportes",
      "Modo embed con tokens y scopes",
      "10 clientes activos · ~10.000 mensajes/mes",
    ],
  },
  {
    title: "App Abogados – Vertical Previsional",
    detail:
      "Aplicación para el área previsional que guía al operador por pasos: alta de caso, carga de PDF ANSES, extracción con IA, validación manual y cálculo legal determinístico. Preparada para integrarse con login central multi-app.",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "OpenAI", "JWT", "Zod", "Swagger", "React", "Vite"],
    category: "Laboral",
    linkcode: null,
    linkdemo: null,
    img: n8nbot,
    features: [
      "API REST con gestión completa de casos, estados y trazabilidad",
      "Pipeline de extracción por chunks con merge y normalización de PDFs ANSES",
      "Validación de estructura mínima antes de invocar IA",
      "Cálculo legal separado de la IA con recálculo controlado",
      "Generación de resumen final post-cálculo",
      "Wizard por pasos orientado a operación",
      "Contratos estables con OpenAPI/Swagger",
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
];

export const otherProjectsInfo = [
  {
    title: "Bot WhatsApp para Hamburgueserías",
    detail: "Gestión de pedidos, stock e ingredientes en tiempo real desde el cliente hasta cocina",
    tech: "n8n · WhatsApp Business API · Spring Boot · PostgreSQL · WebSocket",
  },
  {
    title: "BooksStore – E-commerce grupal",
    detail: "E-commerce completo con carrito, autenticación y pagos integrados",
    tech: "React · Node.js · Redux · Auth0 · MercadoPago",
  },
  {
    title: "Gestoría Adriana",
    detail: "SPA corporativa con mapas interactivos y sistema de presupuestos",
    tech: "TypeScript · React · Tailwind CSS · React Leaflet",
  },
  {
    title: "Pokémon App",
    detail: "Explorador con API REST propia, filtros avanzados y creación de personajes",
    tech: "React · Node.js · Redux · PostgreSQL",
  },
];
