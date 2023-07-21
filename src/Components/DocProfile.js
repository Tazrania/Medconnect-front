import { Link } from 'react-router-dom';
import './DocProfile.css';
import cardioMed from './pictures/cardioMed.png';

function DocProfile() {
return (
    <div className='contain-docProfile'>
    <div className='child-docProfileDoc'>
        <h1>Fiche Médecin</h1>
        <div className='firstbande'>
        <div className='img-firstbande'>
            <img src={cardioMed} alt="Profile" className='img-fistbandeDoc' />
        </div>
        <div className='info-DocProfile'>
            <h1>Dr John Doe</h1>
            <p>Dentiste</p>
        </div>
        </div>
        <div className='secondbandeDoc'>
        <p className='loca-scnd'>Loacalisation</p>
        <p className='adresse-scnd'>Adresse du cabinet</p>
        <p className='detailsadresse-scnd'>51 Rue Exemple, Boulevard exemple (en face de exemple)</p>
        </div>
        <div className='thirdbandeDoc'>
        <div className='bande-hours'>
            <p className='hours-third'>Horaire et contact</p>
            <p className='hoursdtitl-third'>Horaires</p>
            <p className='hoursdtl-third'>Du lundi au Vendredi<br />De 9:00 à 18:00</p>
        </div>
        <div className='bande-contactDoc'>
            <p className='num-third'>Numéro du cabinet</p>
            <p className='point-third'>Tel:</p>
            <p className='digits-third'>
                06113-59800 / 
                <br />
                05789-00000
                </p>
        </div>
        </div>
        <Link to='/Appointement'>
        <button className='Prd-rdv'>
            Prendre Rendez-vous
        </button>
        </Link>
    </div>
    </div>
);
}

export default DocProfile;
