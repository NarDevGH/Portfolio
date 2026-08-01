import { Link } from "react-router-dom";

import './NavbarStyles.css'

export default function NavBar(){
    const profilePicUrl = 'https://i.imgur.com/QZzTd8e.jpg';

    return (
        <div className="container navbar">
            <div className="left-container">
                <div className="profilepic-container">
                    <img className="profilePic"
                        //src={profilePicUrl}/>
                        src="src/assets/images/profile_pic2.jpeg"/>
                </div>

                <div className="personal-info-container">
                    <h3>Bautista Mateo</h3>
                    <hr/>
                    <h3>Nardev</h3>
                </div>
            </div>
            <div className="right-container">
                <div className="level-container">
                    <p className="level-title-text">Nivel</p>
                    <div className="level-ammount">
                        <p className="level-ammount-text">25</p>
                    </div>
                </div>
                <div className="social-links-container">
                    <div className="social_media_container" onClick={ () => window.location.href = 'https://github.com/NarDevGH'}>
                        <img className="icon" src="src/assets/images/github_icon.png" alt="github" />
                        <p>Github</p>
                    </div>
                    <div className="social_media_container" onClick={ () => window.location.href = 'https://nar-dev.itch.io/'}>
                        <img className="icon" src="src/assets/images/itch_icon.webp" alt="itch" />
                        <p>Itch</p>
                    </div>
                    <div className="social_media_container" onClick={ () => window.location.href = 'https://www.linkedin.com/in/bautista-mateo/'}>
                        <img className="icon" src="src/assets/images/linkedin_icon.webp" alt="linkedin" />
                        <p>LinkedIn</p>
                    </div>
                    <div className="social_media_container" onClick={ () => window.location.href = 'https://www.artstation.com/nardev'}>
                        <img className="icon" src="src/assets/images/artstation_icon.png" alt="artstation" />
                        <p>ArtStation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
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
*/