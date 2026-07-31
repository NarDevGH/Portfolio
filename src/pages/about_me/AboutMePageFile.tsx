import ProjectsJson from '../../assets/data/projects.json'

import ProjectCard from '../../modules/project_card/ProjectCardFile';
import SkillList from '../../modules/list/SkillListFile';

import './AboutMePageStyle.css'

type Project ={
  id: number;
  tittle: string;
  description: string;
  project_url: string;
  repository_url: string;
  img_url: string;
  web_url: string;
}

export default function AboutMePage() {

  const PROJECTS_CARDS_NUMBER:number = 4;  

  const PROJECTS_DATA:Project[] = JSON.parse(JSON.stringify(ProjectsJson));
  
  return (
    <>
    <div className='page-container'>
      <section className='content-container introduction'>
        <h1>Hola, Soy Bautista 👋</h1>
        <p>Soy un programador de Argentina, Buenos Aires. Me apasiona el desarrollo Web, GameDev y BackEnd. Me gusta crear soluciones innovadoras y aprender sobre las formas de abordar problemas informaticos que enfrentan las personas y organizaciones. Me considero un aprendiz constante y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de crecimiento.</p>
      </section>
      <section className='content-container recent-projects'>
        <h2>Mis Proyectos Mas Recientes:</h2>
        <p>Estos son algunos de mis proyectos mas recientes. Si ten interesa ver mas puedes visitar en la seccion de <a>Proyectos</a>.</p>
        <div className='recent-projects-container'>
          {
            PROJECTS_DATA.splice(0,PROJECTS_CARDS_NUMBER).map((data) =>
            {
              return <ProjectCard {...data}></ProjectCard>
            })
          }
        </div>
      </section>
      </div>
    </>
  )
}

 