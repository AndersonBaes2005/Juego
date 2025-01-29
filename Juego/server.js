const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para servir los archivos estáticos de la carpeta frontend
app.use(express.static(path.join(__dirname, "frontend")));

// Ruta para manejar cualquier otra petición no definida (opcional)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "Piedra_Papel_tijeras.html"));
});

// Iniciar el servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log("Disponible en la red local");
});
