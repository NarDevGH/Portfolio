import ProjectCard from '../../modules/project_card/ProjectCardFile';

import SkillList from '../../modules/list/SkillListFile';

import './AboutMePageStyle.css'

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

  //temp
  const imgUrl = 'https://i.imgur.com/RCBtsh0.png';

  return (
    <>
      <section className='introduction'>
        <h1>Hola, Soy Bautista 👋</h1>
        <p>Soy un programador de Argentina, Buenos Aires. Me apasiona el desarrollo Web, GameDev y BackEnd. Me gusta crear soluciones innovadoras y aprender sobre las formas de abordar problemas que enfrentan las personas y organizaciones. Me considero un aprendiz constante y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de crecimiento.</p>
      </section>
      <section className='skills'>
        <h1>HABILIDADES INFORMATICAS</h1>
        <div className='skills-lists'>
          {/* Web-Skills */}
          <div className='skill-container'>
            <h2 className='skill-tittle'>WEB</h2>
            <img className='skill-icon' src={webDevIcon}/>
            <SkillList tittle='Lenguajes:' items={webLangList}/>
            <SkillList tittle='Frameworks:' items={webFrameworkList}/>
            <SkillList tittle='DevTools:' items={webDevToolsList}/>
          </div>
          <div className='skills-separator'/>
          {/* Game-Skills */}
          <div className='skill-container'>
            <h2 className='skill-tittle'>GAMEDEV</h2>
            <img className='skill-icon' src={gameDevIcon}/>
            <SkillList tittle='Engines:' items={gameEnginesList}/>
            <SkillList tittle='DevTools:' items={gameDevToolsList}/>
          </div>
          <div className='skills-separator'/>
          {/* BackEnd-Skills */}
          <div className='skill-container'>
            <h2 className='skill-tittle'>BACKEND</h2>
            <img className='skill-icon' src={backendDevIcon}/>
            <SkillList tittle='Lenguajes:' items={backLangList}/>
            <SkillList tittle='DevTools:' items={backDevToolsList}/>
          </div>
        </div>
      </section>
      <section className='recent-projects'>
        <h2>Mis Proyectos Mas Recientes:</h2>
        <p>Estos son algunos de mis proyectos mas recientes. Si ten interesa ver mas puedes visitar la seccion de <a>Proyectos</a>.</p>
        <div className='recent-projects-container'>
          <ProjectCard tittle='COUNTER CLOCKWISE DRONE' imgUrl={imgUrl}/>
          <ProjectCard tittle='Project 2' imgUrl={imgUrl}/>
          <ProjectCard tittle='Project 3' imgUrl={imgUrl}/>
          <ProjectCard tittle='Project 4' imgUrl={imgUrl}/>
          <ProjectCard tittle='Project 5' imgUrl={imgUrl}/>
          <ProjectCard tittle='Project 6' imgUrl={imgUrl}/>
        </div>
      </section>
    </>
  )
}

 