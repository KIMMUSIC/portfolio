import React from "react";
import "./BodyStyle.css";

function Right({ children, ...restProps }) {
  return <div {...restProps}>{children}
    </div>;
}

export default Right;
