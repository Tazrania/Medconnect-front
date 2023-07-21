import './InfoForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default function InfoForm() {
    return (
        <div className='contain-info'>
            <div className='child-info'>
                <div className='jane-info'>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#808080" }}  className='user-info'/>
                    <div className='childJane-doe'>
                        <p>Doe<br/><span className='firstNameJane'>Jane</span></p>
                    </div>
                    <div className='details-jane'>
                        <p><span>Sexe :</span> Femme  <br />
                        <span>Age :</span> 29 ans <br />
                        <span>Email :</span> doejane@exemple.com <br />
                        <span>Ville :</span> Casablanca
                        </p>
                    </div>
                    <Link to="/My-Infos">
                    <button className='btn-jane'>Mes Informations</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
