import './AboutMePageStyle.css'

function SkillList(tittle:string,items:string[]){
  return <>
    <p>{tittle}</p>
    <ul>
      {
        items.map((item) => {
          return <li>{item}</li>
        })
      }
    </ul>
  </>
}


export default function AboutMePage() {

  const skillIconTemp = 'https://www.pinclipart.com/picdir/big/51-517260_vector-screen-monitor-icon-banner-royalty-free-black.png';

  const webLangList = ['JavaScript','TypeScript','C#'];
  const backLangList = ['C#','Java','Python'];
  const webDevToolsList = ['Figma','Netlify','Gimp'];
  const gameDevToolsList = ['Blender','Gimp'];
  const backDevToolsList = ['Microsoft SQL Manager'];
  const gameEnginesList = ['Unity (C#)', 'Godot (GDScript)', 'Roblox (Lua)', 'Contruct'];
  const webFrameworkList = ['ReactJs','Asp.Net'];

  return (
    <>
    <h1>Hola, Soy Bautista</h1>
    <p>Soy un programador de Argentina, Buenos Aires. Me apasiona el desarrollo Web, GameDev y BackEnd. Me gusta crear soluciones innovadoras y aprender sobre las formas de abordar problemas que enfrentan las personas y organizaciones. Me considero un aprendiz constante y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de crecimiento.</p>
    <div className='skills-lists'>
      <div className='web-skills'>
        <img className='skill-icon'
        src={skillIconTemp}/>
        {SkillList('Languajes',webLangList)}
        {SkillList('Frameworks',webFrameworkList)}
        {SkillList('DevTools',webDevToolsList)}
      </div>
      <div className='gamedev-skills'>
        <img className='skill-icon'
        src={skillIconTemp}/>
        {SkillList('Engines',gameEnginesList)}
        {SkillList('DevTools',gameDevToolsList)}
      </div>
      <div className='backend-skills'>
        <img className='skill-icon'
        src={skillIconTemp}/>
        {SkillList('Languakes',backLangList)}
        {SkillList('DevTools',backDevToolsList)}
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

 