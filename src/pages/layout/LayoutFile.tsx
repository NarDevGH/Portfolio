import { Outlet, Link } from "react-router-dom";

import './LayoutStyles.css'

export default function Layout() {
  return (
    <>
      <nav className="navbar">
          <div className="navbar-button">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-button">
            <Link to="/projects">Proyectos</Link>
          </div>
          <div className="navbar-button">
            <Link to="/articles">Blogs</Link>
          </div>
          <div className="navbar-button">
            <Link to="/contact">Contacto</Link>
          </div>
      </nav>

      <Outlet />
    </>
  );
}
