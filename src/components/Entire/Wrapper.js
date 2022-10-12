import React from "react";
import "./Entire.css";

function Wrapper({ children, ...restProps }) {
  return (
  <div {...restProps}>{children}</div>
  );
}

export default Wrapper;