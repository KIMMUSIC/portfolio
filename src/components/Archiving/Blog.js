import React from "react";
import "./ArchivingStyle.css";

function Blog({ children, ...restProps }) {
  return (
    <div>
      <div class="Artitle">BLOG</div>
        <div><img id="logo" src="./images/misc/joguri.jpg" alt="logo" /></div>

        <div class="Arsub">Algorithm what</div>
        
        <div class="Arurl"><a href="https://kimmusic.github.io/">https://kimmusic.github.io/</a></div>
        <div class="Arcontents">
        <div>● PS, Algorithm, 기타</div>
        <div>● Baekjoon, Programmers, Codeforces 문제풀이</div>
        <div>● spring boot, nodejs 등등</div>
        </div>
    </div>
  );
}

export default Blog;
