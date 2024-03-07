import { ReactNode } from 'react';
import './ProjectCardStyles.css'

type Project ={
    id: number;
    tittle: string;
    description: string;
    web_url: string;
    repository_url: string;
    img_url: string;
}

export default function ProjectCard(props:Project):ReactNode{
    return (
        <div key={props.projectData.id} className="project_card" onClick={ () => window.location.href = `${props.projectData.project_url}`}>
            <img className="background_img"
            src={props.projectData.img_url}/>
            <div className="info showInfo">
                <p>{props.projectData.tittle}</p>
            </div>
        </div>
    )
}