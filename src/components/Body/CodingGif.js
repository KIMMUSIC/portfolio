import React from "react";
import "./BodyStyle.css";

function Coding({ children, ...restProps }) {
  return (
    <div {...restProps}>
        {children}
        <img className="source"  src="./images/misc/source.gif" alt="coding" />
    </div>
  );
}

export default Coding;
