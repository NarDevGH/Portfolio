import ProjectsJson from '../../assets/data/projects.json'

import './HomePageStyle.css'
import PageLink from '../../modules/pagesLink/base/pageLinkFile';
import SkillList from '../../modules/list/SkillListFile';

type Project ={
  id: number;
  tittle: string;
  status: string;
  description_esp: string;
  description_eng: string;
  project_url: string;
  repository_url: string;
  img_url: string;
  date: string;
}

export default function AboutMePage() {

  const PROJECTS_DISPLAYED_NUMBER:number = 4;  

  const getProjectsData:Project[] = JSON.parse(JSON.stringify(ProjectsJson));

  const getProjectsDataSortedByDate = () => {
    return [...getProjectsData].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number);
      const [dayB, monthB, yearB] = b.date.split('/').map(Number);

      if (yearA !== yearB) return yearB - yearA;
      if (monthA !== monthB) return monthB - monthA;
      return dayB - dayA;
    });
  }

  const getFirstXAmmountOfProjectsData = (count: number) => {
    return getProjectsDataSortedByDate().slice(0, count);
  }
  
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
             getFirstXAmmountOfProjectsData(PROJECTS_DISPLAYED_NUMBER).map((data) =>
             {
               return <div className='project-container' key={data.id} onClick={ () => window.location.href = `${data.project_url}`}>
                <div className='project-container-left'>
                  <img className='project-image' src={data.img_url} alt={data.tittle}/>
                  <h3 className='project-title'>{data.tittle}</h3>
                </div>
                <div className='project-container-right'>
                  <p className='project-date'>{data.date}</p>
                </div>
              </div>
             })
           }
         </div>
        </section>
      </div>
      <div className='container right_container'>
        <PageLink url='/' label='Home'/>
        <PageLink url='/projects' label='Mis Proyectos' contentAmmount={getProjectsData.length}/>
        <PageLink label='Conocimientos' contentAmmount={22}/>
        <SkillList/>
      </div>
    </div>
  )
}