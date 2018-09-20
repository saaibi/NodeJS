"use strict";

const MovieModel = require("../models/movie-model"),
  MovieController = () => {};

MovieController.getAll = (req, res, next) => {
  MovieModel.getAll((err, rows) => {
    if (err) {
      let locals = {
        title: "Error al consultar la base de datos",
        description: "Error de Sintaxis SQL",
        error: err
      };
      res.render("error", locals);
    } else {
      let locals = {
        title: "Lista de Películas",
        data: rows
      };

      res.render("index", locals);
    }
  });
};

MovieController.getById = (req, res, next) => {};

MovieController.insert = (req, res, next) => {};

MovieController.update = (req, res, next) => {};

MovieController.delete = (req, res, next) => {};

MovieController.add = (req, res, next) => {};

MovieController.error404 = (req, res, next) => {};

module.exports = MovieController;
