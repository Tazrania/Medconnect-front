import './AboutUs.css'
import rheumato from './pictures/rheumato.png';

function AboutUs(){
return(
    <div className='contain-about'>
        <div className='child-about'>
            <p className='whoRwe'>Qui sommes Nous ?</p>
        </div>
        <div className='boxesabout'>
            <div className='box-one'>
                <p className='title-box'>Lorem Ipsum</p>
                <p className='txt-box'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='box-two'>
            <img src={rheumato} alt="LogIn" className='rheumato' />
            </div>
            </div>
    </div>
)
}

export default AboutUs;