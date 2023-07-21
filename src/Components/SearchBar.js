import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar(){
    return(
        <div className='contain-searchBar'>
            <div className='child-searchBar'>
            <input list='specialists' name='menu-deroulant' placeholder='choisir un spécialiste' className='optns-search' />
        <datalist id='specialists'>
        <option value='Cardiologue'></option>
        <option value='Dermatologue'></option>
        <option value='Gynécologue'></option>
        <option value='Ophtalmologue'></option>
        <option value='Pédiatre'></option>
        <option value='Psychiatre'></option>
        <option value='Radiologue'></option>
        <option value='Chirurgien orthopédique'></option>
        <option value='Endocrinologue'></option>
        <option value='Neurologue'></option>
        <option value='Urologue'></option>
        <option value='Gastro-entérologue'></option>
        <option value='Rhumatologue'></option>
        <option value='Oto-rhino-laryngologiste'></option>
        <option value='Allergologue'></option>
        <option value='Néphrologue'></option>
        <option value='Pneumologue'></option>
        <option value='Hématologue'></option>
        <option value='Oncologue'></option>
        </datalist>
        <input list='cities' name='ville-deroulant' placeholder='choisir une ville' className='optns-cities' />
        <datalist id='cities'>
        <option value='Casabanca'></option>
        <option value='Settat'></option>
        <option value='Rabat'></option>
        <option value='Marrakech'></option>
        <option value='Fès'></option>
        <option value='Tanger'></option>
        <option value='Meknès'></option>
        <option value='Oujda'></option>
        <option value='Mohammedia'></option>
        <option value='Agadir'></option>
        <option value='Tétouan'></option>
        <option value='Kénitra'></option>
        <option value='Nador'></option>
        <option value='El Jadida'></option>
        <option value='Safi'></option>
        <option value='Salé'></option>
        <option value='Ouarzazate'></option>
        <option value='Khouribga'></option>
        <option value='Beni Mellal'></option>
        </datalist>
        <FontAwesomeIcon icon={faSearch} className='icone1' />
            </div>
        </div>
    )
}