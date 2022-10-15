import React from "react";
import BodyWrapper from "../components/Body/BodyWrapper";
import Blog from "../components/Archiving/Blog";
import Github from "../components/Archiving/Github"



function ArchivingCompound({ children, ...restProps}) {

  const blog = () =>{
    window.open('https://kimmusic.github.io/')
  }
  const github = () =>{
    window.open('https://github.com/KIMMUSIC')
  }
  return (
  <>
        <BodyWrapper className = "Archiving" onClick={blog}><Blog></Blog></BodyWrapper>
        <BodyWrapper className = "Archiving" onClick={github}><Github></Github></BodyWrapper>
        </>
  );
}

export default ArchivingCompound;