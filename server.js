const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configuración de CORS
var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// Parseo de solicitudes con contenido tipo JSON
app.use(bodyParser.json());

// Parseo de solicitudes con contenido tipo x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
const db = require("./app/models");
db.sequelize.sync();
// Si deseas reiniciar la base de datos en cada ejecución, descomenta la siguiente línea:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Ruta base simple
app.get("/", (req, res) => {
  res.json({ message: "API Peliculas - UMG" });
});

// Importación de rutas
require("./app/routes/pelicula.routes.js")(app);

// Configuración del puerto
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}.`);
});
