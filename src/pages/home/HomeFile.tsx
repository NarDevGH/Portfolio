import ProjectsJson from '../../assets/data/projects.json'

import ProjectCard from '../../modules/project_card/ProjectCardFile';
import SkillList from '../../modules/list/SkillListFile';

import './HomePageStyle.css'

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
    <div className='page-container'>
      <div className='left_container'>
        <section className='container aboutme-container'>
          <h1>Hola, Soy Bautista 👋</h1>
          <p>Soy un programador de Argentina, Buenos Aires. Me apasiona el desarrollo Web, GameDev y BackEnd. Me gusta crear soluciones innovadoras y aprender sobre las formas de abordar problemas informaticos que enfrentan las personas y organizaciones. Me considero un aprendiz constante y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de crecimiento.</p>
        </section>
        <section className='container recent-projects-container'>
          <h2 className='container-title'>Proyectos Recientes</h2>
          <div className='projects-list'>
           {
             PROJECTS_DATA.splice(0,PROJECTS_CARDS_NUMBER).map((data) =>
             {
               return <div className='project-container' key={data.id} onClick={ () => window.location.href = `${data.web_url}`}>
                <div className='project-container-left'>
                  <img className='project-image' src={data.img_url} alt={data.tittle}/>
                  <h3 className='project-title'>{data.tittle}</h3>
                </div>
                <div className='project-container-right'>
                  <p className='project-date'>regitrado en 2025</p>
                </div>
              </div>
             })
           }
         </div>
        </section>
      </div>
      <div className='right_container'>
        <section className='container'>
          <h1>test</h1>
        </section>
      </div>
    </div>
  )
}

//  <section className='content-container introduction'>
//         <h1>Hola, Soy Bautista 👋</h1>
//         <p>Soy un programador de Argentina, Buenos Aires. Me apasiona el desarrollo Web, GameDev y BackEnd. Me gusta crear soluciones innovadoras y aprender sobre las formas de abordar problemas informaticos que enfrentan las personas y organizaciones. Me considero un aprendiz constante y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de crecimiento.</p>
//       </section>
//       <section className='content-container recent-projects'>
//         <h2>Mis Proyectos Mas Recientes:</h2>
//         <p>Estos son algunos de mis proyectos mas recientes. Si ten interesa ver mas puedes visitar en la seccion de <a>Proyectos</a>.</p>
//         <div className='recent-projects-container'>
//           {
//             PROJECTS_DATA.splice(0,PROJECTS_CARDS_NUMBER).map((data) =>
//             {
//               return <ProjectCard {...data}></ProjectCard>
//             })
//           }
//         </div>
//       </section>