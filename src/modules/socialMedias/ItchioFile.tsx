import SocialMedia from './base/SocialMediaFile'

export default function ItchioLink() {
    const url = 'https://nardev.itch.io/'
    const iconPath = 'src/assets/images/icons/itch_icon.webp'
    const label = 'Itch.io'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}