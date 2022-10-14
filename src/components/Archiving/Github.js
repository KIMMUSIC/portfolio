import React from "react";
import "./ArchivingStyle.css";

function Github({ children, ...restProps }) {
  return (
    <div>
      <div class="Artitle">GITHUB</div>
      <div><img id="logo" src="./images/misc/github.png" alt="logo" /></div>
        <div class="Arsub">KIMMUSIC Github</div>
        
        <div class="Arurl"><a href="https://github.com/KIMMUSIC">https://github.com/KIMMUSIC</a></div>
        <div class="Arcontents">
        <div>● 학교 과제, 개인 프로젝트, 팀프로젝트</div>
        <div>● PS 문제풀이</div>
        <div>● 관심있는 오픈소스 Fork</div>
        </div>
    </div>
  );
}

export default Github;
