import SocialMedia from './base/SocialMediaFile'
import githubIcon from '../../assets/images/icons/github_icon.png'

export default function GithubLink() {
    const url = 'https://github.com/NarDevGH'
    const iconPath = githubIcon
    const label = 'Github'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}