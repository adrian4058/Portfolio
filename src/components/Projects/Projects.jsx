import React from "react";
import { CardSection, ProjectsContent, ProjectsSection, CardWrapper } from "./Projects.elements";
import Card from "../Card/Card";
import { projectsInfo } from "..";

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
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;
