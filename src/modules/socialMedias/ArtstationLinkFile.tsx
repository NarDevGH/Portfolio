import SocialMedia from './base/SocialMediaFile'
import artstationIcon from '../../assets/images/icons/artstation_icon.png'

export default function ArtstationLink() {
    const url = 'https://www.artstation.com/nardev'
    const iconPath = artstationIcon
    const label = 'ArtStation'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}