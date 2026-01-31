import React from "react";
import "./BodyStyle.css";

function Left({ children, ...restProps }) {
  return <div {...restProps}>{children}
    </div>;
}

export default Left;
