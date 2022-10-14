import React from "react";
import ArchivingCompound from "../compounds/ArchivingCompound";
import BodyCompounds from "../compounds/BodyCompound";
import EntireWrapper from "../compounds/EntireWrapper";
import HeaderCompound from "../compounds/HeaderCompund";

function Archiving(...restProps) {
  return (
    <>
    <EntireWrapper className = "entire">
      <HeaderCompound {...restProps}>
      </HeaderCompound>
      <ArchivingCompound>
      </ArchivingCompound>
    </EntireWrapper>
    </>
  );
}

export default Archiving;
