"use strict";

const conn = require("./movie-connection"),
  MovieModel = () => {

  };

MovieModel.getAll = (cb) => {
	conn.query("SELECT * FROM movie", cb);
};

MovieModel.getById = () => {

};

MovieModel.insert = () => {

};

MovieModel.update = () => {

};

MovieModel.delete = () => {

};

module.exports = MovieModel;
