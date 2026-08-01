import './PageLinkStyles.css'

type PageLinkProps = {
    url?: string
    label: string
    contentAmmount?: number
}

export default function PageLink({ url, label, contentAmmount }: PageLinkProps) {
    return (
        <div className='page-link-container' onClick={() => { if (url) window.location.href = url }}>
            <h3 className='page-title'>{label}</h3>
            {
                contentAmmount !== undefined && (
                    <p className='page-content-ammount'>{contentAmmount}</p>
                )
            }
          </div>
    )
}