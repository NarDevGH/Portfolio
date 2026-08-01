import './FooterStyles.css'
import GithubLink from "../socialMedias/GithubLinkFile";
import ArtstationLink from "../socialMedias/ArtstationLinkFile";
import LinkedinLink from "../socialMedias/LinkedinLinkFile";
import ItchioLink from "../socialMedias/ItchioFile";

export default function Footer(){

    return (
        <div className="container">
            <div className="contact-info-container">
                <h3 className="container-title">Contacto:</h3>
                <p>Bautista.MateoGM@gmail.com</p>
            </div>
            <div className="links_container">
                <GithubLink/>
                <ItchioLink/>
                <LinkedinLink/>
                <ArtstationLink/>
            </div>
        </div>
    )
}