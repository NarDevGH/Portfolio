import SocialMedia from './base/SocialMediaFile'

export default function LinkedinLink() {
    const url = 'https://www.linkedin.com/in/bautista-mateo/'
    const iconPath = 'src/assets/images/icons/linkedin_icon.webp'
    const label = 'LinkedIn'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}