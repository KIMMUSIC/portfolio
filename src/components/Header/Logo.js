import React from "react";
import "./HeaderStyle.css";

function Logo({ children, ...restProps }) {
  var link = restProps[0].Name == "HOME" ? "" : restProps[0].Name
  return (
    <div>
      <a href={"/portfolio/"+link}{...restProps}>
        {restProps[0].Name}
      </a>
    </div>
  );
}

export default Logo;
