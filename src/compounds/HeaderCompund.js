import React from "react";
import Logo from "../components/Header/Logo";
import NavBar  from "../components/Header/NavBar";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavList from "../components/Header/NavList";

function HeaderCompound({ children, ...restProps }) {
  return (
    <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-home">
          <Logo className="logo" {...restProps}/>
          <NavList className="list" />
        </NavBar>
    </HeaderWrapper>

  );
}

export default HeaderCompound;
