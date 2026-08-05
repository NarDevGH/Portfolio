import SocialMedia from './base/SocialMediaFile'
import itchIcon from '../../assets/images/icons/itch_icon.webp'

export default function ItchioLink() {
    const url = 'https://nardev.itch.io/'
    const iconPath = itchIcon
    const label = 'Itch.io'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}