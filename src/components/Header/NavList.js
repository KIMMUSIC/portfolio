import React from "react";
import "./HeaderStyle.css";

function NavList({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <a href="/">
        Home
      </a>
      <a href="/Archiving">
        Archiving
      </a>
      <a href="/projects">
        Projects
      </a>
    </div>
  );
}

export default NavList;
