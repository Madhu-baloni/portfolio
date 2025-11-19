import NavbarPart from "./NavbarPart";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <NavbarPart />
      <Outlet />
    </>
  );
}

export default Layout;
