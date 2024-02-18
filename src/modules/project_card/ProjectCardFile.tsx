import './ProjectCardStyles.css'

type ProjectCardProps ={
    tittle: string
    imgUrl: string
    url: string
}


export default function ProjectCard({tittle,imgUrl,url}:ProjectCardProps){
    return (
        <div className="project_card" onClick={ () => window.location.href = `${url}`}>
            <img className="background_img"
            src={imgUrl}/>
            <div className="info showInfo">
                <p>{tittle}</p>
            </div>
        </div>
    )
}