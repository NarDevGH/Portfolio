
import { ReactNode } from 'react';
import './SkillListStyles.css'

type skillListProps = {
    tittle: string;
    items: string[];
}

export default function SkillList({tittle,items}:skillListProps):ReactNode{
    return <div className='skill-list'>
            <h3 className='tittle'>{tittle}</h3>
            <div className='skills'>
              {
                items.map((item) => {
                  return <p>- {item}</p>
                })
              }
            </div>
          </div>
  }