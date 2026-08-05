import SocialMedia from './base/SocialMediaFile'
import linkedinIcon from '../../assets/images/icons/linkedin_icon.webp'

export default function LinkedinLink() {
    const url = 'https://www.linkedin.com/in/bautista-mateo/'
    const iconPath = linkedinIcon
    const label = 'LinkedIn'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}