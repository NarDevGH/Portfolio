import './SkillListStyles.css'
import ProjectsJson from '../../assets/data/skills.json'

type SkillData = {
  imagePath: string
  url: string
}

export default function SkillList(){

  const SKILLS = JSON.parse(JSON.stringify(ProjectsJson)) as Record<string, SkillData>;

    return (
      <div className='insignias-list-container'>
        {
          SKILLS && Object.entries(SKILLS).map(([skillName, skillData]) => (
            <div className='insignia' key={skillName} onClick={() => window.open(skillData.url, '_blank')}>
              <img className='insignia-icon' src={skillData.imagePath} alt={`${skillName} icon`} />
            </div>
          ))
        }
      </div>
    )
  }