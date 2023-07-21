import React, { useState } from 'react';
import logoReact from './pictures/logoReact.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isLogged, setIsLogged] = useState(true);

    const handleLogout = () => {
    // Ajoutez ici la logique de déconnexion
    setIsLogged(false);
};

return (
    <nav className="nav">
    <div className="logo">
        <img src={logoReact} alt="Logo React" />
    </div>
    <div className="written">
        <ul className="links">
        <li>
            <Link to="/" className="color">
            Home
            </Link>
        </li>
        <li>
            <a href="/About-us">About us</a>
        </li>
        <li>
            <a href="/FAQ">FAQ</a>
        </li>
        </ul>
        {!isLogged ? (
        <div className="btn">
            <Link to="/login">
            <button className="btn1">Log in</button>
            </Link>
            <Link to="/SignIn">
            <button className="btn2">Sign in</button>
            </Link>
        </div>
        ) : (
        <div className="btn">
            <Link to="/My-Space">
            <button className="btn-log1" >
            Mon espace
            </button>
            </Link>
        </div>
        )}
    </div>
    </nav>
);
}
