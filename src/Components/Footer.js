import logo2alone from "./pictures/logo2alone.png";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export default function Footer() {
return (
    <div className='footer'>
    <div className='loglog'>
        <div className='logoSeul'> 
        <img src={logo2alone} alt="Logo Alone" className="logoutro" />
            <div className="txtout">
                <h5 className="smallOutro">"Des solutions simples et adaptés à vos besoins medicaux.<br/> Nattendez plus pour prendre votre santé en main."</h5>
                <div className='socials'>
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#194a51" }} className="fb" />
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#194a51" }} className="ig" />
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#194a51" }} className="tr" />
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#194a51" }} className="lk" />
                </div>
            </div>
        </div>
    </div>
    <div className='footerChild'>
            <div className='oneList'>
                <p>Particuliers</p>
                <ul>
                <li><a href='#'>Contact</a></li>
                <Link to='/About-us'>
                <li><a href='#'>About us</a></li>
                </Link>
                <Link to='/FAQ'>
                <li><a href='#'>FAQ</a></li>
                </Link>
                <Link to='/SignIn'>
                <li><a href='#'>S'inscrire</a></li>
                </Link>
                <Link to='/Login'>
                <li><a href='#'>Se connecter</a></li>
                </Link>
                </ul>
        </div>
            <div className='twoList'>
                <p>Professionels</p>
                <ul>
                <li><a href='#'>Contact PRO</a></li>
                <li><a href='#'>Conditions</a></li>
                <li><a href='#'>FAQ PRO</a></li>
                <Link to='/Sign-In-Doc'>
                <li><a href='#'>S'inscrire en tant que professionnel de la santé</a></li>
                </Link>
                <Link to='/Log-In-Doc'>
                <li><a href='#'>Se connecter en tant que professionnel de la santé</a></li>
                </Link>
                </ul>
            </div>
            <div className='threeList'>
                <p>Liens utiles</p>
                <ul>
                <li><a href='#'>Médecins à Casablanca</a></li>
                <li><a href='#'>gynècologue à Rabat</a></li>
                <li><a href='#'>Cancérologue à Casablanca</a></li>
                <li><a href='#'>Dermatologue à Marrakech</a></li>
                <li><a href='#'>Cardiologue à Meknès</a></li>
                </ul>
        </div>
    </div>
    </div>
);
}
