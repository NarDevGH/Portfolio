import { Outlet } from "react-router-dom";

import NavBar from '../../modules/navbar/NavbarFile'

import './LayoutStyles.css'

export default function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}
