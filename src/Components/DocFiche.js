import { useState } from 'react';
import SideBarDoc from './SideBarDoc';
import Agenda from './Agenda'; 
import './DocFiche.css';

const DocFiche = () => {
const [location, setLocation] = useState('');
const [appointmentFor, setAppointmentFor] = useState('');
const [isFirstTime, setIsFirstTime] = useState('');
const [acceptConditions, setAcceptConditions] = useState(false);

const handleLocationChange = (e) => {
    setLocation(e.target.value);
};

const handleAppointmentForChange = (e) => {
    setAppointmentFor(e.target.value);
};

const handleFirstTimeChange = (e) => {
    setIsFirstTime(e.target.value);
};

const handleCheckboxChange = (e) => {
    setAcceptConditions(e.target.checked);
};

const handleTakeAppointment = () => {};

return (
    <div className="doc-fiche">
    <SideBarDoc />
    <div className="main-content">
        <div className="appointment-location">
        <h3>
            <span className="span-DocFiche"> 1</span> Lieu du rendez-vous
        </h3>
        <ul>
            <li>
            <input
                type="radio"
                id="cabinet"
                name="location"
                value="cabinet"
                checked={location === 'cabinet'}
                onChange={handleLocationChange}
            />
            <label htmlFor="cabinet">Cabinet</label>
            </li>
            <li>
            <input
                type="radio"
                id="en-ligne"
                name="location"
                value="en-ligne"
                checked={location === 'en-ligne'}
                onChange={handleLocationChange}
            />
            <label htmlFor="en-ligne">En ligne</label>
            </li>
        </ul>
        </div>
        <div className="appointment-for">
        <h3>
            <span className="span-DocFiche"> 2</span> Pour qui est le rendez-vous
        </h3>
        <ul>
            <li>
            <input
                type="radio"
                id="pour-moi"
                name="appointmentFor"
                value="pour-moi"
                checked={appointmentFor === 'pour-moi'}
                onChange={handleAppointmentForChange}
            />
            <label htmlFor="pour-moi">Pour moi</label>
            </li>
            <li>
            <input
                type="radio"
                id="pour-un-proche"
                name="appointmentFor"
                value="pour-un-proche"
                checked={appointmentFor === 'pour-un-proche'}
                onChange={handleAppointmentForChange}
            />
            <label htmlFor="pour-un-proche">Pour un proche</label>
            </li>
        </ul>
        </div>
        <div className="appointment-availability">
        <h3>
            <span className="span-DocFiche"> 3</span> Choisir une disponibilité
        </h3>
          {/* Agenda de disponibilités */}
        <Agenda />
        </div>
        <div className="first-time">
        <h3>
            <span className="span-DocFiche"> 4</span> Est-ce la première fois que vous consultez ce médecin?
        </h3>
        <ul>
            <li>
            <input
                type="radio"
                id="oui"
                name="firstTime"
                value="oui"
                checked={isFirstTime === 'oui'}
                onChange={handleFirstTimeChange}
            />
            <label htmlFor="oui">Oui</label>
            </li>
            <li>
            <input
                type="radio"
                id="non"
                name="firstTime"
                value="non"
                checked={isFirstTime === 'non'}
                onChange={handleFirstTimeChange}
            />
            <label htmlFor="non">Non</label>
            </li>
        </ul>
        </div>
        <div className="verify-info">
        <h3>
            <span className="span-DocFiche"> 5</span> Je vérifie mes informations
        </h3>
        </div>
        <div className="accept-conditions">
        <input
            type="checkbox"
            id="accept-conditions"
            checked={acceptConditions}
            onChange={handleCheckboxChange}
        />
        <label htmlFor="accept-conditions">J'accepte les conditions</label>
        </div>
        <button className="take-appointment" onClick={handleTakeAppointment} disabled={!acceptConditions}>
        Je prends rendez-vous
        </button>
    </div>
    </div>
);
};

export default DocFiche;
