import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPro.css';
import logo2alone from './pictures/logo2alone.png';

export default function LoginPro() {
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
    const hasAccount = true;

    if (hasAccount) {
    setIsLoggedIn(true);
    navigate('/Home');
    } else {
    alert('You are not registered.');
    }
};

return (
    <div className="contain-loginPro">
    <div className="child-loginPro">
        <img src={logo2alone} alt="LogoSeul" className="imgLogo" />
        <div className="logFormPro">
        <input type="email" placeholder="janedoe@example.com" className="emailPro" />
        <input type="password" placeholder="Password" className="passwordPro" />
        <button className="logBtnPro" onClick={handleLogin}>
            Log in
        </button>
        <p className="notYetPro">
            Not a member yet?
            <Link to="/Sign-In-Pro">
            <span className="spnPro">Sign in!</span>
            </Link>
        </p>
        </div>
    </div>
    </div>
);
}
