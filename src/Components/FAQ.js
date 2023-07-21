import './FAQ.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function FAQ() {
return (
    <div className='contain-faq'>
    <div className='child-faq'>
        <p className='faq'>FREQUENTLY ASKED QUESTIONS</p>
        <button className='quest'>
        Comment fonctionne le service de prise de rendez-vous en ligne ?
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className='quest'>
        Comment fonctionne le service de prise de rendez-vous en ligne ?
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className='quest'>
        Comment fonctionne le service de prise de rendez-vous en ligne ?
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className='quest'>
        Comment fonctionne le service de prise de rendez-vous en ligne ?
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className='quest'>
        Comment fonctionne le service de prise de rendez-vous en ligne ?
        <FontAwesomeIcon icon={faChevronDown} />
        </button>
    </div>
    </div>
);
}

export default FAQ;
