import React, { useState } from 'react';
import axios from 'axios';
import logo2alone from "./pictures/logo2alone.png";
import './SignInP.css'

export default function SignInP() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [conditions, setConditions] = useState(false);

    const handleSignIn = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('/signup', {
        firstName,
        lastName,
        email,
        age,
        password,
        conditions,
    });

    if (response.status === 201) {
        // L'inscription a réussi, vous pouvez rediriger l'utilisateur ou afficher un message de succès
        console.log('Inscription réussie');
    } else {
        // L'inscription a échoué, affichez un message d'erreur approprié
        console.log('Erreur lors de l\'inscription');
    }
    } catch (error) {
    console.error(error);
      // Gérez les erreurs de la requête ici
    }
};

return (
    <div className="contain-sign">
    <div className="child-sign">
        {/* Votre formulaire d'inscription */}
        <form onSubmit={handleSignIn}>
        <img src={logo2alone} alt="LogoSeul" className="imgLogo" />
        <div className="SignForm">
            <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="firstName"
            />
            <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="lastName"
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mail-sign"
            />
            <input
            type="date"
            placeholder="Âge"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="age-sign"
            />
            <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mdp-sign"
            />
            <div>
            <input
                type="checkbox"
                checked={conditions}
                onChange={(e) => setConditions(e.target.checked)}
                className="conditions"
            />
            <label className="check-sign">
                J'accepte les conditions d'utilisation
            </label>
            </div>
            <button type="submit" className="signBtn">
            Sign In
            </button>
        </div>
        </form>
    </div>
    </div>
);
}
