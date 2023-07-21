import "./ConnexionPro.css";
import logo2alone from "./pictures/logo2alone.png";

export default function SignInP() {
return (
    <div className="contain-signPro">
    <div className="child-signPro">
        <img src={logo2alone} alt="LogoSeul" className="imgLogoPro" />
        <div className="SignFormPro">
        <input type="Name" placeholder="Jane" className="firstNamePro" />
        <input type="Name" placeholder="Doe" className="lastNamePro" />
        <input
            type="email"
            placeholder="janedoe@exemple.com"
            className="mail-signPro"
        />

        <input type="date" placeholder="age" className="age-signPro" />
        <input 
            type="tel"
            placeholder="Phone number"
            pattern="[0-9]{10}"
            className= "PhonePro"
/>

        
        <div className="docCard">
        <p>Carte de médecin</p>
        <input type="file" accept="image/*,.pdf" placeholder="carte de médecin" className='filePro' />
        </div>
        <input list='options-ville' name='menu-ville' placeholder='Ville' className='ville-option' />
        <datalist id="options-ville">
        <option value="Casablanca"></option>
        <option value="Rabat"></option>
        <option value="Marrakech"></option>
        <option value="Fes"></option>
        <option value="Tangier"></option>
        <option value="Agadir"></option>
        <option value="Meknes"></option>
        <option value="Oujda"></option>
        <option value="Kenitra"></option>
        <option value="Fez"></option>
        <option value="Mohammedia"></option>
        <option value="Sale"></option>
        <option value="Nador"></option>
        <option value="El Jadida"></option>
        <option value="Tetouan"></option>
        <option value="Safi"></option>
        <option value="Beni Mellal"></option>
        <option value="Taza"></option>
        <option value="Khouribga"></option>
        <option value="Settat"></option>
        </datalist>
        <input list='options' name='menu-deroulant' placeholder='Choisir sa spécialité' className='listePoser-menuPro' />
        <datalist id='options'>
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
        <input
            type="password"
            placeholder="password"
            className="mdp-signPro"
        />
                <input
            type="password"
            placeholder=" confirm password"
            className="mdp-signPro"
        />
        <div>
            <input type="checkbox" className="conditions-Pro" />
            <label className="check-sign-Pro">
            J'accepte les conditions utilisateurs
            </label>
        </div>
        <button className="signBtnPro">Sign In</button>
        </div>
    </div>
    </div>
);
}
