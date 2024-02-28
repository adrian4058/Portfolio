import React from "react";
import { CardContainer, CardImg, CardInfo, CardLinks, CodeLink, DemoLink } from "./Card.elements";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Card = ({ project }) => {
  return (
    <CardContainer>
      <CardImg src={project.img} />
      <CardInfo>
        <h3>{project.title}</h3>
        <p>{project.detail}</p>
        <CardLinks>
          <CodeLink href={project.linkcode} target="_blank">
            Código <FaGithub />
          </CodeLink>
          <DemoLink href={project.linkdemo} target="_blank">
            Demo <FaArrowUpRightFromSquare />
          </DemoLink>
        </CardLinks>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
