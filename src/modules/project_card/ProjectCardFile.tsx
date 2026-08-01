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
        <div key={props.id} className="project_card" onClick={ () => window.location.href = `${props.web_url}`}>
            <img className="background_img"
            src={props.img_url}/>
            <div className="info showInfo">
                <p>{props.tittle}</p>
            </div>
        </div>
    )
}