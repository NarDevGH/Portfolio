import { Link } from "react-router-dom";

import './NavbarStyles.css'

export default function NavBar(){
    const profilePicUrl = 'https://i.imgur.com/QZzTd8e.jpg';

    return (
        <div className="navbar">
            <div className="navbar-left_container">
                <img className="profilePic"
                    src={profilePicUrl}/>
                    <div className="name_username-container">
                        <h3>BAUTISTA MATEO</h3>
                        <hr/>
                        <h3>NARDEV</h3>
                    </div>
            </div>
            <div className="navbar-middle_container">
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
            <div className="navbar-right_container">
                <div className="language-selector">
                    <img className="language-selector-icon" src="src/assets/images/bandera_argentina.png"/>
                    <p>Español</p>
                </div>
                <div className="language-selector">
                    <img className="language-selector-icon" src="src/assets/images/bandera_usa.png"/>
                    <p>English</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}