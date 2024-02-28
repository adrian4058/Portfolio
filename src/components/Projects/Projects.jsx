import React from "react";
import { CardSection, ProjectsContent, ProjectsSection } from "./Projects.elements";
import Card from "../Card/Card";
import { projectsInfo } from "..";

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsContent>
        <h2>
          Proyectos
          <span>.</span>
        </h2>
        <CardSection>
          {projectsInfo.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </CardSection>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;
