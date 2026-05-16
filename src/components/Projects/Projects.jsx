import React from "react";
import { CardSection, ProjectsContent, ProjectsSection, CardWrapper, OtherProjectsSection, OtherProjectsList, OtherProjectItem } from "./Projects.elements";
import Card from "../Card/Card";
import { projectsInfo, otherProjectsInfo } from "..";

const Projects = () => {
  return (
    <ProjectsSection id="project">
      <ProjectsContent>
        <h2 data-aos="fade-up">
          Proyectos
          <span>.</span>
        </h2>
        <CardSection>
          {projectsInfo.map((project, index) => (
            <CardWrapper key={index} data-aos="fade-up" data-aos-delay={100 + index * 200}>
              <Card project={project} />
            </CardWrapper>
          ))}
        </CardSection>
        <OtherProjectsSection data-aos="fade-up">
          <h4>Otros proyectos</h4>
          <OtherProjectsList>
            {otherProjectsInfo.map((p, i) => (
              <OtherProjectItem key={i}>
                <span className="title">{p.title}</span>
                {p.detail && <span className="detail">— {p.detail}</span>}
                <span className="tech">{p.tech}</span>
              </OtherProjectItem>
            ))}
          </OtherProjectsList>
        </OtherProjectsSection>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;
