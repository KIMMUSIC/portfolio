import React from "react";
import "./HeaderStyle.css";

function NavList({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <a href="/portfolio/">
        Home
      </a>
      <a href="/portfolio/Archiving">
        Archiving
      </a>
      <a href="/portfolio/projects">
        Projects
      </a>
    </div>
  );
}

export default NavList;
