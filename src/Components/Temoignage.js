import './Temoignage.css'
import gynecoMed from './pictures/gynecoMed.png';
import pediatreMed from './pictures/pediatreMed.png';
import generalMed from './pictures/generalMed.png';
import cardioMed from './pictures/cardioMed.png';


export default function(){
    return(
        <div className='temmoi'>
            <div className='witness'>
                <p className='sousWitness'>Ces spécialistes nous ont fait confiance, ils témoignent.</p>
            </div>
            <div className='witnessGrid'>
                <article className='card'>
                <img src={gynecoMed} alt="gyneco Doc" className='drPdp' />
                <div className='content'>
                    <p className='nameContent'>DR TAZI Ghita</p>
                    <p className='speContent'>Gynécologue</p>
                    <p className='txtContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto libero quam iusto velit repellendus nostrum consequatur doloribus! Veritatis amet blanditiis laboriosam! Tempore consectetur.</p>
                </div>
                </article>
                <article className='card'>
                <img src={pediatreMed} alt="pediatric Doc" className='drPdp' />
                <div className='content'>
                    <p className='nameContent'>DR ALAOUI Alia</p>
                    <p className='speContent'>Pédiatre</p>
                    <p className='txtContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto libero quam iusto velit repellendus nostrum consequatur doloribus! Veritatis amet blanditiis laboriosam! Tempore consectetur.</p>
                </div>
                </article>
                <article className='card'>
                <img src={generalMed} alt="generalc Doc" className='drPdp' />
                <div className='content'>
                    <p className='nameContent'>DR SEKKAT Adam</p>
                    <p className='speContent'>Généraliste</p>
                    <p className='txtContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto libero quam iusto velit repellendus nostrum consequatur doloribus! Veritatis amet blanditiis laboriosam! Tempore consectetur.</p>
                </div>
                </article>
                <article className='card'>
                <img src={cardioMed} alt="heart Doc" className='drPdp' />
                <div className='content'>
                    <p className='nameContent'>DR BENJELLOUN Mehdi</p>
                    <p className='speContent'>Chirurgien cardiologue</p>
                    <p className='txtContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto libero quam iusto velit repellendus nostrum consequatur doloribus! Veritatis amet blanditiis laboriosam! Tempore consectetur.</p>
                </div>
                </article>
            

            </div>
        </div>
    )
}