import './ProjectCardStyles.css'

type ProjectCardProps ={
    tittle: string,
    imgUrl: string
}


export default function ProjectCard({tittle,imgUrl}:ProjectCardProps){
    return (
        <div className="project_card">
            <img className="background_img"
            src={imgUrl}/>
            <div className="info showInfo">
                <p>{tittle}</p>
            </div>
        </div>
    )
}