import { Outlet } from "react-router-dom";

import NavBar from '../../modules/navbar/NavbarFile'

import './LayoutStyles.css'
import Footer from "../../modules/footer/Footer";

export default function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  );
}
