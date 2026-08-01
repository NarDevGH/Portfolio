//import { Link } from "react-router-dom";

import './NavbarStyles.css'
import GithubLink from "../socialMedias/GithubLinkFile";
import ArtstationLink from "../socialMedias/ArtstationLinkFile";
import LinkedinLink from "../socialMedias/LinkedinLinkFile";
import ItchioLink from "../socialMedias/ItchioFile";

export default function NavBar(){
    const profilePicUrl = 'https://i.imgur.com/7nh5dGm.png';

    const getCurrentAge = () => {
        const birthDate = new Date('2001-01-11');
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (monthDifference < 0) {
            age--;
        }
        return age;
    }

    return (
        <div className="container navbar">
            <div className="left-container">
                <div className="profilepic-container">
                    <img className="profilePic"
                        //src="src/assets/images/profile_pic2.jpeg"/>
                        src={profilePicUrl}/>
                </div>

                <div className="personal-info-container">
                    <h3>Bautista Mateo</h3>
                    <hr/>
                    <h3>Nardev</h3>
                <div className="region-container">
                    <img className="region-icon" src="src/assets/images/icons/flags/argentina.png" alt="Argentina flag." />
                    <p className="region-label">Argentina</p>
                </div>
                </div>
            </div>
            <div className="right-container">
                <div className="level-container">
                    <p className="level-title-text">Nivel</p>
                    <div className="level-ammount">
                        <p className="level-ammount-text">{getCurrentAge()}</p>
                    </div>
                </div>
                <div className="social-links-container">
                    <GithubLink/>
                    <ItchioLink/>
                    <LinkedinLink/>
                    <ArtstationLink/>
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