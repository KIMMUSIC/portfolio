import React from "react";
import Left from "../components/Body/Left";
import Right from "../components/Body/Right";
import Name from "../components/Body/Name";
import BodyWrapper from "../components/Body/BodyWrapper";
import Coding from "../components/Body/CodingGif"
import Baekjoon from "../components/Body/baekjoon";
import Skills from "../components/Body/Skills";
import Info from "../components/Body/Info";


function BodyCompounds({ children, ...restProps}) {

  let skill = ["HTML5-E34F26", "C++-00599C", "C-A8B9CC", "Javascript-ffb13b", "css-1572B6", "Oracle-F80000", "Python-3766AB","Node.js-339933","Java-007396","Mysql-E6B91E","React-61DAFB", "Redux-764ABC", "Spring-6DB33F"]

  return (
        <BodyWrapper className="mainwrapper">
            <Left className = "mainLeft">
                <Name>KIMMUSIC</Name>
                <Info></Info>
                <Baekjoon />
                <Skills sk = {skill}></Skills>
            </Left>
            <Right className = "mainRight">
              <Coding />
            </Right>
        </BodyWrapper>
  );
}

export default BodyCompounds;
