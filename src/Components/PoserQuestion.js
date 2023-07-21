import './PoserQuestion.css';

export default function PoserQuestion() {
return (
    <div className='contain-poser'>
    <div className='title-poser'>
        <p>Poser une question à un médecin</p>
    </div>
    <div className='input-poser'>
        <input list='options' name='menu-deroulant' placeholder='choisir un spécialiste' className='listePoser-menu' />
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
    </div>
    <div className='input-choix'>
    <input list='choix' name='menu-choix' placeholder='Pour qui?' className='listeQui-menu' />
        <datalist id='choix'>
        <option value='Pour moi'></option>
        <option value='Pour un proche'></option>
        </datalist>
        </div>
        <div className='input-message'>
        <input type='text' placeholder='Veuillez adresser votre question ...'  className='poser-questionInput'/>
        </div>
        <div className='contain-btnQuestion'>
        <button className='btn-poserQuestion'>Envoyer</button>
        </div>
    </div>
);
}
