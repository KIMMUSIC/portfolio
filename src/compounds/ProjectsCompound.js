import React from "react";
import BodyWrapper from "../components/Body/BodyWrapper";
import Project1 from "../components/Projects/Project1";



function ProjectsCompound({ children, ...restProps}) {

  return (
        <BodyWrapper className = "projects"><Project1></Project1></BodyWrapper>
  );
}

export default ProjectsCompound;
