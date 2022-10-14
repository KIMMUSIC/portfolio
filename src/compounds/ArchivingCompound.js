import React from "react";
import BodyWrapper from "../components/Body/BodyWrapper";
import Blog from "../components/Archiving/Blog";
import Github from "../components/Archiving/Github"



function ArchivingCompound({ children, ...restProps}) {

  return (
  <>
        <BodyWrapper className = "Archiving"><Blog></Blog></BodyWrapper>
        <BodyWrapper className = "Archiving"><Github></Github></BodyWrapper>
        </>
  );
}

export default ArchivingCompound;