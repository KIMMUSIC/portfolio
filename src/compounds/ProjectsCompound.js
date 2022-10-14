import React from "react";
import BodyWrapper from "../components/Body/BodyWrapper";
import Project1 from "../components/Projects/Project1";
import Project2 from "../components/Projects/Project2";



function ProjectsCompound({ children, ...restProps}) {

  return (
  <>
        <BodyWrapper className = "projects"><Project1></Project1></BodyWrapper>
        <BodyWrapper className = "projects"><Project2></Project2></BodyWrapper>
        </>
  );
}

export default ProjectsCompound;
