import './FooterStyles.css'

export default function Footer(){

    return (
        <div className="footer_container">
            <div className="links_container">
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
            </div>
        </div>
    )
}