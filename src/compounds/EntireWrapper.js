import React from "react";
import Wrapper from "../components/Entire/Wrapper";


function EntireWrapper({ children, ...restProps}) {
  return (
        <Wrapper {...restProps}>{children}</Wrapper>
  );
}

export default EntireWrapper;
