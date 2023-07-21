import { Link } from 'react-router-dom';
import './SideBarDoc.css'
import cardioMed from './pictures/cardioMed.png';

const SideBarDoc = ({ doctorName = 'Nom du médecin', specialty = 'Spécialité', profilePicture = 'cardioMed' }) => {
return (
    <div className="sidebar">
    <div className="profileDoc">
        <div className="profile-picture">
        {profilePicture && <img src={cardioMed} alt="Profile"  className='img-SideBarDoc'/>}
        </div>
        <h2>{doctorName}</h2>
        <p>{specialty}</p>

    <div className='contbtn-SideBarDoc'>
    <Link to='/Doctor-details'>
    <button className='btn-SideBarDoc'>Voir profil</button>
    </Link>
    </div>
    </div>
    </div>
);
};

export default SideBarDoc;
