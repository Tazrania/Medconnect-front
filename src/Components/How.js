import './How.css';
import mobileLogin from './pictures/mobileLogin.png';
import searchDr  from './pictures/searchDr.png';
import Doctorsbro from './pictures/Doctorsbro.png';


export default function How () {
    return (
        <div className='parent'>
            <div className='explication'>
                <p className='txt'>Comment ça marche?</p>
            </div>
            <div className='animations'>
                <div className='pic'>
                    <img src={mobileLogin} alt="LogIn" className='dr2' />
                    <p className='caption'>je m'inscris</p>
                </div>
                <div className='pic'>
                    <img src={searchDr} alt="search" className='dr3' />
                    <p className='caption'>je cherche un spécialiste</p>
                </div>  
                <div className='pic'>
                    <img src={Doctorsbro} alt="docs" className='dr4' />
                    <p className='caption'>Je choisis mon practitien/ <br /> j'accède à mon suivi</p>
                </div> 
            </div>
            <div className="under-how">
            <p className="ss-how">"Medconnect, un outil quotidien simple et a porté de main."</p>
                </div>
        </div>
    );
}