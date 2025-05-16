import React from "react";
import NavbarPart from "./NavbarPart";
import { Outlet } from "react-router";
import FooterPart from "./FooterPart";
function Layout() {
  return (
    <>
      <NavbarPart />

      <Outlet />
      {/* <FooterPart /> */}
    </>
  );
}

export default Layout;
