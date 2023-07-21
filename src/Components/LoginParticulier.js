import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginParticulier.css";
import logo2alone from "./pictures/logo2alone.png";

export default function LoginParticulier() {
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {

    const hasAccount = true; 

    if (hasAccount) {
    setIsLoggedIn(true);
    navigate("/Home");
    } else {
    alert("You are not registered."); 
    }
};

return (
    <div className="contain-login">
    <div className="child-login">
        <img src={logo2alone} alt="LogoSeul" className="imgLogo" />
        <div className="logForm">
        <input type="email" placeholder="toto@exemple.com" className="email"></input>
        <input type="password" placeholder="Password" className="password"></input>
        <button className="logBtn" onClick={handleLogin}>
            Log in
        </button>
        <p className="notYet">
            Not a member yet? 
            <Link to="/SignIn">
            <span className="spn">Sign in!</span>
            </Link>
        </p>
        </div>
    </div>
    </div>
);
}
