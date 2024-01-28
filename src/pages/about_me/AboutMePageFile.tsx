import './AboutMePageStyle.css'

function SkillList(tittle:string,items:string[]){
  return <div className='skill-list'>
    <p className='tittle'>{tittle}</p>
      {
        items.map((item) => {
          return <p>- {item}</p>
        })
      }
  </div>
}


export default function AboutMePage() {

  const webDevIcon = 'https://i.imgur.com/qnbIYuV.png';
  const gameDevIcon = 'https://i.imgur.com/XBdstP7.png';
  const backendDevIcon = 'https://i.imgur.com/Pt3mCuJ.png';

  const webLangList = ['JavaScript','TypeScript','C#'];
  const backLangList = ['C#','Java','Python'];
  const webDevToolsList = ['Figma','Netlify','Gimp'];
  const gameDevToolsList = ['Blender','Gimp'];
  const backDevToolsList = ['Microsoft SQL Manager'];
  const gameEnginesList = ['Unity (C#)', 'Godot (GDScript)', 'Roblox (Lua)', 'Contruct'];
  const webFrameworkList = ['ReactJs','Asp.Net'];

  return (
    <>
      <div className='introduction'>
        <h1>Hola, Soy Bautista 👋</h1>
        <p>Soy un programador de Argentina, Buenos Aires. Me apasiona el desarrollo Web, GameDev y BackEnd. Me gusta crear soluciones innovadoras y aprender sobre las formas de abordar problemas que enfrentan las personas y organizaciones. Me considero un aprendiz constante y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de crecimiento.</p>
      </div>
      <div className='skills-lists'>
        <div className='skill-container'>
          <img className='skill-icon'
          src={webDevIcon}/>
          {SkillList('Lenguajes:',webLangList)}
          {SkillList('Frameworks:',webFrameworkList)}
          {SkillList('DevTools:',webDevToolsList)}
        </div>
        <div className='skills-separator'/>
        <div className='skill-container'>
          <img className='skill-icon'
          src={gameDevIcon}/>
          {SkillList('Engines:',gameEnginesList)}
          {SkillList('DevTools:',gameDevToolsList)}
        </div>
        <div className='skills-separator'/>
        <div className='skill-container'>
          <img className='skill-icon'
          src={backendDevIcon}/>
          {SkillList('Lenguajes:',backLangList)}
          {SkillList('DevTools:',backDevToolsList)}
        </div>
      </div>
      <div className='recent-projects'>
        <h2>Mis Proyectos Mas Recientes:</h2>
        <p>Estos son algunos de mis proyectos mas recientes. Si ten interesa ver mas puedes visitar la seccion de <a>Proyectos</a>.</p>
        <div className='recent-projects-container'>

        </div>
      </div>
    </>
  )
}

 