import React from "react";
import "./BodyStyle.css";

function Baekjoon({ children, ...restProps }) {
  return (
    <div {...restProps}>
        <a href="https://solved.ac/hwa3060" target="_blank" rel="noopener noreferrer"><img className="Baekjoon"  src="http://mazassumnida.wtf/api/v2/generate_badge?boj=hwa3060" alt="BaekJoon" /></a>
    </div>
  );
}

export default Baekjoon;
