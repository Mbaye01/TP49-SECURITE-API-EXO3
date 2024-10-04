const API_KEY = "your-api-key"; // Clé API statique, vous pouvez la générer dynamiquement

module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).json({ error: "Access denied: Invalid API key" });
  }

  next(); // Passer au prochain middleware ou route
};
