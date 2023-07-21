const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

// Middleware pour analyser les données JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/loginParticulier', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
    console.log('Connecté à la base de données');
});

// Schéma et modèle Mongoose pour l'utilisateur
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('User', userSchema);

// Route pour l'inscription des utilisateurs
app.post('/signup', async (req, res) => {
    try {
    const { username, password } = req.body;

    // Vérifier si l'utilisateur existe déjà dans la base de données
    const existingUser = await User.findOne({ username });
    if (existingUser) {
    return res.status(400).json({ message: 'Nom d\'utilisateur déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
        username,
        password: hashedPassword,
    });

    // Enregistrer l'utilisateur dans la base de données
    await newUser.save();

    // Envoyer une réponse réussie
    res.status(201).json({ message: 'Utilisateur inscrit avec succès' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'inscription' });
}
});

// Démarrer le serveur
app.listen(port, () => {
console.log(`Serveur API en cours d'exécution sur le port ${port}`);
});
