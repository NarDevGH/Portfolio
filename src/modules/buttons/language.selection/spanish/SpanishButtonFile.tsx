import '../LangSelectionStyles.css'
import spainFlag from '../../../../assets/icons/flags/spain.png'

export default function SpanishButton(){
    return (
        <div className='languageButton'>
            <img className='flagImg' src={spainFlag} alt='Spain flag' />
            <p>Spanish</p>
        </div>
    )
}
