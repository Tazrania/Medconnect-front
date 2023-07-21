import './FormSpaceOne.css'

export default function FormSpaceOne() {
    return( 
        <div className="contain-form">
            <div className="child-form">
                <div className="first-block">
                    <p className='title-form'>Mes Consultations</p>
                    <div className="consult">
                        <p>Dr. Alaoui<span className='date-form'>le 16/09/2023 à 18h30</span>statut :<span className='statut-form'>à venir.</span></p>
                        </div>
                        <div className="consult">
                        <p>Dr. Mesoud<span className='date-form'>le 01/06/2023 à 11h20</span>statut :<span className='statut-form'>passée.</span></p>                        
                        </div>
                        <div className="consult">
                        <p>Dr. Tazi<span className='date-form'>le 04/04/2023 à 15h00</span>statut :<span className='statut-form'>passée.</span></p>
                        
                        
                    </div>
                    <button className="btn-consulte">Mes Consultations</button>
                </div>
                <div className="second-block">
                <p className='title-form'>Mon Suivi médical</p>
                    <div className="suivi">
                        <p>Rien à déclarer(N/A).</p>
                    </div>
                    <button className="btn-suivi">Mon Suivi</button>
                </div>
                <div className="third-block">
                    <div className="ordonnances-block">
                    <p className='title-form'>Mes Ordonnances</p>
                        <div className="ordonnance-child">
                        <p>Ordonnance du <span className='date-form'>09/06/2023</span>statut :<span className='statut-form'> est valable </span></p>
                        <p>Ordonnance du <span className='date-form'>04/04/2023</span>statut :<span className='statut-form'>n'est plus valable</span></p>
                        <p>Ordonnance du <span className='date-form'>17/02/2023</span>statut :<span className='statut-form'>n'est plus valable</span></p>
                        </div>
                        <button className="btn-ordonnance">Mes Ordonnances</button>
                    </div>
                </div>
            </div>
        </div>
    );
}