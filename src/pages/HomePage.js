import React from "react";
import BodyCompounds from "../compounds/BodyCompound";
import EntireWrapper from "../compounds/EntireWrapper";
import HeaderCompound from "../compounds/HeaderCompund";

function HomePage(...restProps) {
  return (
    <>
    <EntireWrapper className = "entire">
      <HeaderCompound {...restProps}>
      </HeaderCompound>
      <BodyCompounds>
      </BodyCompounds>
    </EntireWrapper>
    </>
  );
}

export default HomePage;
