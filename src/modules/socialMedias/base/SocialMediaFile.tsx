import './SocialMediaStyles.css'

type SocialMediaProps = {
    url: string
    iconPath: string
    label: string
    hotizontal?: boolean
}

export default function SocialMedia({ url, iconPath, label, hotizontal=true }: SocialMediaProps) {
    return (
        <div className={`social-media-container ${!hotizontal ? 'social-media-vertical-alignment' : ''}`} onClick={ () => window.location.href = url}>
            <img className="icon" src={iconPath} alt={label} />
            <p>{label}</p>
        </div>
    )
}