const express = require("express");
const router = express.Router();
const apiKeyAuth = require("../middlewares/apiKeyAuth"); // Importation du middleware

// Route publique
router.get("/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

// Route privée sécurisée par la clé API
router.get("/api/private-data", apiKeyAuth, (req, res) => {
  res.json({ data: "This is private data" });
});

module.exports = router;
