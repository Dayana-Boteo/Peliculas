module.exports = (sequelize, Sequelize) => {
  const Pelicula = sequelize.define("pelicula", {
    nombre: {
      type: Sequelize.STRING
    },
    sinopsis: {
      type: Sequelize.STRING
    },
    actores: {
      type: Sequelize.STRING
    },
    duracion: {
      type: Sequelize.STRING
    },
    tipo: {
      type: Sequelize.STRING
    },
    categoria: {
      type: Sequelize.STRING
    },
    anio_lanzamiento: {
      type: Sequelize.INTEGER
    },
    director: {
      type: Sequelize.STRING
    }

  });
  return Pelicula;
};

