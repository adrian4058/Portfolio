import React, { useState, useEffect } from "react";
import Switch from "../Switch/Switch";
import {
  LogoName,
  NavBarContainer,
  NavBarLinks,
  NavBarLogos,
  NavBarSize,
  NavBarSwitch,
  LinksButtons,
  ListLinks,
  LinksNav,
  ScrollToTopButton,
} from "./Navbar.elements";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import logoblanco from "../../assets/logoblanco.png";
import logonegro from "../../assets/logo.png";

const Navbar = ({ theme, setTheme }) => {
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();

    setClicked(false);

    const targetId = link.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.min(Math.abs(distance) * 0.5, 1200);
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);

      setTimeout(() => {
        setActiveSection(targetId);
      }, duration * 0.7);
    }
  };

  const Links = [
    { name: "Inicio", link: "#home" },
    { name: "Sobre mi", link: "#about" },
    { name: "Proyectos", link: "#project" },
    { name: "Contacto", link: "#contact" },
  ];

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const sections = ["home", "about", "project", "contact"];
        const navbarHeight = 80;
        const scrollPosition = window.scrollY + navbarHeight + 30;

        setShowScrollTop(window.scrollY > 300);

        let currentSection = "home";

        if (window.scrollY < 50) {
          currentSection = "home";
        } else {
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;

              if (scrollPosition >= offsetTop) {
                currentSection = section;
                break;
              }
            }
          }
        }

        if (currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }, 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeSection]);

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = Math.min(startPosition * 0.3, 1000);
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startPosition * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  let logo = theme === "light" ? logonegro : logoblanco;

  return (
    <>
      <NavBarContainer>
        <NavBarSize>
          <NavBarLogos onClick={(e) => handleLinkClick(e, "#home")} style={{ cursor: "pointer" }}>
            <LogoName src={logo} />
          </NavBarLogos>
          <NavBarLinks>
            <LinksButtons className={`${clicked ? "active" : ""}`}>
              {Links.map((link, index) => (
                <ListLinks key={index}>
                  <LinksNav
                    onClick={(e) => handleLinkClick(e, link.link)}
                    href={link.link}
                    className={activeSection === link.link.substring(1) ? "active" : ""}
                  >
                    {link.name}
                  </LinksNav>
                </ListLinks>
              ))}
            </LinksButtons>
            <NavBarSwitch>
              <Switch theme={theme} setTheme={setTheme} />
              {clicked ? (
                <MdClose className="Navbar__menu" onClick={handleClick} />
              ) : (
                <IoMdMenu className="Navbar__menu" onClick={handleClick} />
              )}
            </NavBarSwitch>
          </NavBarLinks>
        </NavBarSize>
      </NavBarContainer>

      <ScrollToTopButton onClick={scrollToTop} className={showScrollTop ? "show" : ""}>
        <FaArrowUp />
      </ScrollToTopButton>
    </>
  );
};

export default Navbar;
