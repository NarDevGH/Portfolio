import SocialMedia from './base/SocialMediaFile'

export default function ArtstationLink() {
    const url = 'https://www.artstation.com/nardev'
    const iconPath = 'src/assets/images/icons/artstation_icon.png'
    const label = 'ArtStation'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}