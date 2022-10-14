import React from "react";
import "./BodyStyle.css";

function Info({ children, ...restProps }) {
  return (
    <div>
      <h1 {...restProps}>
        <div>Name : 이동규</div>
        <div><a href = "mailto:hwa3060@naver.com">E-mail : hwa3060@naver.com</a></div>
        <div><a href ="https://kimmusic.github.io/">Blog : https://kimmusic.github.io/</a></div>
        <div><a href = "https://github.com/KIMMUSIC">Github : https://github.com/KIMMUSIC</a></div>
      </h1>
    </div>
  );
}

export default Info;
