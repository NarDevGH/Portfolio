import './ProjectsPageStyle.css'
import ProjectsJson from '../../assets/data/projects.json'

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

export default function ProjectsPage() {

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

  return (
    <>
    <div className='container projects-container'>
      {
             getProjectsDataSortedByDate().map((data) =>
             {
               return <div className='project-container' key={data.id} onClick={ () => window.location.href = `${data.project_url}`}>
                  <img className='project-image' src={data.img_url} alt={data.tittle}/>
                  <div className='project-data'>
                    <h3 className='project-title'>{data.tittle}</h3>
                    <p className='project-description'>{data.description_esp}</p>
                  </div>
                  <div className='project-meta'>
                    <div className='project-status-container'>
                      <p className='project-status-label'>{data.status}</p>
                      <div className={`project-status-icon ${data.status == 'InDevelopment' ? 'status-InDevelopment' : 'status-Published'}`} />
                    </div>
                    <p className='project-date'>{data.date}</p>
                  </div>
                </div>
             })
           }
    </div>
    <p className='container-title return-button' onClick={ () => window.location.href = "/"}>Volver</p>
    </>
  )
}

 