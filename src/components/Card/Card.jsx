import React from "react";
import {
  CardContainer,
  CardImg,
  CardInfo,
  CardLinks,
  CodeLink,
  DemoLink,
  TechnologiesList,
  TechTag,
  CategoryBadge,
} from "./Card.elements";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Card = ({ project }) => {
  return (
    <CardContainer>
      <CardImg src={project.img} alt={project.title} />
      <CardInfo>
        <div className="content-section">
          <h3>{project.title}</h3>
          {project.category && <CategoryBadge>{project.category}</CategoryBadge>}
          <p>{project.detail}</p>

          {project.technologies && (
            <TechnologiesList>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechnologiesList>
          )}
        </div>

        <CardLinks>
          {project.linkcode !== null && (
            <CodeLink href={project.linkcode} target="_blank">
              Código <FaGithub />
            </CodeLink>
          )}
          <DemoLink href={project.linkdemo} target="_blank">
            Demo <FaArrowUpRightFromSquare />
          </DemoLink>
        </CardLinks>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
