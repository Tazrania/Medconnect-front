import { Link } from 'react-router-dom'
import '../Components/Prefooter.css'

export default function PreFooter(){
    return(
        <div className='prefootParent'>
            <div className='preFoot'>
                <p className='txtPrefoot'>Pas encore inscrit? Rejoignez nous!</p>
            </div>
            <div className='btnPrefoot'>
                <Link to="/SignIn">
                <button className='btnChild'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}