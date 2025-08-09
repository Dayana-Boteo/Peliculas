const db = require("../models");
const Pelicula = db.pelicula;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({ message: "El nombre no puede estar vacío." });
    return;
  }

  const pelicula = {
    nombre: req.body.nombre,
    sinopsis: req.body.sinopsis,
    actores: req.body.actores,
    duracion: req.body.duracion,
    tipo: req.body.tipo,
    categoria: req.body.categoria,
    anio_lanzamiento: req.body.anio_lanzamiento,
    director: req.body.director
  };

  Pelicula.create(pelicula)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  const condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Pelicula.findAll({ where: condition })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Pelicula.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: "Error al recuperar la pelicula con id=" + id }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pelicula.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Pelicula actualizada correctamente." });
      } else {
        res.send({ message: `No se pudo actualizar la pelicula con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error al actualizar la pelicula con id=" + id }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pelicula.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Pelicula eliminada correctamente." });
      } else {
        res.send({ message: `No se pudo eliminar la pelicula con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error al eliminar la pelicula con id=" + id }));
};

exports.deleteAll = (req, res) => {
  Pelicula.destroy({ where: {}, truncate: false })
    .then(nums => res.send({ message: `${nums} peliculas eliminadas correctamente.` }))
    .catch(err => res.status(500).send({ message: err.message }));
};
