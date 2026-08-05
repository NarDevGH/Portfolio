import '../LangSelectionStyles.css'
import unitedKingdomFlag from '../../../../assets/icons/flags/united-kindoms.png'

export default function EnglishButton(){
    return (
        <div className='languageButton'>
            <img className='flagImg' src={unitedKingdomFlag} alt='United Kingdom flag' />
            <p>English</p>
        </div>
    )
}
