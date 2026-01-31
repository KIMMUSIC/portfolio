import React from "react";
import "./BodyStyle.css";

function Name({ children, ...restProps }) {
  return (
    <div>
      <h1 {...restProps}>
        {children}
      </h1>
    </div>
  );
}

export default Name;
