import React from "react";
import "./BodyStyle.css";

function BodyWrapper({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

export default BodyWrapper;
