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
                        <Link to="/">HOME</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/projects">PROYECTOS</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/articles">BLOGS</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/contact">CONTACTO</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}