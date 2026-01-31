import React from "react";
import BodyCompounds from "../compounds/BodyCompound";
import EntireWrapper from "../compounds/EntireWrapper";
import HeaderCompound from "../compounds/HeaderCompund";
import ProjectsCompound from "../compounds/ProjectsCompound";

function Project(...restProps) {
  return (
    <>
    <EntireWrapper className = "project">
      <HeaderCompound {...restProps}>
      </HeaderCompound>
      <ProjectsCompound>
      </ProjectsCompound>
    </EntireWrapper>
    </>
  );
}

export default Project;
