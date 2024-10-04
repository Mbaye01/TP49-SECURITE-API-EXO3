// index.js

const express = require("express");
const helmet = require("helmet"); // Pour sécuriser les en-têtes HTTP
const cors = require("cors"); // Pour gérer les requêtes cross-origin
const apiRoutes = require("./routes/app"); // Importer les routes API

const app = express();
const port = 3010;

// Middleware globaux
app.use(helmet()); // Utilisation de Helmet pour sécuriser les en-têtes HTTP
app.use(cors()); // Utilisation de CORS pour permettre des requêtes d'autres domaines
app.use(express.json()); // Pour parser les requêtes JSON

// Routes
app.use("/api/private-data", apiRoutes); // Toutes les routes API commenceront par /api

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
