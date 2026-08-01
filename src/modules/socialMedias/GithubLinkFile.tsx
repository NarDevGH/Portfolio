import SocialMedia from './base/SocialMediaFile'

export default function GithubLink() {
    const url = 'https://github.com/NarDevGH'
    const iconPath = 'src/assets/images/icons/github_icon.png'
    const label = 'Github'

    return (
        <SocialMedia url={url} iconPath={iconPath} label={label}/>
    )
}