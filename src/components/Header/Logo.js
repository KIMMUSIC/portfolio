import React from "react";
import "./HeaderStyle.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {restProps[0].Name}
      </a>
    </div>
  );
}

export default Logo;
