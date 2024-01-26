import { Link } from "react-router-dom";

import './NavbarStyles.css'

export default function NavBar(){
    const profilePicUrl = 'https://i.imgur.com/QZzTd8e.jpg';

    return (
        <div className="navbar">
            <img className="profilePic"
                src={profilePicUrl}/>
            <div>
                <h3>BAUTISTA MATEO</h3>
                <hr/>
                <nav className="navbar-links">
                    <div className="navbar-link">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/projects">Proyectos</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/articles">Blogs</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/contact">Contacto</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}