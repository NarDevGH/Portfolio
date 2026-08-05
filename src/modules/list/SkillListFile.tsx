import './SkillListStyles.css'
import ProjectsJson from '../../assets/data/skills.json'

type SkillData = {
  imagePath: string
  url: string
}

const skillIconModules = import.meta.glob('../../assets/images/icons/skills/*.svg', { eager: true, import: 'default' }) as Record<string, string>
const skillIconMap: Record<string, string> = Object.entries(skillIconModules).reduce((map, [path, url]) => {
  const fileName = path.split('/').pop() ?? path
  map[fileName] = url
  return map
}, {} as Record<string, string>)

export default function SkillList(){

  const SKILLS = JSON.parse(JSON.stringify(ProjectsJson)) as Record<string, SkillData>;

    return (
      <div className='insignias-list-container'>
        {
          SKILLS && Object.entries(SKILLS).map(([skillName, skillData]) => {
            const imageFileName = skillData.imagePath.split('/').pop() ?? skillData.imagePath
            const imageSrc = skillIconMap[imageFileName] ?? skillData.imagePath

            return (
              <div className='insignia' key={skillName} onClick={() => window.open(skillData.url, '_blank')}>
                <img className='insignia-icon' src={imageSrc} alt={`${skillName} icon`} />
              </div>
            )
          })
        }
      </div>
    )
  }