import './Seconds.css';
import docbro from './pictures/docbro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default function seconde() {
return (
    <div className="seconde">
        <div className='containSec'>
        <div className='pic1'>
    <img src={docbro} alt="Bro Doc" className='dr1' />
    </div>
    <div className="recherche">
        <p className="slogan">"Votre santé connectée, notre priorité."</p>
        <p className='sous-slogan'>
        Prenez le contrôle de votre santé à distance grâce à notre plateforme en ligne : <br /> une solution simple et efficace pour la prise de rendez-vous médicaux <br /> et le suivi médical personnalisé.
        </p>
        <div className="inpt">
        <input type="text" placeholder="Ex:Dentiste" className="cherche"/>
        <input type="text" placeholder="Location" className="loca" />
        <Link to="/Search" className='icone1'>
            <FontAwesomeIcon icon={faSearch} />
        </Link>
        </div>
    </div>
    </div>
    </div>
);
}
